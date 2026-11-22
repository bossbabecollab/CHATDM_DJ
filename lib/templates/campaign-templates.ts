export interface CampaignTemplate {
  slug: string;
  title: string;
  category: string;
  audience: string;
  summary: string;
  goal: string;
  keywords: string[];
  dmMessage: string;
  triggerExample: string;
  privateReplyPreview: string;
  setupMinutes: number;
  outcome: string;
  bestFor: string[];
  playbook: string[];
  metrics: string[];
  accent: "cyan" | "emerald" | "rose" | "amber";
}

export const CAMPAIGN_TEMPLATES: CampaignTemplate[] = [
  {
    slug: "dj-track-id-drop",
    title: "Track ID & Spotify Presave Drop",
    category: "Music & DJ",
    audience: "DJs and electronic music producers",
    summary:
      "When fans comment ID or TRACK on your festival clip or studio reel, instantly DM them the Spotify presave, Soundcloud link, or track name.",
    goal: "Track ID & music distribution",
    keywords: ["ID", "TRACK", "SONG", "TUNE"],
    dmMessage:
      "Hey {username}! Here is the unreleased ID you asked about from my set: https://spotify.link/your-track Enjoy the tune! 🎧",
    triggerExample: "ID please!! 🔥",
    privateReplyPreview:
      "Hey Alex! Here is the unreleased ID you asked about: spotify.link/your-track",
    setupMinutes: 2,
    outcome: "Boost Spotify stream counts, Beatport rankings, and presaves directly from viral reel comments.",
    bestFor: ["Festival reels", "Studio cookup clips", "Teaser drops", "DJ mix videos"],
    playbook: [
      "Post a reel with the best drop or unreleased track moment.",
      "Add 'Comment ID for the private track link' in your caption.",
      "Connect CHATDM to deliver your Spotify or Soundcloud link instantly.",
      "Watch your direct messages convert into loyal daily listeners.",
    ],
    metrics: ["Track link clicks", "Spotify presaves", "DM delivery rate"],
    accent: "rose",
  },
  {
    slug: "dj-guestlist-vip",
    title: "VIP Guestlist & Ticket Access",
    category: "Events & Touring",
    audience: "Touring DJs, nightlife promoters, event curators",
    summary:
      "Send discount ticket links, secret venue locations, or limited guestlist spots when fans comment VIP or GUESTLIST.",
    goal: "Ticket sales & event attendance",
    keywords: ["VIP", "TICKETS", "GUESTLIST", "PARTY"],
    dmMessage:
      "Yo {username}! Here's your exclusive VIP guestlist link for this Saturday's headline set: https://posh.vip/event/tickets See you on the dancefloor! ⚡",
    triggerExample: "VIP guestlist please",
    privateReplyPreview:
      "Yo Jordan! Here's your exclusive VIP guestlist link: posh.vip/event/tickets",
    setupMinutes: 3,
    outcome: "Pack venue dancefloors and sell out tier-1 tickets directly through social word-of-mouth.",
    bestFor: ["Tour date announcements", "Club gig promo", "Festival afterparties"],
    playbook: [
      "Record an energetic video announcing your upcoming city or club stop.",
      "Offer the first 50 commenters VIP or discounted entry.",
      "Send the ticketing link with one-tap checkout in the DM.",
      "Track conversions and message guests with door times on event day.",
    ],
    metrics: ["Ticket page CTR", "Guestlist claims", "Follower growth"],
    accent: "cyan",
  },
  {
    slug: "dj-booking-rider",
    title: "DJ Gig Booking, Press Kit & Tech Rider",
    category: "Professional Music",
    audience: "Independent DJs, agents, live performers",
    summary:
      "Convert event promoters and club buyers asking for booking info into confirmed gigs by automating your tech rider and calendar link.",
    goal: "Gig inquiries & promoter conversion",
    keywords: ["BOOKING", "GIG", "RIDER", "DATES"],
    dmMessage:
      "Hey {username}, thanks for reaching out! For bookings, tech rider (CDJ-3000 / DJM-A9), and open tour dates, check out my official portal: https://dj.bio/booking or email booking@yourartistname.com",
    triggerExample: "Are you available for booking in Chicago?",
    privateReplyPreview:
      "Hey Mark! Here is my official booking portal and tech rider: dj.bio/booking",
    setupMinutes: 4,
    outcome: "Never lose a lucrative festival, wedding, or club booking inquiry in your crowded DMs.",
    bestFor: ["Performance clips", "Press photos", "Behind-the-booth reels"],
    playbook: [
      "Include a prompt on your bio and reels: 'Promoters: comment BOOKING for availability'.",
      "Send your EPK (Electronic Press Kit), tech requirements, and booking form.",
      "Collect venue capacity, date, and budget details automatically.",
      "Review incoming inquiries in your CHATDM inbox within Meta's 24-hr window.",
    ],
    metrics: ["Booking link opens", "EPK downloads", "Direct replies"],
    accent: "emerald",
  },
  {
    slug: "producer-sample-pack",
    title: "Free Sample Pack & Serum Presets",
    category: "Music Production",
    audience: "Music producers, sound designers, beatmakers",
    summary:
      "Grow your producer email list or community by delivering free drum kits, Serum presets, or Ableton project files on comment.",
    goal: "Lead generation & producer community",
    keywords: ["PACK", "SERUM", "STEMS", "DRUMS"],
    dmMessage:
      "What's up {username}! Grab the free 'Future Bass & House Drums Vol. 1' sample pack right here: https://yourbrand.gumroad.com/l/free-pack Let me know what you cook up with it! 🎹",
    triggerExample: "PACK please!",
    privateReplyPreview:
      "What's up Sam! Grab your free sample pack: gumroad.com/l/free-pack",
    setupMinutes: 3,
    outcome: "Turn casual producer viewers into high-intent customers for your sound libraries and courses.",
    bestFor: ["Tutorial reels", "Beat breakdown videos", "Plugin preset demos"],
    playbook: [
      "Showcase a killer synth lead or punchy kick in a 15-second reel.",
      "Tell producers to comment PACK to download the exact sounds for free.",
      "Send the direct download link with a follow gate enabled.",
      "Grow your producer email list and community on autopilot.",
    ],
    metrics: ["Download conversions", "Follower gate pass rate"],
    accent: "amber",
  },
  {
    slug: "dj-live-set-recording",
    title: "Full Live Set & Soundcloud Mix Drop",
    category: "Music & DJ",
    audience: "DJs, podcasters, radio hosts",
    summary:
      "Send the full 2-hour HD live set audio recording on YouTube, Apple Podcasts, or Soundcloud when fans comment SET or MIX.",
    goal: "Long-form content engagement",
    keywords: ["SET", "MIX", "AUDIO", "RECORDING"],
    dmMessage:
      "Hey {username}! Here's the unedited 2-hour live recording from my festival set: https://soundcloud.com/your-artist/live-set Turn it up loud! 🚀",
    triggerExample: "Where can I hear the full SET?",
    privateReplyPreview:
      "Hey David! Here is the full 2-hour festival live set: soundcloud.com/your-artist/live-set",
    setupMinutes: 2,
    outcome: "Channel 15-second viral reel attention into 2-hour loyal listener sessions on streaming platforms.",
    bestFor: ["Festival crowd recaps", "Boiler room style videos", "Radio show clips"],
    playbook: [
      "Cut the best 30-second crowd reaction from your live gig.",
      "Invite viewers to comment SET to get the complete tracklist and unedited recording.",
      "Deliver the Soundcloud or YouTube URL with a one-click listen button.",
      "Retain commenters as long-term followers and subscribers.",
    ],
    metrics: ["Mix stream clicks", "Tracklist link CTR"],
    accent: "rose",
  },
  {
    slug: "dtc-product-link",
    title: "DTC Product Link Drop",
    category: "Social commerce",
    audience: "DTC brands",
    summary:
      "Turn comments like LINK or SHOP into a private reply with the exact product page, size guide, or launch bundle.",
    goal: "Product link request",
    keywords: ["LINK", "SHOP", "BUY"],
    dmMessage:
      "Hey {username}, here is the product link you asked for: https://yourstore.com/product",
    triggerExample: "LINK please",
    privateReplyPreview:
      "Hey Maya, here is the product link you asked for: yourstore.com/product",
    setupMinutes: 4,
    outcome: "More warm product conversations from high-intent comments.",
    bestFor: ["Product drops", "UGC reels", "Influencer campaigns"],
    playbook: [
      "Pick the reel or post that shows the product clearly.",
      "Use LINK, SHOP, and BUY as the first keywords.",
      "Send a direct product URL with one short benefit line.",
      "Track which product posts create the most sent replies.",
    ],
    metrics: ["Sent replies", "Skipped duplicates", "Product link CTR"],
    accent: "cyan",
  },
  {
    slug: "real-estate-lead-form",
    title: "Real Estate Lead Form",
    category: "Lead generation",
    audience: "Agents and broker teams",
    summary:
      "Send buyers or sellers a valuation form, booking link, or neighborhood guide after they comment on a listing reel.",
    goal: "Lead magnet delivery",
    keywords: ["HOME", "LISTING", "VALUE"],
    dmMessage:
      "Hey {username}, here is the form to get the property details and next available showing slots: https://yourlink.com/home",
    triggerExample: "HOME details",
    privateReplyPreview:
      "Hey Jordan, here is the form to get property details and showing slots.",
    setupMinutes: 5,
    outcome: "Capture listing interest before it gets buried in comments.",
    bestFor: ["Listing reels", "Neighborhood guides", "Seller valuation posts"],
    playbook: [
      "Choose one property or local-market post.",
      "Use keywords that match buyer intent, not generic emojis.",
      "Send a form that asks for contact details and timing.",
      "Follow up manually with qualified leads from the form.",
    ],
    metrics: ["Lead form opens", "DM sends", "Booked showings"],
    accent: "emerald",
  },
  {
    slug: "fitness-plan",
    title: "Fitness Plan Download",
    category: "Creator funnels",
    audience: "Coaches and fitness creators",
    summary:
      "Deliver a workout plan, macro guide, or coaching intake form when followers comment PLAN, FIT, or START.",
    goal: "Lead magnet delivery",
    keywords: ["PLAN", "FIT", "START"],
    dmMessage:
      "Hey {username}, here is the free plan from the reel: https://yourlink.com/fitness-plan",
    triggerExample: "PLAN",
    privateReplyPreview:
      "Hey Sam, here is the free plan from the reel: yourlink.com/fitness-plan",
    setupMinutes: 3,
    outcome: "Move motivated followers into a coaching or email funnel.",
    bestFor: ["Workout reels", "Transformation posts", "Challenge launches"],
    playbook: [
      "Post a reel that shows the result and asks for one keyword.",
      "Keep the DM short and focused on the promised asset.",
      "Add a coaching intake link after the free value.",
      "Review failed and skipped logs after high-traffic reels.",
    ],
    metrics: ["Guide requests", "Challenge signups", "Coaching inquiries"],
    accent: "rose",
  },
  {
    slug: "course-webinar",
    title: "Course Webinar Invite",
    category: "Education",
    audience: "Course sellers",
    summary:
      "Send webinar registration or lesson links to followers who comment WEBINAR, CLASS, or LEARN on educational posts.",
    goal: "Launch waitlist",
    keywords: ["WEBINAR", "CLASS", "LEARN"],
    dmMessage:
      "Hey {username}, here is the free class registration link: https://yourlink.com/webinar",
    triggerExample: "WEBINAR",
    privateReplyPreview:
      "Hey Alex, here is the free class registration link: yourlink.com/webinar",
    setupMinutes: 4,
    outcome: "Convert educational reach into webinar and waitlist registrations.",
    bestFor: ["Course launches", "Mini trainings", "Live workshops"],
    playbook: [
      "Attach the campaign to a proof-heavy educational reel.",
      "Use one primary keyword in the caption and two fallback keywords.",
      "Send the registration link with the date or promise.",
      "Use the sent log to compare organic posts before ad spend.",
    ],
    metrics: ["Registrations", "DM sends", "Show-up rate"],
    accent: "amber",
  },
  {
    slug: "beauty-price-list",
    title: "Beauty Service Price List",
    category: "Local services",
    audience: "Salons, spas, and beauty pros",
    summary:
      "Reply with pricing, booking links, and service menus when people comment PRICE, MENU, or BOOK.",
    goal: "Price or availability reply",
    keywords: ["PRICE", "MENU", "BOOK"],
    dmMessage:
      "Hey {username}, here is our service menu and booking link: https://yourlink.com/booking",
    triggerExample: "PRICE",
    privateReplyPreview:
      "Hey Riley, here is our service menu and booking link.",
    setupMinutes: 4,
    outcome: "Reduce repetitive comment replies and move buyers toward booking.",
    bestFor: ["Before/after reels", "Service menu posts", "Availability posts"],
    playbook: [
      "Choose a post where people already ask about pricing.",
      "Add a booking link with clear service categories.",
      "Keep the DM compliant and avoid medical or exaggerated claims.",
      "Update the link when pricing or availability changes.",
    ],
    metrics: ["Booking link clicks", "DM sends", "New appointments"],
    accent: "rose",
  },
  {
    slug: "restaurant-menu",
    title: "Restaurant Menu And Reservation",
    category: "Hospitality",
    audience: "Restaurants and cafes",
    summary:
      "Send menus, reservation links, or event specials when guests comment MENU, TABLE, or RESERVE.",
    goal: "Product link request",
    keywords: ["MENU", "TABLE", "RESERVE"],
    dmMessage:
      "Hey {username}, here is our menu and reservation link: https://yourlink.com/menu",
    triggerExample: "MENU",
    privateReplyPreview:
      "Hey Taylor, here is our menu and reservation link.",
    setupMinutes: 3,
    outcome: "Turn food reels into reservations and menu views.",
    bestFor: ["Specials", "New menu launches", "Weekend reservation pushes"],
    playbook: [
      "Use a high-appetite food reel with a clear comment prompt.",
      "Send a mobile-friendly menu or booking page.",
      "Mention limited seating only when it is true.",
      "Repeat the template for seasonal specials.",
    ],
    metrics: ["Menu clicks", "Reservations", "Weekend campaign replies"],
    accent: "amber",
  },
  {
    slug: "event-rsvp",
    title: "Event RSVP Campaign",
    category: "Events",
    audience: "Venues, communities, and launch teams",
    summary:
      "Send RSVP forms, calendar links, or ticket pages after someone comments RSVP, TICKET, or JOIN.",
    goal: "Launch waitlist",
    keywords: ["RSVP", "TICKET", "JOIN"],
    dmMessage:
      "Hey {username}, here is the RSVP link with event details: https://yourlink.com/rsvp",
    triggerExample: "RSVP",
    privateReplyPreview:
      "Hey Morgan, here is the RSVP link with event details.",
    setupMinutes: 4,
    outcome: "Convert event attention into measurable RSVPs.",
    bestFor: ["Popups", "Workshops", "Community events"],
    playbook: [
      "Choose the event announcement or recap reel.",
      "Use RSVP as the main keyword and add ticket-oriented fallbacks.",
      "Send one link that includes date, location, and confirmation.",
      "Pause the campaign after the event ends.",
    ],
    metrics: ["RSVPs", "Ticket clicks", "Replies by event post"],
    accent: "emerald",
  },
  {
    slug: "creator-media-kit",
    title: "Creator Media Kit Reply",
    category: "Creator business",
    audience: "Creators and agencies",
    summary:
      "Send a media kit, rate card, or brand inquiry form when brands comment COLLAB, KIT, or RATES.",
    goal: "Agency client campaign",
    keywords: ["COLLAB", "KIT", "RATES"],
    dmMessage:
      "Hey {username}, here is my media kit and partnership form: https://yourlink.com/media-kit",
    triggerExample: "COLLAB",
    privateReplyPreview:
      "Hey Casey, here is my media kit and partnership form.",
    setupMinutes: 4,
    outcome: "Capture brand interest without asking people to search your bio.",
    bestFor: ["Pinned portfolio reels", "Case study posts", "Brand outreach"],
    playbook: [
      "Pin a collaboration post or creator portfolio reel.",
      "Use professional keywords brands naturally comment.",
      "Send a media kit link and one qualification question.",
      "Review DMs weekly and tag qualified opportunities.",
    ],
    metrics: ["Brand inquiries", "Media kit clicks", "Qualified partnership DMs"],
    accent: "cyan",
  },
];

export function getCampaignTemplate(slug: string | null | undefined) {
  if (!slug) return null;
  return CAMPAIGN_TEMPLATES.find((template) => template.slug === slug) ?? null;
}

export function getCampaignTemplateSlugs() {
  return CAMPAIGN_TEMPLATES.map((template) => template.slug);
}
