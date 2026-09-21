/* Every piece of copy that repeats or renders from a list lives here, so the
   components stay markup and the content can be edited in one place. */

export const RESUME = "/assets/resume.pdf";
export const RESUME_FILENAME = "Rifat-Jahan-Mim-Resume.pdf";
export const EMAIL = "rifatjahanmim210@gmail.com";
export const PHONE = "01970662250";
export const PHONE_HREF = "+8801970662250";

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#cases", label: "Case Studies" },
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

/* Product names only — the case-study cards carry no description. */
export const cases = [
  "FirstTrip",
  "Trip Lover",
  "TravelChamp",
  "Take Trip",
  "Take Off",
  "Meditrip",
  "PayNext",
  "CartUp",
];

/* tag is the pill: Spec / Delivery / Process / Design.
   Keep `inside` to four bullets so the cards stay level across a row. */
export const docs = [
  {
    title: "PRD", tag: "Spec", desc: "Product scope, goals and requirements",
    inside: [
      "Problem statement and opportunity",
      "Goals paired with measurable success metrics",
      "Scope, phasing and explicit out-of-scope",
      "Prioritised feature breakdown",
    ],
    who: "Product, engineering and leadership",
  },
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
    title: "Acceptance Criteria", tag: "Delivery", desc: "Testable definition of done",
    inside: [
      "Given–When–Then scenarios",
      "Positive, negative and boundary paths",
      "Verified per role and permission level",
      "Traceable back to the source requirement",
    ],
    who: "QA and developers",
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
    title: "Wireframes", tag: "Design", desc: "Structure before visual design",
    inside: [
      "Layout and information hierarchy",
      "Navigation and screen-to-screen flow",
      "Content priority, empty and error states",
      "Annotated interaction behaviour",
    ],
    who: "UI/UX, product and engineering",
  },
  {
    title: "Prototypes", tag: "Design", desc: "Fast concepts for validation",
    inside: [
      "Clickable end-to-end journeys",
      "Built rapidly with AI-assisted tooling",
      "Walkthroughs for stakeholder sign-off",
      "Usability feedback before a line is built",
    ],
    who: "Stakeholders, users and product",
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
  ["Documentation", ["PRD", "SRS", "BRD", "FRD", "Use Cases", "User Stories", "Acceptance Criteria", "Business Rules", "Functional Specifications"]],
  ["Process & Design", ["Process Flow", "As-Is / To-Be", "User Journey Mapping", "Workflow Design", "Wireframing", "Prototyping", "Information Architecture", "UX Optimization"]],
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
  ["2022 — 2023", "Machine Xtreme IT", "Junior Business Analyst"],
  ["2023 — 2026", "TechnoNext Software Ltd", "Business Analyst"],
  ["2026 — Present", "US-Bangla Airlines", "Business Analyst"],
];

export const evolution = [
  "Junior BA", "Business Analysis", "Product-focused BA", "Product & Solution Design",
];
