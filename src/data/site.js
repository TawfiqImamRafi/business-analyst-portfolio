/* Every piece of copy that repeats or renders from a list lives here, so the
   components stay markup and the content can be edited in one place. */

export const RESUME = "/assets/resume.pdf";
export const RESUME_FILENAME = "Rifat-Jahan-Mim-Resume.pdf";
export const EMAIL = "rifatjahanmim210@gmail.com";
export const PHONE = "01970662250";
export const PHONE_HREF = "+8801970662250";

/* Roles the hero title cycles through, typewriter-style. Business Analyst
   leads since it's the primary role; the rest rotate after it. */
export const roles = [
  "Business Analyst",
  "Product Thinker",
  "Solution Designer",
  "UX Solutions",
];

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#cases", label: "Case Studies" },
  { href: "#products", label: "Live Products" },
  { href: "#process", label: "Process" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const flowSteps = [
  "Business Problem",
  "Discovery",
  "Analysis",
  "Product Definition",
  "Design",
  "Validation",
  "Delivery",
];

export const marqueeItems = [
  "Enterprise Systems",
  "Fleet Management",
  "Healthcare",
  "Fintech",
  "Supply Chain",
  "Inventory",
  "CRM",
  "CMS",
  "OTA / Travel",
];

export const checklist = [
  "Deep business and problem analysis",
  "Client and stakeholder communication",
  "Requirement discovery",
  "Identifying hidden needs and expectations",
  "Product thinking",
  "Workflow optimization",
  "Solution design",
  "Cross-functional collaboration",
  "Continuous feedback and validation",
  "Ownership and accountability",
];

export const capabilities = [
  ["Product Discovery", "Understand business goals, user needs, operational challenges and product opportunities."],
  ["Business Analysis", "Translate complex business requirements into structured, implementation-ready requirements."],
  ["Product & Solution Design", "Design modules, workflows, business rules, user journeys and scalable solution structures."],
  ["Process & Workflow Design", "Analyze As-Is processes, identify gaps and design optimized To-Be workflows."],
  ["UX & Prototyping", "Create wireframes, user flows, prototypes and rapid product concepts for validation."],
  ["AI-Assisted Product Development", "Use AI tools such as Claude and ChatGPT for product research, analysis, rapid prototyping, workflow exploration and validation."],
];

/* Case studies — the deep dives. Each one renders as an expandable card with
   Problem / Approach / Solution / Workflows tabs; optional fields (lifecycle,
   ecosystem, workflows, branches) simply drop their block when left out.
   `sector` feeds the one-line summary above the list, so it updates on its own
   as studies are added. */
export const caseStudies = [
  {
    sector: "fleet",
    domain: "Enterprise Fleet Management — Aviation Ground Ops",
    title: "Designing an Enterprise Vehicle Management System",
    summary:
      "Vehicle operations were run manually and fragmented across departments — costs kept climbing, nothing was tracked in real time, and the setup couldn't meet the demands of aviation ground operations.",
    context:
      "Vehicle operations were largely fragmented across departments, creating challenges in trip planning, driver & vehicle assignment, roster management, maintenance tracking and operational visibility. Everything ran on manual coordination — costs kept climbing with no reliable way to track a vehicle, driver or trip, and the setup couldn't serve the real-time, safety-critical needs of aviation ground operations.",
    role: "Business Analyst — discovery, requirement engineering, workflow and solution design.",
    process: [
      "Studied the existing operational process end to end, including where it broke down.",
      "Collaborated with fleet, driver, roster and maintenance stakeholders to understand real-world requirements.",
      "Mapped the end-to-end workflows and identified the business rules and edge cases hiding inside them.",
      "Translated the mapped flows into practical system requirements and UX flows.",
    ],
    solution: [
      "Designed a centralized VMS connecting Fleet, Drivers, Roster, Trips, GPS, Maintenance and Analytics into one operational ecosystem.",
      "Real-time GPS monitoring replaced manual check-ins, so operations had live visibility instead of end-of-day guesswork.",
      "Kept the system simple enough for day-to-day teams to run, while meeting the safety-critical timing aviation ground ops needed.",
    ],
    decisions: [
      "Introduced structured workflows for vehicle requests, roster planning and trip assignment.",
      "Made driver availability and shift rules explicit, checkable conditions instead of tribal knowledge.",
      "Brought maintenance and real-time operational monitoring into the same system, not side spreadsheets.",
    ],
    challenges: [
      "No real-time visibility into where a vehicle, driver or trip actually stood.",
      "Manual coordination let costs drift, with no data trail to explain why.",
      "Aviation ground operations needed real-time, safety-critical timing that manual coordination couldn't guarantee.",
    ],
    outcome:
      "Moved fleet operations from fragmented, manual coordination — rising costs, no real tracking — to a structured, transparent, rule-driven system with real-time monitoring built in: simple enough for day-to-day teams to run, reliable enough for aviation ground operations.",
    contribution: [
      "Product discovery", "Requirement analysis", "SRS", "User stories",
      "Workflow design", "Business rules", "Wireframes", "Solution structure",
      "Stakeholder discussions", "Continuous requirement validation",
      "AI-assisted rapid prototyping",
    ],
    ecosystem: [
      "Vehicle Management", "Driver Management", "Roster", "Trip & Dispatch",
      "Maintenance", "Inventory", "Procurement", "Warranty", "Parking",
      "GPS & Live Tracking", "Reports & Analytics",
    ],
    lifecycle: [
      "Request", "Validation", "Planning & Roster", "Driver/Vehicle Assignment",
      "Pickup", "Trip Execution", "Completion", "Analytics",
    ],
    workflowsTitle: "From Fleet Operations to a Connected Enterprise System",
    workflows: [
      {
        title: "Maintenance & Supply Chain Workflow",
        steps: ["Maintenance Request", "Job Card", "Store Clearance", "Inventory Check", "Parts Available?"],
        branches: [
          { label: "Yes", steps: ["Reserve Part", "Repair"] },
          { label: "No", steps: ["Procurement", "Purchase Process", "Parts Received", "Repair"] },
        ],
      },
      {
        title: "Warranty Claim Lifecycle",
        steps: ["Inspection", "QC", "Approval", "Claim", "Notification"],
      },
    ],
  },
];

/* Live products — names only, by design. An optional `note` replaces the Live
   badge with a plain label (used for the government project); `live: false`
   drops the badge entirely with no replacement. */
export const liveProducts = [
  { name: "FirstTrip" },
  { name: "Trip Lover" },
  { name: "TravelChamp" },
  { name: "Take Trip" },
  { name: "PayNext" },
  { name: "CartUp" },
  { name: "BMKS", note: "Government project" },
];

/* tag is the pill: Spec / Delivery / Process / Design.
   Keep `inside` to four bullets so the cards stay level across a row. */
export const docs = [
  {
    title: "SRS", tag: "Spec", desc: "System behaviour and specifications",
    inside: [
      "Functional requirements module by module",
      "Non-functional: performance, security, scale",
      "Integrations and external interfaces",
      "Data requirements and constraints",
    ],
    who: "Engineering, QA and architects",
  },
  {
    title: "BRD", tag: "Spec", desc: "Business needs and objectives",
    inside: [
      "Business drivers and current-state problems",
      "Stakeholder analysis and decision ownership",
      "High-level requirements with priorities",
      "Success measures and expected value",
    ],
    who: "Sponsors and business stakeholders",
  },
  {
    title: "FRD / Functional Specs", tag: "Spec", desc: "Feature-level functional detail",
    inside: [
      "Screen-by-screen behaviour",
      "Field-level validation rules",
      "State transitions and what triggers them",
      "Role-based permissions and edge cases",
    ],
    who: "Developers and QA",
  },
  {
    title: "Use Cases", tag: "Spec", desc: "How each actor moves through the system",
    inside: [
      "Actor, goal, trigger and preconditions",
      "Main success flow, step by step",
      "Alternate and exception paths",
      "Postconditions and system responses",
    ],
    who: "Developers, QA and architects",
  },
  {
    title: "User Stories", tag: "Delivery", desc: "Value expressed from the user's side",
    inside: [
      "Role, need and benefit in a single line",
      "Grouped into epics and features",
      "Split small enough to fit one sprint",
      "Dependencies and delivery sequence",
    ],
    who: "Product owner and the scrum team",
  },
  {
    title: "Requirement Traceability Matrix", tag: "Delivery", desc: "Every requirement tracked end to end",
    inside: [
      "Requirement mapped to design, build and test case",
      "Coverage gaps surfaced before they reach QA",
      "Change impact traced back through the chain",
      "Sign-off status per requirement, at a glance",
    ],
    who: "Product, QA and project stakeholders",
  },
  {
    title: "Process Flows", tag: "Process", desc: "As-Is and To-Be operational flows",
    inside: [
      "As-Is captured from how work really runs",
      "Bottlenecks, rework and hand-off gaps",
      "To-Be flow with ownership made clear",
      "Efficiency gains stated in measurable terms",
    ],
    who: "Operations and business owners",
  },
  {
    title: "Business Rules", tag: "Process", desc: "Explicit, unambiguous logic",
    inside: [
      "Decision tables and rule sets",
      "Calculation, pricing and eligibility logic",
      "Approval thresholds and conditions",
      "Rule ownership and change control",
    ],
    who: "Developers and compliance",
  },
  {
    title: "Change Request (CR)", tag: "Process", desc: "Scope changes tracked and controlled",
    inside: [
      "Change description, reason and origin",
      "Impact on scope, timeline, cost and other modules",
      "Approval workflow before any work starts",
      "Version history linked back to the baseline",
    ],
    who: "Product, sponsors and engineering leads",
  },
];

export const processSteps = [
  ["Discover", "Understand users, business goals, stakeholders and operational problems."],
  ["Analyze", "Identify gaps, dependencies, business rules and edge cases."],
  ["Define", "Convert insights into structured requirements and product scope."],
  ["Design", "Create workflows, user journeys, wireframes and solution structures."],
  ["Validate", "Review with stakeholders and refine based on feedback."],
  ["Deliver", "Support development, QA and implementation."],
  ["Optimize", "Collect feedback and identify future improvements."],
];

/* Tool pills at the top of the AI-assisted section. */
export const aiTools = ["Claude AI", "ChatGPT", "Gemini", "DeepSeek", "Lovable"];

export const aiChips = [
  "Product Research", "Market Research",
  "Competitor Analysis", "Workflow Exploration",
  "Rapid Prototyping", "Requirement Validation",
  "Edge-Case Exploration", "Prototype Development",
];

export const aiLoop = [
  "Research", "AI-Assisted Analysis", "Prototype",
  "Validate", "Stakeholder Feedback", "Refine",
];

export const skills = [
  ["Product & Business", ["Product Discovery", "Requirement Engineering", "Business Analysis", "Product Thinking", "Feature Definition", "Stakeholder Management", "Business Process Analysis", "Gap Analysis", "Impact Analysis"]],
  ["Documentation", ["SRS", "BRD", "FRD", "Use Cases", "User Stories", "Acceptance Criteria", "Business Rules", "Functional Specifications"]],
  ["Process & Design", ["Process Flow", "User Journey Mapping", "Workflow Design", "Wireframing", "Prototyping", "UX Optimization"]],
  ["Enterprise Domains", ["Fleet Management", "Supply Chain", "Inventory", "CRM", "CMS", "Healthcare", "Fintech", "OTA"]],
  ["AI & Tools", ["Claude", "ChatGPT", "Figma", "Draw.io", "Miro", "Visio", "MS Office", "Google Workspace"]],
];

export const principles = [
  ["Deep Analysis", "I try to understand the underlying problem before proposing a solution."],
  ["User & Client Empathy", "I communicate closely with stakeholders to uncover their actual needs and expectations."],
  ["Ownership", "I take responsibility for the work I commit to and follow it through."],
  ["Transparency", "I value honesty, transparency and professional integrity."],
  ["Continuous Learning", "I continuously explore new technologies, tools and better ways of solving problems."],
];

export const timeline = [
  ["2026 — Present", "US-Bangla Airlines", "Business Analyst"],
  ["2023 — 2026", "TechnoNext Software Ltd", "Business Analyst"],
  ["2022 — 2023", "Machine Xtreme IT", "Junior Business Analyst"],
];

export const evolution = [
  "Junior BA", "Business Analysis", "Product-focused BA", "Product & Solution Design",
];
