import type { Metadata } from "next";
import Link from "next/link";
import { zernioLink } from "@/lib/zernio-links";
import {
  GITHUB_URL,
  SETUP_DOCS_URL,
  ZERNIO_DOCS_URL,
} from "@/components/site/github";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  CheckIcon,
  StarIcon,
} from "@/components/site/icons";
import {
  DmBubbles,
  DmPanel,
  InboxList,
  InstagramDm,
  InstagramPost,
} from "@/components/site/instagram";
import { Carousel } from "@/components/site/carousel";
import { Faq } from "@/components/site/faq";
import { Reveal, TaglineReveal } from "@/components/site/reveal";
import { SiteFooter, SiteHeader, siteClass } from "@/components/site/shell";
import { SponsorCredit } from "@/components/site/sponsor";
import { DemoNotice } from "@/components/demo-notice";
import "./site.css";

export const metadata: Metadata = {
  title: "CHATDM — Instagram DM Automation for DJs, Producers & Creators",
  description:
    "Turn Instagram comments on your reels into Spotify streams, ticket sales, track ID drops, and booking requests. Automated private replies built for the music industry.",
};

const faqs: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "What is CHATDM?",
    a: "CHATDM is an automated Instagram comment-to-DM platform built specifically for DJs, music producers, record labels, and event curators. It instantly sends track links, tickets, sample packs, or booking riders when fans comment on your posts or reels.",
  },
  {
    q: "How does it help DJs and producers?",
    a: "Instead of losing listeners to 'link in bio', fans who comment keywords like 'ID', 'TRACK', or 'VIP' get instant automated DMs with your Spotify link, ticket portal, or booking rider.",
  },
  {
    q: "Does it work with TikTok, Facebook, or WhatsApp?",
    a: "CHATDM is built for Instagram. It handles comments on posts and reels, direct messages, and text replies to Stories via the official Meta Graph API.",
  },
  {
    q: "Which Instagram accounts can I connect?",
    a: "Instagram Professional accounts (Creator and Business). Connections use the official Meta API, and Instagram platform policies and rate limits apply.",
  },
  {
    q: "Is there a Free plan?",
    a: "Yes! CHATDM offers a generous Free tier to get started, and a Pro plan at $19/month for unlimited campaigns, advanced link tracking, and follow gates.",
  },
];

