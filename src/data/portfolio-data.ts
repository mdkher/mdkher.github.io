import {
  HeroData,
  Job,
  Project,
  Education,
  Certification,
  Award,
  Publication,
} from "../models/portfolio.models";

export const HERO_DATA: HeroData = {
  titleLine1: "PRODUCT",
  titleLine2: "STRATEGIST.",
  bio: "I'm Manan Kher. With over 7 years of experience, I bridge the gap between engineering and design to build scalable products. Specializing in platform strategy, design systems, and user-centric interactions.",
  location: "Pune, India 🇮🇳",
  experience: "7+ Years",
  availability: "OPEN TO PRODUCT ROLES",
  heroImage: "https://picsum.photos/id/3/800/600",
};

export const SKILLS_DATA: string[] = [
  "ANGULAR",
  "FIGMA",
  "TYPESCRIPT",
  "VIBE CODING",
  "UX DESIGN",
  "DESIGN SYSTEMS",
  "UX RESEARCH",
  "PROTOTYPING",
  "STORYBOOK",
  "ACCESSIBILITY",
];

export const CLIENTS_DATA: string[] = [
  "Accenture",
  "EY",
  "Dropbox",
  "Globant",
  "Infosys",
];

export const EXPERIENCE_DATA: Job[] = [
  {
    id: "globant-lead",
    role: "Brand Strategist & Lead Designer",
    company: "Globant",
    location: "Ahmedabad",
    period: "2023 – Present",
    highlights: [
      "Led the creation of a global Design System used by 50+ developers, ensuring WCAG 2.1 AA compliance.",
      "Reduced technical debt by 40% by standardizing design tokens and component architecture.",
      "Mentored junior designers and conducted workshops on accessibility and scalable UI.",
    ],
  },
  {
    id: "globant-jr",
    role: "Junior Adv. UX Designer",
    company: "Globant",
    location: "Pune",
    period: "2021 – 2023",
    highlights: [
      "Designed immersive AR experiences for retail clients, achieving 7k+ organic impressions.",
      "Revamped complex fintech dashboards, simplifying data visualization for non-technical users.",
    ],
  },
  {
    id: "infosys-specialist",
    role: "Specialist Programmer",
    company: "Infosys",
    location: "Pune",
    period: "2019 – 2021",
    highlights: [
      "Optimized onboarding flows for 15,000+ new hires, reducing drop-off rates by 25%.",
      "Implemented automated testing pipelines that cut regression testing time by 95%.",
    ],
  },
  {
    id: "infosys-system",
    role: "System Specialist",
    company: "Infosys",
    location: "Pune",
    period: "2019 – 2021",
    highlights: [
      "Automated testing to reduce cycle time by 95%.",
      "Managed deployment for large scale enterprise apps.",
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    school: "Nirma University",
    degree: "B.Tech Electronics & Communications",
    year: "2015 - 2019",
  },
];

export const CERTIFICATION_DATA: Certification[] = [
  {
    title: "McKinsey Forward Program",
    year: "2025",
    issuer: "McKinsey & Company",
  },
  {
    title: "UX Design Certification",
    year: "2021",
    issuer: "Springboard",
  },
  {
    title: "Enterprise Design Thinking",
    year: "2021",
    issuer: "IBM",
  },
];

export const AWARDS_DATA: Award[] = [
  {
    title: "Pat on the Back",
    date: "May 2023",
    desc: "Globant Design Studio Award.",
  },
  {
    title: "Innovator of the Quarter",
    date: "Jan 2023",
    desc: "Process Excellence Award at Globant.",
  },
  {
    title: "Infosys Insta Award",
    date: "Jun 2021",
    desc: "For significant platform optimization.",
  },
  {
    title: "HackNUthon Winner",
    date: "Mar 2018",
    desc: "1st Place, National Level Tech Colloquium.",
  },
];

export const PUBLICATION_DATA: Publication = {
  title: "Intention Detection and Gait Recognition System for Gait Assessment",
  conference: "IEEE RO-MAN 2019",
  year: "2019",
  desc: '"Intention Detection and Gait Recognition System for Gait Assessment"',
  link: "#",
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "global-design-system",
    title: "Global Design System: Scaling Consistency",
    category: "Design Systems",
    image: "https://picsum.photos/id/42/1200/800",
    description:
      "As a Product Designer, I led the initiative to build and enhance a scalable design system that streamlined workflows, improved UI consistency, and empowered designers and developers to work efficiently.",
    tags: ["Figma", "Tokens", "Accessibility", "Documentation"],
    client: "Globant",
    role: "Experience Designer",
    team: [
      "A group of 13 highly skilled people",
      "4 Frontend Devs",
      "1 QA Specialist",
    ],
    year: "2023",
    timeline: "2.5 Years",
    tools: ["Figma", "Storybook", "Angular", "React", "GitHub"],
    
    // 1. STRATEGY
    problemStatement:
      "The product ecosystem faced fragmented UI consistency. Teams were reinventing the wheel, accessibility was an afterthought, and design debt was slowing down feature releases.",
    projectHypothesis:
      "We believe that by standardizing UI components and implementing semantic tokens, we will reduce design debt by 40% and accelerate developer sprint velocity.",
    businessGoals: [
      "Reduce technical and design debt across 50+ products",
      "Accelerate time-to-market for new features",
      "Ensure WCAG 2.1 compliance to avoid legal risks"
    ],
    userGoals: [
      " Spend less time on repetitive UI tasks",
      "Focus on complex UX problems rather than pixel-pushing",
      "Seamless handoff between design and code"
    ],
    
    contextText: [
      "As a Product Designer, I led the initiative to build and enhance a scalable design system that streamlined workflows, improved UI consistency, and empowered designers and developers to work efficiently.",
      "This project focused on scalability, accessibility, and cross-team adoption to ensure a seamless design-to-development process.",
    ],
    overviewImages: [
      {
        title: "The Fragmentation",
        desc: "An audit revealed 14 different button styles and 60+ shades of gray.",
        image: "https://picsum.photos/id/160/800/600"
      }
    ],

    // 2. RESEARCH
    researchFindings: [
      {
        icon: "🔍",
        title: "Inconsistency",
        desc: "Identified inconsistent UI patterns across different features through a UI audit.",
      },
      {
        icon: "♿",
        title: "Accessibility Gap",
        desc: "Lack of accessibility standards leading to usability concerns (WCAG 2.1).",
      },
      {
        icon: "⏱️",
        title: "Hand-off Friction",
        desc: "Time-consuming handoffs between designers and developers without unified documentation.",
      },
    ],
    researchGraph: [
      { label: "Consistency", value: 30 },
      { label: "A11y Score", value: 45 },
      { label: "Dev Speed", value: 50 },
      { label: "QA Pass Rate", value: 60 },
    ],
    researchText: [
      "I conducted a UI audit of existing screens to identify inconsistencies and researched industry-leading design systems like Material UI, IBM Carbon, and Atlassian for best practices.",
      'Gathered data from interviews with developers and users to understand pain points, revealing that a significant portion of sprint time was lost to "UI tweaking" and redundant work.',
    ],
    researchImages: [
      {
        title: "Developer Interviews",
        desc: "Synthesizing pain points from 20+ developer interviews.",
        image: "https://picsum.photos/id/1/800/600"
      }
    ],

    process: [
      {
        title: "Research & Audit",
        description:
          "Conducted a UI audit and researched industry best practices (Material UI, IBM Carbon).",
      },
      {
        title: "Component Library",
        description:
          "Designed atomic-level components with variants and auto-layout in Figma.",
      },
      {
        title: "Collaboration",
        description:
          "Partnered with developers to build a Storybook-based UI component library using React/Angular.",
      },
      {
        title: "Documentation",
        description:
          "Created detailed guidelines in Figma and established a feedback loop for continuous improvements.",
      },
    ],

    // 3. DESIGN & DECISIONS
    designSystem: {
      colors: [
        { hex: "#4F46E5", name: "Primary Indigo" },
        { hex: "#10B981", name: "Success Green" },
        { hex: "#EF4444", name: "Error Red" },
        { hex: "#1F2937", name: "Neutral 800" },
      ],
      typography: [
        { name: "Inter", usage: "Primary UI Font" },
        { name: "Fira Code", usage: "Code Snippets" },
      ],
    },
    designRationale: [
      {
        topic: "Token Architecture",
        options: "Simple Theme vs. Semantic Aliasing",
        decision: "Adopted Semantic Aliasing (Primitive -> Semantic -> Component) to allow distinct light/dark modes without code changes.",
        image: "https://picsum.photos/id/10/800/600"
      },
      {
        topic: "Framework Strategy",
        options: "React Only vs. Web Components",
        decision: "Chose Web Components (via Stencil) to support both Angular and React legacy apps, ensuring broad adoption."
      }
    ],

    solution:
      "Established a scalable, reusable component library aligned with the front-end framework for both Desktop and Mobile.",
    solutionText: [
      "I led the creation of design tokens for colors, typography, spacing, and themes to ensure consistency and scalability. This token-based system reduced time to development significantly.",
      "We implemented a centralized Figma library and a developer handbook, improving collaboration and ensuring pixel-perfect translation of components from Figma to code.",
    ],
    governanceModel: {
      title: "Versioning & Governance",
      description:
        "Versioning and governance were established to help keep the design system scalable and maintainable. Regular updates and a feedback loop ensured that the system evolved with the product needs. Early developer collaboration prevented friction during implementation, addressing the issue where developer versions often lagged behind design files.",
      imageUrl: "https://picsum.photos/id/10/800/600",
    },
    keyFeatures: [
      {
        title: "Atomic Components",
        desc: "Designed atomic-level components (buttons, inputs, tables) with variants for flexible usage.",
        image: "https://picsum.photos/id/1/800/600",
      },
      {
        title: "Accessibility First",
        desc: "Achieved AA compliance (WCAG 2.1) for the majority of core components.",
        image: "https://picsum.photos/id/119/800/600",
      },
    ],

    // 4. PREFLECTION & IMPACT
    challenges: [
      "Persuading 50+ legacy product teams to migrate to the new system.",
      "Handling version conflicts between breaking changes in the component library."
    ],
    learnings: [
      "Documentation is just as important as the code; if they can't find it, they won't use it.",
      "Governance requires a 'carrot' (easier workflow) not just a 'stick' (compliance rules)."
    ],
    stats: [
      {
        value: "400k+",
        label: "Weekly Inserts",
        description: "Used across 360 teams",
      },
      {
        value: "40%",
        label: "Reduced Debt",
        description: "Eliminating inconsistencies",
      },
      {
        value: "30%",
        label: "Faster Handoff",
        description: "For new features",
      },
    ],
    businessImpact: [
      { label: "Design Debt", before: "High", after: "-40%" },
      { label: "Handoff Time", before: "Slow", after: "-30%" },
      { label: "Adoption", before: "0 Teams", after: "360 Teams" },
    ],
    impactGraph: [
      { label: "Jan", value: 20 },
      { label: "Feb", value: 35 },
      { label: "Mar", value: 50 },
      { label: "Apr", value: 75 },
      { label: "May", value: 85 },
      { label: "Jun", value: 92 },
    ],
    conclusion: {
      title: "Lessons Learned",
      content: [
        "Evangelization is key—continuous education ensures adoption. Early developer collaboration prevents friction during implementation.",
        "This project was a game-changer in improving efficiency, collaboration, and UI consistency. It reinforced my passion for building scalable design systems that empower teams and create a seamless user experience.",
      ],
    },
    nextProjectId: "fintech-dashboard",
  },
  {
    id: "globant-ar-pod",
    title: "Globant AR Pod",
    category: "AR / Immersive Design",
    image: "https://picsum.photos/id/24/1200/800",
    description:
      'Spearheaded the AR initiative at Globant, evolving a personal experiment into a dedicated "AR Pod" and delivering viral experiences with 10k+ views.',
    tags: ["Spark AR", "Blender", "Innovation", "Leadership"],
    client: "Globant",
    role: "AR Initiative Lead",
    year: "2023",
    timeline: "Ongoing",
    tools: ["Blender", "Spark AR", "Adobe Aero", "8th Wall"],
    team: ["Self-Initiated", "Later: 3 Designers"],
    
    // 1. STRATEGY
    problemStatement:
      "AR was an untapped opportunity at Globant with no structured team or frameworks. The challenge was to demonstrate the value of AR for engagement and product innovation from scratch.",
    projectHypothesis:
      "We believe that by establishing an in-house AR capability, we can capture high-value immersive marketing deals previously outsourced to agencies.",
    businessGoals: [
      "Create a new revenue stream for the Design Studio",
      "Position Globant as an Innovation Leader in the Metaverse space"
    ],
    userGoals: [
      "Engage with brands in novel, immersive ways",
      "Experience 'magic' on their phones without heavy app installs"
    ],

    contextText: [
      "What started as an individual experiment in 3D modeling and spatial mapping evolved into a recognized initiative. There were no existing frameworks for AR experimentation within the Design Studio.",
      "My goal was to prove that AR could be more than a gimmick—it could be a powerful tool for brand engagement and user interaction.",
    ],
    overviewImages: [
      {
        title: "Early Prototypes",
        desc: "Initial experiments using minimal image tracking.",
        image: "https://picsum.photos/id/29/800/600"
      }
    ],

    // 2. RESEARCH
    researchFindings: [
      {
        icon: "🚀",
        title: "Untapped Market",
        desc: "Zero existing AR projects or teams within the organization.",
      },
      {
        icon: "📱",
        title: "Engagement Gap",
        desc: "Traditional digital campaigns were seeing diminishing returns in user interaction.",
      },
      {
        icon: "🎓",
        title: "Skill Void",
        desc: "Designers flocked to learn 3D/AR but lacked mentorship or structured learning paths.",
      },
    ],
    researchGraph: [
      { label: "AR Interest", value: 90 },
      { label: "Skill Level", value: 20 },
      { label: "Resources", value: 10 },
      { label: "Adoption", value: 5 },
    ],
    researchText: [
      "I conducted an audit of available technologies (Spark AR, Adobe Aero, 8th Wall) and experimented with 3D scanning using my own workspace to create proof-of-concept interactions.",
      "The response to early prototypes was overwhelming, highlighting a clear demand for immersive/spatial design capabilities within the studio.",
    ],

    process: [
      {
        title: "Concept",
        description: "Conducted AR tech audits and created proof-of-concepts.",
      },
      {
        title: "3D Creation",
        description:
          "Modeled low-poly assets in Blender and scanned real-world environments.",
      },
      {
        title: "Logic",
        description:
          "Developed gesture-based controls and gamification in Spark AR.",
      },
      {
        title: "Deployment",
        description:
          "Launched filters at DesignNXT and hosted internal workshops.",
      },
    ],

    // 3. DESIGN & DECISIONS
    designSystem: {
      colors: [
        { hex: "#8B5CF6", name: "Spark Violet" },
        { hex: "#EC4899", name: "Neon Pink" },
        { hex: "#10B981", name: "AR Green" },
        { hex: "#111827", name: "Dark Mode" },
      ],
      typography: [
        { name: "Roboto", usage: "UI Elements" },
        { name: "DIN", usage: "HUD Display" },
      ],
    },
    designRationale: [
      {
        topic: "Platform Choice",
        options: "Independent App vs. Social AR (Instagram/Snap)",
        decision: "Chosen Social AR to minimize friction. Users don't want to download a 100MB app for a 30s interaction.",
        image: "https://picsum.photos/id/40/800/600"
      }
    ],

    solution:
      'I established the "AR Pod," a dedicated innovation unit for spatial computing.',
    solutionText: [
      "I designed and developed engaging AR filters for the DesignNXT event, featuring gamified elements like quizzes and gesture controls.",
      'Beyond just building filters, I focused on evangelism—hosting workshops like "Introduction to Spark AR" to upscale the broader design team.',
    ],
    governanceModel: {
      title: "Innovation Pipeline",
      description:
        'To move from "hackathon ideas" to "client deliverables," I established a pipeline for AR projects. This included a repository of optimized 3D assets, standard scripts for common interactions (like tap-to-place), and a review process for performance optimization on mobile devices.',
      imageUrl: "https://picsum.photos/id/30/800/600",
    },
    keyFeatures: [
      {
        title: "Gamified Filters",
        desc: "Quiz-based logic and gesture controls that drove high engagement.",
        image: "https://picsum.photos/id/24/800/600",
      },
      {
        title: "Real-World Mapping",
        desc: "Seamless integration of digital objects into physical spaces.",
        image: "https://picsum.photos/id/35/800/600",
      },
    ],

    // 4. REFLECTION & IMPACT
    challenges: [
      "Optimizing 3D assets to run smoothly on low-bandwidth devices in India.",
      "Translating complex client requirements into feasible AR mechanical constraints."
    ],
    learnings: [
      "An immersive experience must hook the user in the first 3 seconds, or they swipe away.",
      "Gamification (scores, leaderboards) drives 3x longer dwell time than passive viewing."
    ],
    stats: [
      { value: "10k+", label: "Views", description: "On Instagram Filters" },
      {
        value: "1st",
        label: "Internal Team",
        description: "Established AR Pod",
      },
      {
        value: "100%",
        label: "Adoption",
        description: "Company-wide recognition",
      },
    ],
    businessImpact: [
      { label: "Engagement", before: "Low", after: "Viral" },
      { label: "Capability", before: "None", after: "In-House" },
      { label: "Innovation", before: "Ad-hoc", after: "Structured" },
    ],
    impactGraph: [
      { label: "Q1", value: 10 },
      { label: "Q2", value: 45 },
      { label: "Q3", value: 70 },
      { label: "Q4", value: 95 },
    ],
    conclusion: {
      title: "Future Scope",
      content: [
        "Initiative drives innovation—passion projects can evolve into full-fledged company initiatives. This project proved that designers can lead technical innovation.",
        "Future scope includes expanding the AR Pod’s capabilities to AI-driven AR and mixed reality cross-platform experiences.",
      ],
    },
    nextProjectId: "globant-travelnxt-glow",
  },
  {
    id: "globant-travelnxt-glow",
    title: "TravelNXT Glow",
    category: "Enterprise / UI Design",
    image: "https://picsum.photos/id/48/1200/800",
    description:
      "Redesigned the internal employee travel platform with enhanced micro-interactions, reducing booking time by 20%.",
    tags: ["Micro-interactions", "Enterprise", "Mobile", "Usability"],
    client: "Globant",
    role: "Product Designer",
    year: "2023",
    timeline: "3 Months",
    tools: ["Figma", "Protopie", "React", "Motion"],
    team: ["2 Designers", "5 Developers"],
    
    // 1. STRATEGY
    problemStatement:
      "The internal travel booking application faced complex workflows, lack of intuitive components, and minimal interactivity, making the platform feel static and tedious for thousands of employees.",
    projectHypothesis:
      "We believe that by introducing micro-interactions and mobile-first approvals, we will reduce booking abandonment/delays by 20% and increase manager approval speed.",
    businessGoals: [
      "Reduce travel support tickets due to user error",
      "Increase manager compliance with travel approval SLAs"
    ],
    userGoals: [
      "Book a trip in under 10 minutes",
      "Approve team travel requests while commuting (Mobile)"
    ],

    contextText: [
      "TravelNXT serves a wide range of users including employees, travel teams, and managers. The previous interface had high friction points in approval workflows and booking steps.",
      'My role was to inject "life" into the platform—enhancing usability through refined UI components and introducing micro-interactions to improve responsiveness and engagement.',
    ],
    overviewImages: [
      {
        title: "Legacy Interface",
        desc: "The old desktop-only interface that caused bottlenecks.",
        image: "https://picsum.photos/id/77/800/600"
      }
    ],

    // 2. RESEARCH
    researchFindings: [
      {
        icon: "⚠️",
        title: "Complex Workflows",
        desc: "Booking flows were tedious and approval processes required multiple disjointed steps.",
      },
      {
        icon: "🖱️",
        title: "Static UI",
        desc: "Lack of visual feedback left users unsure if their actions were registered.",
      },
      {
        icon: "📱",
        title: "Mobile Friction",
        desc: "The experience was not optimized for mobile, creating blockers for approvals on-the-go.",
      },
    ],
    researchGraph: [
      { label: "Booking Friction", value: 85 },
      { label: "Mobile Usage", value: 15 },
      { label: "Errors", value: 40 },
      { label: "Satisfaction", value: 30 },
    ],
    researchText: [
      'We conducted feedback sessions with "Globers" (employees) and identified that the booking process was a major pain point. Users compared it unfavorably to consumer apps like Expedia or Google Travel.',
      "The data showed that approval delays were often due to managers finding the mobile interface unusable.",
    ],

    process: [
      {
        title: "UX Audit",
        description:
          "Analyzed existing flows and compared with consumer travel standards (Expedia, Skyscanner).",
      },
      {
        title: "Refinement",
        description:
          "Redesigned UI components for better intuitiveness (search filters, date pickers).",
      },
      {
        title: "Motion",
        description:
          "Implemented hover states, loading effects, and feedback animations.",
      },
      {
        title: "Optimization",
        description:
          "Ensured seamless experience across both mobile and desktop.",
      },
    ],

    // 3. DESIGN & DECISIONS
    designSystem: {
      colors: [
        { hex: "#BE185D", name: "Travel Pink" },
        { hex: "#4338CA", name: "Corporate Blue" },
        { hex: "#F59E0B", name: "Alert Amber" },
        { hex: "#111827", name: "Text Gray" },
      ],
      typography: [
        { name: "Heebo", usage: "Headings" },
        { name: "Roboto", usage: "Body Text" },
      ],
    },
    designRationale: [
      {
        topic: "Manager Approval Flow",
        options: "Desktop Dashboard vs. Mobile Push Action",
        decision: "Prioritized 'Actionable Notification' allowing managers to approve directly from the email/notification without login drift, reducing delays.",
        image: "https://picsum.photos/id/88/800/600"
      }
    ],

    solution:
      'A "Glow-up" for the enterprise travel experience, focusing on micro-interactions.',
    solutionText: [
      "We simplified the navigation structure and introduced color-coded status indicators for bookings. The biggest change was the introduction of micro-interactions—subtle animations that guide the user.",
      "One-click trip approvals were optimized for mobile, solving the bottleneck of manager delays.",
    ],
    governanceModel: {
      title: "Motion Guidelines",
      description:
        'To ensure performance wasn\'t compromised by "flashy" animations, I defined strict motion guidelines. Animations were purely functional—used to indicate state changes, loading progress, or confirmation—never just for decoration.',
      imageUrl: "https://picsum.photos/id/48/800/600",
    },
    keyFeatures: [
      {
        title: "Micro-Interactions",
        desc: "Subtle hover effects and state changes that provide immediate system feedback.",
        image: "https://picsum.photos/id/60/800/600",
      },
      {
        title: "One-Click Approvals",
        desc: "Streamlined workflow for managers to approve trips instantly from mobile.",
        image: "https://picsum.photos/id/20/800/600",
      },
    ],

    // 4. REFLECTION & IMPACT
    challenges: [
      "Integrating with a 15-year old legacy GDS (Global Distribution System) for flight data.",
      "Balancing 'fun' motion design with strict corporate performance metrics."
    ],
    learnings: [
      "Enterprise users appreciate 'delight' too—micro-interactions aren't just for consumer apps.",
      "Reducing cognitive load for approval managers had a ripple effect on the entire booking ecosystem."
    ],
    stats: [
      {
        value: "20%",
        label: "Efficiency",
        description: "Reduction in booking time",
      },
      {
        value: "Mobile",
        label: "Optimization",
        description: "Seamless cross-device use",
      },
      {
        value: "High",
        label: "Engagement",
        description: "Increased platform adoption",
      },
    ],
    businessImpact: [
      { label: "Booking Time", before: "15 Mins", after: "12 Mins" },
      { label: "Mobile Approvals", before: "10%", after: "65%" },
      { label: "User Errors", before: "High", after: "Low" },
    ],
    impactGraph: [
      { label: "Q1", value: 40 },
      { label: "Q2", value: 55 },
      { label: "Q3", value: 75 },
      { label: "Q4", value: 88 },
    ],
    conclusion: {
      title: "Lessons Learned",
      content: [
        "Small design improvements—like micro-interactions—can create a significant impact on enterprise usability. Designing for cross-platform consistency is key when your users move between laptop and phone.",
        "Future scope includes integrating AI-powered travel recommendations and expense tracking to further automate the journey.",
      ],
    },
    nextProjectId: "globant-automobile",
  },
  {
    id: "globant-automobile",
    title: "Automobile in Metaverse",
    category: "Metaverse / CX Design",
    image: "https://picsum.photos/id/111/1200/800",
    description:
      "A conceptual metaverse experience for car servicing, increasing trust and transparency for non-technical users.",
    tags: ["Metaverse", "Web3", "CX Strategy", "3D Prototyping"],
    client: "Globant",
    role: "Lead UX Researcher",
    year: "2022",
    timeline: "2 Months",
    tools: ["Blender", "Adobe Aero", "Figma", "Unity"],
    team: ["2 UX Researchers", "1 3D Artist"],
    
    // 1. STRATEGY
    problemStatement:
      "Car owners, especially those with limited automotive knowledge, often feel anxious and excluded during the servicing process due to lack of clarity, technical jargon, and information asymmetry regarding costs and parts.",
    projectHypothesis:
      "We believe that visualizing car service data via a 'Digital Twin' will increase trust scores for non-technical owners by at least 50%.",
    businessGoals: [
      "Increase acceptance of recommended services (upsells)",
      "Reduce customer disputes and support calls",
      "Differentiate the brand with a premium service experience"
    ],
    userGoals: [
      "Understand exactly what I am paying for",
      "Feel confident I am not being scammed or overcharged",
      "See the progress of my car service remotely"
    ],

    contextText: [
      'The rise of Web3 and digital twins presented an opportunity to redefine user empowerment. We explored how a "Metaverse Garage" could bridge the trust gap between service centers and customers.',
      "We focused deeply on a female-centric persona—someone who often feels taken advantage of in traditional mechanic shops due to a lack of technical knowledge.",
    ],
    overviewImages: [
      {
        title: "The Workshop User",
        desc: "Research photos showing the disconnect between mechanics and vehicle owners.",
        image: "https://picsum.photos/id/100/800/600"
      }
    ],

    // 2. RESEARCH
    researchFindings: [
      {
        icon: "⚠️",
        title: "Trust Deficit",
        desc: 'Users felt "blind" to what was actually happening to their car behind closed doors.',
      },
      {
        icon: "💸",
        title: "Cost Anxiety",
        desc: "Unclear why certain parts cost what they did, leading to suspicion of overcharging.",
      },
      {
        icon: "🔧",
        title: "Jargon Barrier",
        desc: "Mechanics used technical terms that alienated non-expert users.",
      },
    ],
    researchGraph: [
      { label: "Anxiety", value: 80 },
      { label: "Trust", value: 20 },
      { label: "Clarity", value: 15 },
      { label: "Transparency", value: 10 },
    ],
    researchText: [
      'Our interviews revealed a recurring theme: "I just pay whatever they tell me because I don\'t know any better." This highlighted a massive opportunity for education through visualization.',
      'Users didn\'t want to become mechanics, but they wanted to feel "in the loop".',
    ],

    process: [
      {
        title: "Discovery",
        description:
          "Conducted interviews with underserved user segments to identify trust gaps.",
      },
      {
        title: "Ideation",
        description:
          'Mapped the ideal "transparent" journey using a Metaverse Service Center concept.',
      },
      {
        title: "Prototyping",
        description:
          "Built 3D service visualization flows where users could specific parts being replaced.",
      },
      {
        title: "Validation",
        description:
          "Tested the concept with users, receiving high praise for clarity and control.",
      },
    ],

    // 3. DESIGN & DECISIONS
    designSystem: {
      colors: [
        { hex: "#0EA5E9", name: "Trust Blue" },
        { hex: "#F43F5E", name: "Alert Red" },
        { hex: "#10B981", name: "Safe Green" },
        { hex: "#F8FAFC", name: "Clean White" },
      ],
      typography: [
        { name: "Exo 2", usage: "Futuristic Headers" },
        { name: "Lato", usage: "Readable Body" },
      ],
    },
    designRationale: [
      {
        topic: "Visual Fidelity",
        options: "Hyper-realistic vs. Schematic X-Ray",
        decision: "Chose Schematic X-Ray view. Users needed to see 'where' the part was and 'why' it was broken, not a photorealistic render of dirt and grease.",
        image: "https://picsum.photos/id/111/800/600"
      }
    ],

    solution:
      'A "Metaverse Garage" that visualizes the servicing process in real-time.',
    solutionText: [
      'We created a digital twin of the user\'s car. Instead of a paper receipt saying "Brake Pad Replaced," the user could enter a virtual garage, see their car, and watch an animation of the old brake pad being removed and the new one installed.',
      "This visual verification replaced technical jargon with intuitive 3D evidence, instantly building trust.",
    ],
    governanceModel: {
      title: "Ethical Design Framework",
      description:
        'To ensure the metaverse experience wasn\'t just a gimmick, I established an ethical framework. The system was designed to never "upsell" unnecessarily; it was purely informational. Every visual notification had to be tied to a verified service action.',
      imageUrl: "https://picsum.photos/id/111/800/600",
    },
    keyFeatures: [
      {
        title: "Live Digital Twin",
        desc: "Real-time 3D visualization of the car servicing status.",
        image: "https://picsum.photos/id/133/800/600",
      },
      {
        title: "Visual Receipts",
        desc: "Interactive breakdown of costs where users can click parts to see warranty info.",
        image: "https://picsum.photos/id/160/800/600",
      },
    ],

    // 4. REFLECTION & IMPACT
    challenges: [
      "Technically integrating real-time workshop data / sensors with a 3D interface.",
      "Overcoming the skepticism that 'Metaverse' is just a gaming toy."
    ],
    learnings: [
      "Metaphors work. Showing a 'Health Bar' for a battery (like in a game) was instantly understood by non-technical users.",
      "Trust is earned through transparency, not just sleek UI."
    ],
    stats: [
      { value: "High", label: "Trust Score", description: "From user testing" },
      {
        value: "100%",
        label: "Transparency",
        description: "Real-time updates",
      },
      { value: "Cx", label: "Innovation", description: "New service model" },
    ],
    businessImpact: [
      { label: "User Trust", before: "Low", after: "High" },
      { label: "Upsell Acceptance", before: "Skeptical", after: "Informed" },
      { label: "NPS", before: "30", after: "85" },
    ],
    impactGraph: [
      { label: "Base", value: 20 },
      { label: "Concept", value: 50 },
      { label: "Prototype", value: 75 },
      { label: "Final", value: 95 },
    ],
    conclusion: {
      title: "Final Thoughts",
      content: [
        "The metaverse can simplify technical services for everyday users—not just gamers. Designing for low-tech personas often leads to more inclusive solutions.",
        "Knowledge empowers trust. Even basic visual feedback helps users feel more in control of the service experience.",
      ],
    },
    nextProjectId: "global-design-system",
  },
];
