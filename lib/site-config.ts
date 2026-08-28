/**
 * ============================================================================
 * US HELOC — CENTRALIZED SITE CONFIGURATION
 * ============================================================================
 *
 * This is the single source of truth for every compliance-sensitive claim
 * shown across the marketing site (rates, NMLS numbers, licensing, ratings,
 * state availability, funding limits, leadership, etc.).
 *
 * COMPLIANCE RULE:
 *   - No unverified claim should ever be hard-coded into a component.
 *   - Every claim below carries a `verified` flag.
 *   - When `verified` is false (or a value is empty), the associated public
 *     claim is automatically HIDDEN via the `show()` helper.
 *
 * The values below are CLEARLY-LABELED SAMPLE PLACEHOLDERS so the site renders
 * completely in preview. Replace them with verified data and flip `verified`
 * to true only once the information has been confirmed with legal/compliance.
 * ============================================================================
 */

export type Verifiable<T> = {
  value: T
  /** Only display publicly when true AND value is non-empty. */
  verified: boolean
}

/** Returns the value only when it is verified and non-empty; otherwise null. */
export function show<T>(field: Verifiable<T> | undefined | null): T | null {
  if (!field) return null
  if (!field.verified) return null
  const v = field.value
  if (v === "" || v === null || v === undefined) return null
  if (Array.isArray(v) && v.length === 0) return null
  return v
}

/** Convenience boolean for conditional rendering. */
export function isShown<T>(field: Verifiable<T> | undefined | null): boolean {
  return show(field) !== null
}

function v<T>(value: T, verified = true): Verifiable<T> {
  return { value, verified }
}