export default function Home() {
  return (
    <div id="top" className={siteClass}>
      <a className="skip button-sm" href="#main">
        Skip to content
      </a>
      <DemoNotice variant="banner" />
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="wrap hero">
          <h1 className="heading-1">
            Turn reel comments
            <br className="desktop-break" /> into streams & bookings.
          </h1>
          <p className="hero-sub body-3">
            When a fan comments on your DJ reel or festival clip, CHATDM drops the track ID, guestlist link, or booking rider straight into their DMs instantly.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg button-md" href="/login" style={{ background: "#673DE6" }}>
              Start with CHATDM <ArrowUpRightIcon />
            </Link>
            <a className="link button-sm" href="#how">
              See how it works <ArrowDownIcon />
            </a>
          </div>
          <div className="hero-stars body-5 text-[#673DE6] font-medium flex items-center gap-2">
            <span>⚡ Built for DJs, Electronic Producers & Music Creators</span>
          </div>

          <div
            className="stage"
            role="group"
            aria-label="A comment on an Instagram post becomes a private DM"
          >
            <Carousel className="stage-track" label="Comment and reply">
              <div className="stage-col stage-col-left">
                <div className="stage-wrap">
                  <InstagramPost />
                </div>
                <div className="stage-cap">
                  <span className="stage-chip caption-4">
                    Keyword <code>TRACK</code> matched
                  </span>
                </div>
              </div>
              <div className="stage-mid">
                <span className="stage-chip caption-4">
                  Keyword <code>TRACK</code> matched
                </span>
                <span className="stage-line" aria-hidden="true" />
                <span className="stage-chip caption-4">Instant DM Sent</span>
                <span className="stage-note caption-5">
                  Spotify link + presave delivered
                </span>
              </div>
              <div className="stage-col stage-col-right">
                <div className="stage-wrap">
                  <InstagramDm />
                </div>
                <div className="stage-cap">
                  <span className="stage-chip caption-4">Private reply</span>
                  <span className="stage-note caption-5">
                    Sent through the official Instagram API
                  </span>
                </div>
              </div>
            </Carousel>
          </div>

          <p className="hero-support caption-4">
            Instagram Creator & Business accounts. Works on post comments, reel comments, DMs, and Story replies.
          </p>
          <ul className="hero-proof">
            <li>Official Meta API</li>
            <li>No password sharing</li>
            <li>Instant Track & Ticket Drops</li>
            <li>100% Account Safe</li>
          </ul>
        </section>

        {/* Tagline reveal */}
        <section className="tagline wrap" aria-label="What CHATDM does">
          <TaglineReveal
            lines={[
              "Pick a trigger word like TRACK or GUESTLIST.",
              "The second a fan comments it on your post,",
              "CHATDM sends your Spotify link, SoundCloud private track,",
              "or ticket link straight to their inbox.",
            ]}
          />
        </section>

        {/* How it works */}
        <section id="how" className="section wrap" style={{ scrollMarginTop: 96 }}>
          <Reveal className="section-head">
            <h2 className="heading-4">How it works</h2>
            <p className="body-3">
              Drop unreleased IDs, VIP guestlists, sample packs, or your booking rider when fans comment. You set the keywords, CHATDM handles the crowd.
            </p>
          </Reveal>
          <div className="steps">
            <Reveal className="step">
              <div className="step-visual">
                <div className="app-provider">
                  <div className="on">
                    <p className="title-5">Zernio</p>
                    <p className="caption-5 muted">Managed connection</p>
                  </div>
                  <div>
                    <p className="title-5">Your Meta app</p>
                    <p className="caption-5 muted">Direct connection</p>
                  </div>
                </div>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-avatar caption-3">S</span>
                    <div>
                      <span className="title-4">@sunday.studio</span>
                      <span className="caption-5 sub">Instagram Business</span>
                    </div>
                    <span className="app-pill app-pill-ok caption-4">
                      <CheckIcon /> Connected
                    </span>
                  </div>
                </div>
              </div>
              <div className="step-text">
                <h3 className="heading-6">1. Connect your account</h3>
                <p className="body-6">
                  Choose Zernio or your own Meta app, then connect an Instagram
                  Business or Creator account.
                </p>
              </div>
            </Reveal>
            <Reveal className="step" delay={80}>
              <div className="step-visual">
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-thumb" aria-hidden="true">
                      <i />
                    </span>
                    <div>
                      <span className="title-4">Campaign: New drop</span>
                      <span className="caption-5 sub">@sunday.studio</span>
                    </div>
                  </div>
                  <div>
                    <p className="app-label">Keywords</p>
                    <div className="app-chips">
                      <span className="app-chip">GUIDE</span>
                      <span className="app-chip">LINK</span>
                    </div>
                  </div>
                  <div>
                    <p className="app-label">Private reply</p>
                    <div className="app-field caption-2">
                      Hey {"{username}"}! Here’s the link 👇
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-text">
                <h3 className="heading-6">2. Set up a campaign</h3>
                <p className="body-6">
                  Pick a post or reel, add keywords, and write the private
                  reply. Add a public reply or tracked link buttons if you need
                  them.
                </p>
              </div>
            </Reveal>
            <Reveal className="step" delay={160}>
              <div className="step-visual">
                <div className="app-card log-table">
                  {[
                    ["maya.creates", "GUIDE! need this", "Sent", "ok"],
                    ["jordan.wells", "GUIDE please", "Sent", "ok"],
                    ["tessa.lin", "Love this", "Skipped", "warn"],
                    ["rafael.n", "GUIDE", "Retrying", "warn"],
                  ].map(([name, text, status, tone]) => (
                    <div key={name} className="log-row">
                      <div>
                        <strong className="title-4">{name}</strong>
                        <span className="caption-5 sub">{text}</span>
                      </div>
                      <span
                        className={`app-pill caption-4 ${
                          tone === "ok" ? "app-pill-ok" : "app-pill-warn"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="step-text">
                <h3 className="heading-6">3. OpenReply handles the rest</h3>
                <p className="body-6">
                  Incoming events trigger your campaigns. A background worker
                  queues, rate-limits, and logs each send, with retries and
                  comment reconciliation.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="section wrap"
          style={{ scrollMarginTop: 96, paddingTop: 16 }}
        >
          <Reveal className="section-head">
            <h2 className="heading-4">Features</h2>
          </Reveal>
          <Carousel className="bento" label="Features">
            <Reveal className="cell cell-a">
              <div className="cell-visual cell-visual-split">
                <DmPanel>
                  <DmBubbles variant="buttons" />
                </DmPanel>
                <DmPanel>
                  <DmBubbles variant="follow" />
                </DmPanel>
              </div>
              <div className="cell-text">
                <h3 className="heading-6">Custom reply messages</h3>
                <p className="body-6">
                  Write your own messages, personalize with a username, and use
                  up to two tracked link buttons.
                </p>
              </div>
            </Reveal>
            <Reveal className="cell cell-b" delay={80}>
              <div className="cell-visual">
                <DmPanel>
                  <DmBubbles variant="story" />
                </DmPanel>
              </div>
              <div className="cell-text">
                <h3 className="heading-6">Multiple triggers</h3>
                <p className="body-6">
                  Trigger campaigns from post comments, incoming DMs, and text
                  replies to Stories.
                </p>
              </div>
            </Reveal>
            <Reveal className="cell cell-c">
              <div className="cell-visual">
                <InboxList />
              </div>
              <div className="cell-text">
                <h3 className="heading-6">Inbox</h3>
                <p className="body-6">
                  Read conversations and reply from OpenReply, within
                  Instagram’s messaging window.
                </p>
              </div>
            </Reveal>
            <Reveal className="cell cell-d" delay={80}>
              <div className="cell-visual cell-visual-split">
                <div className="app-card log-table" style={{ width: "100%" }}>
                  {[
                    ["Sent", "maya.creates", "9:41 AM", "ok"],
                    ["Skipped", "Not a keyword match", "9:38 AM", "warn"],
                    ["Failed", "Outside the 24 hour window", "9:12 AM", "bad"],
                    ["Sent", "jordan.wells", "9:09 AM", "ok"],
                  ].map(([status, detail, time, tone], i) => (
                    <div key={i} className="log-row">
                      <div>
                        <strong className="title-4">{detail}</strong>
                        <span className="caption-5 sub">{time}</span>
                      </div>
                      <span
                        className={`app-pill caption-4 ${
                          tone === "ok"
                            ? "app-pill-ok"
                            : tone === "warn"
                              ? "app-pill-warn"
                              : "app-pill-bad"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="app-card" style={{ width: "100%" }}>
                  <div className="app-row">
                    <p className="app-label" style={{ margin: 0, flex: 1 }}>
                      Tracked links
                    </p>
                    <span className="caption-5 muted">Campaign: New drop</span>
                  </div>
                  {[
                    ["Shop the new drop", "Button 1", "128", "9.4%"],
                    ["Read the guide", "Button 2", "47", "3.5%"],
                  ].map(([label, button, clicks, ctr]) => (
                    <div key={label} className="log-row">
                      <div>
                        <strong className="title-4">{label}</strong>
                        <span className="caption-5 sub">{button}</span>
                      </div>
                      <div className="stat">
                        <strong className="title-4">{clicks} clicks</strong>
                        <span className="caption-5 sub">{ctr} CTR</span>
                      </div>
                    </div>
                  ))}
                  <p className="caption-5 muted">1,362 private replies sent</p>
                </div>
              </div>
              <div className="cell-text">
                <h3 className="heading-6">Delivery logs</h3>
                <p className="body-6">
                  See sent, skipped, and failed messages, with reasons. Follow
                  tracked link clicks back to a campaign.
                </p>
              </div>
            </Reveal>
          </Carousel>
        </section>

        {/* Open source */}
        <section className="section wrap" style={{ paddingTop: 16 }}>
          <Reveal className="band">
            <div>
              <h2 className="heading-4">Open code you can inspect.</h2>
              <p className="body-6">
                OpenReply owns the campaigns, keyword matching, queues, retries,
                logs, and inbox. Your connection provider handles the Instagram
                API.
              </p>
              <a href={GITHUB_URL} className="link button-sm">
                Explore the source <ArrowUpRightIcon />
              </a>
            </div>
            <div className="runtime">
              <div>
                <span className="mono">Web app</span>
                <strong className="body-2">Next.js + React</strong>
                <span>Dashboard & incoming events</span>
              </div>
              <div>
                <span className="mono">Background worker</span>
                <strong className="body-2">Node.js + BullMQ</strong>
                <span>Queued delivery & reconciliation</span>
              </div>
              <div>
                <span className="mono">Your data</span>
                <strong className="body-2">PostgreSQL + Redis</strong>
                <span>Campaigns, accounts, logs & queue</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Setup */}
        <section id="setup" className="section wrap" style={{ scrollMarginTop: 96, paddingTop: 16 }}>
          <Reveal className="section-head">
            <h2 className="heading-4">Self-host OpenReply. Choose your connection.</h2>
            <p className="body-3">
              Both options need your own web app, background worker, PostgreSQL,
              and Redis. OpenReply is free software; hosting and provider costs
              are separate.
            </p>
          </Reveal>
          <div className="providers">
            <Reveal className="provider provider-rec">
              <h3 className="heading-6">Connect with Zernio</h3>
              <span className="provider-tag caption-5">
                Recommended for simpler setup
              </span>
              <p className="body-6">
                Use Zernio’s managed Instagram connection instead of creating
                and reviewing your own Meta app. Save an API key in Settings,
                choose a profile, and connect your account.
              </p>
              <ul className="body-6">
                <li>No Meta app secrets to configure in OpenReply</li>
                <li>OpenReply registers the webhook for you</li>
                <li>Optional paid service and project sponsor</li>
              </ul>
              <div className="provider-links">
                <a
                  className="link button-sm"
                  href={zernioLink({ placement: "landing-setup" })}
                  rel="sponsored noopener noreferrer"
                  target="_blank"
                >
                  Explore Zernio <ArrowUpRightIcon />
                </a>
                <a className="link-strong caption-5" href={ZERNIO_DOCS_URL}>
                  Read setup & feature limits
                </a>
              </div>
            </Reveal>
            <Reveal className="provider" delay={80}>
              <h3 className="heading-6">Use your own Meta app</h3>
              <span className="provider-tag caption-5">Direct connection</span>
              <p className="body-6">
                Connect directly through Meta. Create your app, configure
                Instagram Login and webhooks, and manage platform credentials
                yourself.
              </p>
              <ul className="body-6">
                <li>Bring your own Meta app and secrets</li>
                <li>Handle App Review where required</li>
                <li>No Zernio account or subscription needed</li>
              </ul>
              <div className="provider-links">
                <a className="link button-sm" href={`${SETUP_DOCS_URL}#the-meta-app`}>
                  Follow the direct Meta guide <ArrowUpRightIcon />
                </a>
              </div>
            </Reveal>
          </div>
          <p className="setup-note caption-5">
            Instagram’s account requirements, permissions, messaging windows,
            and rate limits apply with either provider. Existing accounts are
            never automatically migrated.
          </p>
        </section>

        {/* FAQ */}
        <section className="section wrap" style={{ paddingTop: 16 }}>
          <div className="faq">
            <Reveal>
              <h2 className="heading-4">FAQ</h2>
            </Reveal>
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </section>

        {/* Closing */}
        <section className="closing wrap">
          <Reveal>
            <h2 className="heading-3">Set up your first campaign</h2>
            <p className="body-3">
              Clone it, connect Instagram, and write your first reply.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg button-md" href={SETUP_DOCS_URL}>
                Set up OpenReply <ArrowUpRightIcon />
              </a>
              <a className="link button-sm" href={GITHUB_URL}>
                Star on GitHub <ArrowUpRightIcon />
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
