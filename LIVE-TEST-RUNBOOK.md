# LIVE-TEST-RUNBOOK

Step-by-step for tomorrow's live test — do these in order, top to bottom.
Check each box as you go.

---

## PART 1 — Paste Your 4 Secrets into .env

> `.env` is on your machine only — never committed, never shared.

- [ ] Open `.env` in your editor
- [ ] Find `INSTAGRAM_APP_ID=` → paste your real value after the `=`
- [ ] Find `INSTAGRAM_APP_SECRET=` → paste your real value after the `=`
- [ ] Find `FACEBOOK_APP_SECRET=` → paste your real value after the `=`
- [ ] Find `RESEND_API_KEY=` → paste your real value after the `=`
- [ ] Save `.env`

---

## PART 2 — Redis Cloud Free Tier (30 MB, no credit card)

- [ ] Go to **https://redis.io/try-free/**
- [ ] Click **Get Started Free** → sign up with email (or Google/GitHub)
- [ ] After login: click **New database**
- [ ] Choose **Free** plan → pick any cloud region → click **Let's start free**
- [ ] Wait ~30 seconds for the database to provision
- [ ] On the database card click **Connect**
- [ ] Copy the connection string — it looks like:
      `rediss://default:<password>@<host>:<port>`
- [ ] Open `.env` → find `REDIS_URL=` → replace the whole value with your copied string
- [ ] Save `.env`

---

## PART 3 — Vercel Deploy

- [ ] Go to **https://vercel.com** → log in
- [ ] Click **Add New → Project**
- [ ] Import from GitHub → find **bossbabecollab/CHATDM**
- [ ] Branch to deploy: **`setup-live-test`**
- [ ] Build command is already set in the repo: `npm run vercel-build`
- [ ] Open **Environment Variables** in the Vercel UI and add every variable below
      (names and your real values — Vercel encrypts them):

  | Variable | Where to get the value |
  |---|---|
  | `NEXTAUTH_SECRET` | Your .env value |
  | `CRON_SECRET` | Your .env value |
  | `ENCRYPTION_KEY` | Your .env value |
  | `DATABASE_URL` | Your .env value |
  | `REDIS_URL` | Redis Cloud string from Part 2 |
  | `RESEND_API_KEY` | Your .env value (pasted in Part 1) |
  | `EMAIL_FROM` | `CHAT DM <login@missdjbliss.net>` |
  | `INSTAGRAM_APP_ID` | Your .env value (pasted in Part 1) |
  | `INSTAGRAM_APP_SECRET` | Your .env value (pasted in Part 1) |
  | `FACEBOOK_APP_SECRET` | Your .env value (pasted in Part 1) |
  | `WEBHOOK_VERIFY_TOKEN` | Your .env value |
  | `META_GRAPH_API_VERSION` | `v25.0` |

- [ ] Click **Deploy** — wait for the green checkmark
- [ ] Copy your live URL (e.g. `https://chatdm-xyz.vercel.app`)
- [ ] Back in Vercel → Settings → Environment Variables → **add one more**:
      `NEXTAUTH_URL` = your live URL (exactly as shown, no trailing slash)
- [ ] Go to Vercel → Deployments → click **Redeploy** (so NEXTAUTH_URL takes effect)
- [ ] Confirm the redeploy succeeds ✓

---

## PART 4 — Meta App Webhook Setup

> Meta for Developers → **https://developers.facebook.com/apps** → open your app

### 4a — Webhook callback

- [ ] In the left sidebar: **Webhooks** (under Products)
- [ ] Click **Edit Subscription** (or **Add Callback URL** if first time)
- [ ] **Callback URL:**
      `https://<YOUR_VERCEL_URL>/api/webhook`
      *(replace `<YOUR_VERCEL_URL>` with the live URL from Part 3)*
- [ ] **Verify Token:** paste the value of `WEBHOOK_VERIFY_TOKEN` from your `.env`
- [ ] Click **Verify and Save** — Meta will ping `/api/webhook?hub.mode=subscribe&hub.verify_token=...`
      and your app responds 200 ✓

### 4b — Subscribe to fields

- [ ] Under the webhook subscription, click **Manage**
- [ ] Enable field: **`messages`**
- [ ] Enable field: **`comments`**
- [ ] Click **Update**

### 4c — OAuth redirect URI

- [ ] Left sidebar → **Instagram** → **Basic Display** (or **Instagram API** depending on app type)
- [ ] Find **Valid OAuth Redirect URIs**
- [ ] Add: `https://<YOUR_VERCEL_URL>/api/instagram/callback`
- [ ] Click **Save Changes**

### 4d — App in Live mode

- [ ] Top of the page: toggle the app from **Development** → **Live**
- [ ] Confirm the modal

---

## PART 5 — Worker Host (always-on process)

> Vercel serverless functions do not run long-lived workers. BullMQ needs a persistent process.

- [ ] Go to **https://railway.app** (free starter plan) or **https://render.com** (free tier)
- [ ] Create a new service → connect **bossbabecollab/CHATDM**
- [ ] Branch: **`setup-live-test`**
- [ ] Start command: `npm run worker`
- [ ] Add environment variables (same as Vercel table above, only these are required):

  | Variable |
  |---|
  | `DATABASE_URL` |
  | `REDIS_URL` |
  | `ENCRYPTION_KEY` |
  | `INSTAGRAM_APP_ID` |
  | `INSTAGRAM_APP_SECRET` |
  | `FACEBOOK_APP_SECRET` |
  | `META_GRAPH_API_VERSION` |

- [ ] Deploy the worker service
- [ ] Check logs — you should see: `[DM Worker] Started`

---

## PART 6 — @inn3rbliss MIX Test

- [ ] Log in to your live app at `https://<YOUR_VERCEL_URL>`
- [ ] Connect your Instagram account (Settings → Connect Instagram)
- [ ] Go to **Automations** → create a test campaign
      - Trigger: a comment on a post
      - Action: send a DM reply
- [ ] From the **@inn3rbliss** Instagram account, comment on the target post
- [ ] Watch the Vercel function logs: you should see the webhook POST arrive at `/api/webhook`
- [ ] Watch the worker logs: you should see the DM job processed
- [ ] Confirm **@inn3rbliss** receives the DM ✓

---

## PART 7 — MIX Test Campaign Copy

Use this copy when you set up the test campaign in Part 6.
Swap `[YOUR MIX LINK]` with the real URL before you go live.

### Public comment reply
> (What your automation posts back on the comment thread)

```
glad you're vibing with it 🎵 check your DMs!
```

### DM text
> (What gets sent to @inn3rbliss's inbox)

```
hey! 👋 here's the mix you asked about — [YOUR MIX LINK]

let me know what you think 🎧
```

**Notes:**
- Keep `[YOUR MIX LINK]` as a plain URL (no markdown) so Instagram renders it as a tap-able link
- The comment reply is intentionally vague — no link in public comments (Meta policy)
- DM goes out only after the comment trigger fires, so the flow is: comment → public reply → DM

---

## Done ✓

All green → the live stack is working end-to-end.
