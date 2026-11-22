# DEPLOY-PREP — Live Deploy Checklist

> Branch: `setup-live-test` · Budget: \$0 · No Docker · No new installs

---

## Job 1 — EMAIL_FROM

**Current value (line 17 of `.env`):**
```
EMAIL_FROM=CHAT DM <login@missdjbliss.com>
```
`.env` is never committed. This line is noted here for review only — no value was changed.

---

## Job 2 — Redis

**Redis is NOT installed on this Mac and Homebrew is not available.** The worker (`worker/dm-worker.ts`) calls `createDMWorker()` which opens a BullMQ Worker backed by ioredis. BullMQ will throw on startup if the Redis URL is unreachable.

> **The worker cannot run until Redis exists.**

### Two free options (pick one):

#### Option A — Redis Cloud free tier (30 MB)
1. Sign up at <https://redis.io/try-free/> (no credit card for the free tier).
2. Create a free database; copy the public endpoint.
3. In `.env`, change:
   ```
   REDIS_URL=rediss://<user>:<password>@<host>:<port>
   ```
   Set the **same** value as `REDIS_URL` in the worker host env vars (see Job 3).

#### Option B — Docker Desktop (install later)
1. Install Docker Desktop for Mac (<https://www.docker.com/products/docker-desktop/>).
2. `docker run -d -p 6379:6379 redis:alpine`
3. `.env` already has the right value for local use:
   ```
   REDIS_URL=redis://localhost:6379
   ```
   For the live worker host, use the Redis Cloud URL from Option A anyway — Docker on your laptop is local only.

---

## Job 3 — DEPLOY-PREP

### Environment Variables — Names Only

#### Web App (Vercel)

| Variable | Notes |
|---|---|
| `NEXTAUTH_URL` | Set to your live Vercel URL after first deploy |
| `NEXTAUTH_SECRET` | Generate: `openssl rand -base64 32` |
| `CRON_SECRET` | Protects `/api/cron/*` routes |
| `ENCRYPTION_KEY` | Encrypts stored Instagram tokens |
| `DATABASE_URL` | Postgres connection string |
| `REDIS_URL` | Redis connection string (from Job 2) |
| `RESEND_API_KEY` | Resend dashboard → API Keys |
| `EMAIL_FROM` | `CHAT DM <login@missdjbliss.com>` (not a secret) |
| `INSTAGRAM_APP_ID` | Meta app → App settings → Basic |
| `INSTAGRAM_APP_SECRET` | Meta app → App settings → Basic |
| `FACEBOOK_APP_SECRET` | Meta app → App settings → Basic (same app) |
| `WEBHOOK_VERIFY_TOKEN` | Any secret string; must match Meta webhook config |
| `META_GRAPH_API_VERSION` | e.g. `v25.0` (already set) |

#### Worker (always-on host, e.g. Railway / Render free tier)

| Variable | Notes |
|---|---|
| `DATABASE_URL` | Same value as web app |
| `REDIS_URL` | Same value as web app |
| `ENCRYPTION_KEY` | Same value as web app |
| `INSTAGRAM_APP_ID` | Same value as web app |
| `INSTAGRAM_APP_SECRET` | Same value as web app |
| `FACEBOOK_APP_SECRET` | Same value as web app |
| `META_GRAPH_API_VERSION` | Same value as web app |

Start command for the worker host: `npm run worker`
(resolves to `tsx worker/dm-worker.ts`)

---

### Deploy Steps — In Order

```
1. Push branch setup-live-test to origin (this step — done below)

2. Vercel — import project
   • Connect bossbabecollab/CHATDM repo in Vercel dashboard
   • Build command: npm run vercel-build
     (runs: prisma generate && prisma migrate deploy && next build)
   • Set all "Web App" env vars from the table above
   • First deploy produces your live URL → set NEXTAUTH_URL to that URL
   • Redeploy after setting NEXTAUTH_URL

3. Redis Cloud free tier (Option A above)
   • Create free database → copy REDIS_URL
   • Set REDIS_URL in Vercel and worker host env vars

4. Worker host (free always-on, e.g. Railway Hobby or Render free)
   • Connect same repo; root directory = project root
   • Start command: npm run worker
   • Set "Worker" env vars from the table above
   • Worker stays running; Vercel handles HTTP

5. Meta app settings (Meta for Developers → Your App)

   Webhook callback URL (the actual route in this codebase):
     https://<YOUR_VERCEL_URL>/api/webhook

   Verify token:
     Value of WEBHOOK_VERIFY_TOKEN (name only — set it in Vercel env vars)

   OAuth redirect URI (the actual callback route in this codebase):
     https://<YOUR_VERCEL_URL>/api/instagram/callback

   Webhook subscriptions (from lib/meta/client.ts line 973):
     • messages
     • comments

   Instagram permissions your app requests (from lib/meta/oauth.ts):
     • instagram_business_basic
     • instagram_business_manage_messages
     • instagram_business_manage_comments
     • instagram_business_manage_insights
```

---

> [!IMPORTANT]
> `.env` is in `.gitignore` and is **never committed**. All secrets are set
> directly in Vercel and worker host dashboards.