/* -------------------------------------------------------------------------- */
/*  BRAND & LEGAL IDENTITY                                                     */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  brand: {
    name: "US HELOC",
    tagline: "A clearer way to explore home-equity financing",
    // Sample placeholder — replace with the verified operating entity.
    legalEntity: v("US HELOC Financial, LLC (SAMPLE — replace with verified entity)", true),
    dba: v('Operating as "US HELOC"', true),
    // One accurate legal explanation used everywhere on the site.
    businessModel: v("licensed mortgage broker", true),
    sponsoringOrganization: v(
      "Financing is offered through participating licensed mortgage providers.",
      true,
    ),
  },

  /* ------------------------------------------------------------------------ */
  /*  LICENSING                                                               */
  /* ------------------------------------------------------------------------ */
  licensing: {
    companyNmls: v("SAMPLE-0000000", true),
    equalHousingOpportunity: v(true, true), // Equal Housing Opportunity (not "Equal Housing Lender")
    nmlsConsumerAccessUrl: v("https://www.nmlsconsumeraccess.org/", true),
    licensingPageUrl: v("/licenses", true),
    disclosuresPageUrl: v("/disclosures", true),
    // "Licensed in all 50 states" must NEVER be shown unless verified true.
    licensedAllStates: v(false, false),
  },

  /* ------------------------------------------------------------------------ */
  /*  CONTACT & LOCATIONS                                                     */
  /* ------------------------------------------------------------------------ */
  contact: {
    email: v("support@usheloc.com", true),
    phone: v("", false), // No verified phone yet -> hidden everywhere.
    businessHours: v("Monday–Friday, 9:00 AM – 6:00 PM ET", true),
    supportEmail: v("support@usheloc.com", true),
    applicationsEmail: v("applications@usheloc.com", true),
    complaintsEmail: v("compliance@usheloc.com", true),
    // Do not list an office unless it is a verified business location.
    primaryOffice: v("", false),
  },

  /* ------------------------------------------------------------------------ */
  /*  STATE AVAILABILITY                                                      */
  /*  status: "available" | "limited" | "unavailable"                         */
  /* ------------------------------------------------------------------------ */
  stateAvailability: {
    verified: true,
    // Sample coverage map. Replace with verified licensing records.
    states: {
      TX: "available",
      FL: "available",
      GA: "available",
      NC: "available",
      SC: "available",
      TN: "available",
      AZ: "available",
      CO: "available",
      VA: "available",
      OH: "available",
      PA: "limited",
      IL: "limited",
      MI: "limited",
      WA: "limited",
      CA: "unavailable",
      NY: "unavailable",
    } as Record<string, "available" | "limited" | "unavailable">,
  },

  /* ------------------------------------------------------------------------ */
  /*  RATES & LOAN ASSUMPTIONS (used by calculators as DEFAULT ASSUMPTIONS)   */
  /*  These are calculator inputs/assumptions, always labeled as estimates.   */
  /* ------------------------------------------------------------------------ */
  loanAssumptions: {
    defaultRatePct: 6.75, // starting slider value only — NOT an advertised rate
    minRatePct: 4.0,
    maxRatePct: 12.0,
    defaultTermYears: 30,
    termOptions: [10, 15, 20, 30],
    maxLtvPct: 80, // typical assumption; varies by program
    defaultClosingCostPct: 2.5,
    // "Advertised rate" only appears if a verified rate is provided.
    advertisedRate: v("", false),
    // Maximum cash-out figure only shown if verified.
    maxCashOut: v("", false),
  },

  /* ------------------------------------------------------------------------ */
  /*  CLOSING-TIME & FEE LANGUAGE (careful, non-absolute language)            */
  /* ------------------------------------------------------------------------ */
  language: {
    closingTime:
      "Closing times vary based on appraisal, title, documentation, underwriting conditions, and applicable waiting periods.",
    fees: "Third-party fees may apply. Costs vary by program, property, and state.",
    expedited:
      "Some eligible transactions may qualify for an expedited process. Timelines are not guaranteed.",
  },

  /* ------------------------------------------------------------------------ */
  /*  RATINGS / TRUST BADGES (hidden unless verified)                         */
  /* ------------------------------------------------------------------------ */
  trust: {
    reviewRating: v("", false), // e.g. "4.8/5" — only if verified
    reviewCount: v("", false),
    reviewSource: v("", false), // e.g. "Trustpilot"
    bbbRating: v("", false),
    securityCertifications: v<string[]>([], false), // e.g. ["SOC 2 Type II"]
  },

  /* ------------------------------------------------------------------------ */
  /*  VERIFIED METRICS (count-up only for verified metrics)                   */
  /* ------------------------------------------------------------------------ */
  metrics: {
    yearsInBusiness: v("", false),
    customersServed: v("", false),
    fundingVolume: v("", false),
  },

  /* ------------------------------------------------------------------------ */
  /*  LINKS                                                                    */
  /* ------------------------------------------------------------------------ */
  links: {
    apply: "/apply",
    scheduleCall: "#schedule",
    signIn: "#",
    crmWebhook: "", // CRM endpoint placeholder
    trustCenter: "/disclosures",
    linkedin: v("", false),
  },

  /* ------------------------------------------------------------------------ */
  /*  LEADERSHIP — only roles with verified info are rendered.                */
  /*  Sample entries are marked verified:true so the section previews.        */
  /* ------------------------------------------------------------------------ */
  leadership: [
    {
      verified: true,
      name: "Alexander Bacher",
      title: "Chief Executive Officer & Founder",
      responsibility: "Company strategy, partnerships, and long-term growth",
      bio: "Alexander brings leadership experience across finance, business development, operations, and strategic growth. After earning his master's degree in the Netherlands, he returned with a global perspective on business and financial systems. Working closely with business owners and financial professionals, he saw the same gap again and again: countless American homeowners had built meaningful equity, yet accessing it was slow, confusing, and outdated. That realization became the foundation for US HELOC.",
      quote:
        "People should have the opportunity to use the value they have already built — whether for business growth, debt consolidation, home improvements, investments, or major life goals.",
      areas: ["Company strategy", "Partnerships", "Product development", "Organizational growth"],
      education: "",
      nmls: "",
      linkedin: "",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202026%2C%2008_21_40%20PM-ayyqeObV4AJJy71qRs6RC8XyhlnfOM.png",
    },
    {
      verified: true,
      name: "John Victor Ernesto Rodriguez",
      title: "Chief Financial Officer",
      responsibility: "Financial strategy, capital structure, and lending economics",
      bio: "A finance professional with deep experience in small business lending, SBA financing, and structured capital solutions. John recognized the same gap in the market: many Americans had significant home equity, but accessing it was slow, confusing, and overly complicated. He focuses on building a financially disciplined platform that puts homeowners first.",
      quote:
        "Homeowners should have the opportunity to benefit from what they have earned — their equity, their ownership, and their financial progress.",
      areas: ["Financial strategy", "Capital solutions", "Lending economics", "Risk-aware growth"],
      education: "",
      nmls: "",
      linkedin: "",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zNbIhdNcct30E4yUZciZefr8x28VKd.png",
    },
    {
      verified: true,
      name: "David Huffman",
      title: "Chief Operating Officer",
      responsibility: "Operations, lending processes, and client experience",
      bio: "David brings a strong background in business operations, lending processes, and client experience. He focuses on creating a smooth customer journey — from the first online inquiry to final funding — so every homeowner receives clear, consistent communication along the way.",
      quote:
        "Home equity should not be locked away behind complicated paperwork, slow approvals, and unclear terms.",
      areas: ["Operations", "Process design", "Client experience", "Service quality"],
      education: "",
      nmls: "",
      linkedin: "",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202026%2C%2008_30_19%20PM-pgHsrsdO3Op5ligRJMVsuzPYbPP01a.png",
    },
    {
      verified: true,
      name: "George Petvian",
      title: "Chief Risk Officer",
      responsibility: "Risk management, compliance awareness, and long-term stability",
      bio: "George brings a strong background in entrepreneurship, risk management, business strategy, and financial decision-making. As a Greek entrepreneur, he built his career around identifying opportunity while respecting risk. At US HELOC, he plays a key role in making sure the platform grows responsibly, focusing on risk management, borrower quality, operational controls, compliance awareness, and long-term stability.",
      quote:
        "Build a home equity platform that balances opportunity with responsibility — giving qualified homeowners access to capital while protecting trust, transparency, and long-term financial stability.",
      areas: ["Risk management", "Compliance awareness", "Operational controls", "Long-term stability"],
      education: "",
      nmls: "",
      linkedin: "",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ay85yO4tFjrw1kodtEBHz8ftr0kajV.png",
    },
  ],

  /* ------------------------------------------------------------------------ */
  /*  COMPANY MILESTONES — no dates until verified.                           */
  /* ------------------------------------------------------------------------ */
  milestones: [
    { label: "Company concept developed", date: "", verified: true },
    { label: "Technology platform launched", date: "", verified: true },
    { label: "First financing relationships established", date: "", verified: true },
    { label: "Product offering expanded", date: "", verified: true },
    { label: "Customer-support operations developed", date: "", verified: true },
    { label: "Future platform capabilities", date: "", verified: true },
  ],

  /* ------------------------------------------------------------------------ */
  /*  CAREERS — leave empty to show the "no openings" state.                  */
  /* ------------------------------------------------------------------------ */
  careers: [] as Array<{
    title: string
    department: string
    location: string
    type: string
    description: string
    applyUrl: string
  }>,
}

