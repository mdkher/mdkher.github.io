export interface StatMetric {
  value: string;
  label: string;
  description?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface DesignSystem {
  colors: { hex: string; name: string }[];
  typography: { name: string; usage: string }[];
}

export interface ChartData {
  label: string;
  value: number;
}

export interface BusinessImpact {
  label: string;
  before: string;
  after: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];

  // Overview
  client: string;
  role: string;
  team?: string[];
  year: string;
  timeline: string;
  tools: string[];

  // Deep Dive Article Content
  problemStatement: string;
  projectHypothesis?: string; // [New] "We believe that by doing X..."
  contextText: string[];
  overviewImages?: { title: string; desc: string; image: string }[];

  // Strategy & Goals [New Section]
  businessGoals?: string[];
  userGoals?: string[];

  // Research
  researchFindings?: { icon: string; title: string; desc: string }[];
  researchGraph?: ChartData[];
  researchText?: string[];
  researchImages?: { title: string; desc: string; image: string }[];

  process: ProcessStep[];

  // Design & Decisions
  designSystem?: DesignSystem;
  designRationale?: {       // [New] Critical for Senior roles
    topic: string;
    options: string;
    decision: string;
    image?: string;
  }[];
  
  solution: string;
  solutionText?: string[];
  governanceModel?: { title: string; description: string; imageUrl: string };
  keyFeatures: { title: string; desc: string; image: string }[];
  
  // Reflection [New Section]
  challenges?: string[];
  learnings?: string[];

  // Impact
  stats: StatMetric[];
  businessImpact?: BusinessImpact[];
  impactGraph?: ChartData[];
  conclusion?: { title: string; content: string[] };

  nextProjectId?: string;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface Certification {
  title: string;
  year: string;
  issuer?: string;
}

export interface Award {
  title: string;
  date: string;
  desc: string;
}

export interface Publication {
  title: string;
  conference: string;
  year: string;
  desc: string;
  link?: string;
}

export interface HeroData {
  titleLine1: string;
  titleLine2: string;
  bio: string;
  location: string;
  experience: string;
  availability: string;
  heroImage: string;
}
