#!/usr/bin/env node
/**
 * post-deploy smoke test
 * Run after Vercel deploy: node scripts/smoke-test.mjs https://your-live-url.vercel.app
 *
 * Checks: health endpoint, webhook GET verification, auth redirect, DB connectivity
 * Exit 0 = all green. Exit 1 = one or more checks failed.
 */

const BASE = process.argv[2];

if (!BASE) {
  console.error("Usage: node scripts/smoke-test.mjs https://your-live-url.vercel.app");
  process.exit(1);
}

const results = [];

async function check(label, fn) {
  try {
    const ok = await fn();
    const icon = ok ? "✅" : "❌";
    console.log(`${icon} ${label}`);
    results.push({ label, ok });
  } catch (err) {
    console.log(`❌ ${label} — ${err.message}`);
    results.push({ label, ok: false });
  }
}

// 1. Health endpoint
await check("GET /api/health → 200", async () => {
  const res = await fetch(`${BASE}/api/health`);
  return res.status === 200;
});

// 2. Webhook GET — no token → 403
await check("GET /api/webhook (no token) → 403", async () => {
  const res = await fetch(`${BASE}/api/webhook`);
  return res.status === 403;
});

// 3. Webhook GET — wrong token → 403
await check("GET /api/webhook (wrong token) → 403", async () => {
  const res = await fetch(
    `${BASE}/api/webhook?hub.mode=subscribe&hub.verify_token=WRONG&hub.challenge=abc`
  );
  return res.status === 403;
});

// 4. Auth redirect — unauthenticated / → redirect to /login
await check("GET / (unauthed) → redirect to /login", async () => {
  const res = await fetch(`${BASE}/`, { redirect: "manual" });
  const loc = res.headers.get("location") ?? "";
  return res.status >= 300 && res.status < 400 && (loc.includes("/login") || loc.includes("signin"));
});

// 5. Instagram callback without params → error response (not 500)
await check("GET /api/instagram/callback (no params) → not 500", async () => {
  const res = await fetch(`${BASE}/api/instagram/callback`, { redirect: "manual" });
  return res.status !== 500;
});

// 6. Static asset — confirm Next.js is serving
await check("GET / → not 502/503 (app is up)", async () => {
  const res = await fetch(`${BASE}/`, { redirect: "manual" });
  return res.status !== 502 && res.status !== 503;
});

// Summary
const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);

if (failed.length > 0) {
  console.log("\nFailed:");
  failed.forEach((r) => console.log(`  • ${r.label}`));
  process.exit(1);
} else {
  console.log("All green — stack is live ✓");
  process.exit(0);
}