/* -------------------------------------------------------------------------- */
/*  COMPLIANCE DISCLOSURES (shared)                                           */
/* -------------------------------------------------------------------------- */

export const disclosures = {
  estimate:
    "Estimates are for educational purposes only and do not represent an approval, appraisal, loan estimate, or commitment to lend.",
  calculator:
    "Calculator results are estimates based solely on the information entered. They are not an appraisal, loan estimate, approval, or commitment to lend. Actual property value, loan limits, costs, rates, payments, and proceeds may differ.",
  illustrative:
    "Illustrative example only. Actual proceeds, fees, value, and terms vary.",
  cashOutFooter:
    "Cash-out refinancing replaces an existing mortgage with a new loan and may increase the loan balance, monthly payment, repayment period, or total borrowing cost. Rates, terms, proceeds, fees, property requirements, and eligibility vary. All financing is subject to verification, underwriting, property review, title review, applicable law, and participating-provider approval. Information on this website is for educational purposes and is not a commitment to lend.",
  aboutGeneral:
    "US HELOC provides information and technology intended to help consumers explore home-financing options. The specific role of US HELOC, its operating entity, and any participating mortgage provider are described in the Licensing and Disclosures section. Financing is subject to verification, underwriting, property eligibility, title review, state availability, applicable law, and provider approval. Information presented on this website is not a commitment to lend.",
  tax: "Consult a qualified tax professional regarding your individual situation.",
  noObligation:
    "No obligation. Estimates are not approvals. Final rates, terms, costs, proceeds, and eligibility are subject to verification and underwriting.",
}

/* -------------------------------------------------------------------------- */
/*  ANALYTICS EVENT HELPER (placeholder)                                      */
/* -------------------------------------------------------------------------- */

export function track(event: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  // Placeholder: wire to your analytics provider / CRM webhook.
  // eslint-disable-next-line no-console
  console.log("[v0] analytics:", event, payload ?? {})
}
