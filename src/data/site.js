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
    domain: "Enterprise Fleet Management",
    title: "Designing an Enterprise Vehicle Management System",
    summary:
      "Vehicle requests, dispatch, assignment, trip operations, maintenance, inventory, procurement and reporting were handled through disconnected operational processes.",
    context:
      "A large fleet operation where each function kept its own records, so the same vehicle, part or trip was tracked differently by different teams.",
    role: "Business Analyst — discovery, requirement engineering, workflow and solution design.",
    process: [
      "Mapped As-Is operations with fleet, workshop, store and management stakeholders.",
      "Separated stated requests from the underlying operational problems.",
      "Defined module boundaries, business rules and data ownership.",
      "Prototyped flows quickly and re-validated them with stakeholders.",
    ],
    solution: [
      "One connected lifecycle from request through reporting instead of isolated logs.",
      "Module-level ownership of data with defined handover points between teams.",
      "Business rules written as explicit, testable statements for development and QA.",
    ],
    decisions: [
      "Treat maintenance and supply chain as one continuous flow, not two systems.",
      "Model approvals as states in the lifecycle rather than manual side processes.",
      "Keep tracking and analytics as consumers of operational data, never as inputs.",
    ],
    challenges: [
      "Conflicting definitions of the same process across departments.",
      "Edge cases surfacing late in discussions, requiring continuous re-validation.",
    ],
    outcome:
      "Delivered implementation-ready documentation — SRS, workflows, business rules and wireframes — giving business and engineering a single shared definition of the system.",
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
      "Request", "Dispatch", "Assignment", "Trip",
      "Maintenance", "Inventory", "Procurement", "Reporting",
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
