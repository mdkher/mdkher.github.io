# How to Use the Senior Case Study Template (2024 Update)

This guide provides an overview of how to add content to your portfolio case studies, now updated with fields that signal **Senior / Lead Product Management & Design** capabilities (Strategy, Decision Making, and Reflection).

All case study content is managed in: `src/data/portfolio-data.ts`.

## 1. The Strategy Layer (New & Critical)

To stand out as a Senior PM/Designer, you must articulate the "Why" before the "What".

### A. Problem vs. Hypothesis

Instead of just a problem assertion, include your hypothesis.

```typescript
problemStatement: "Users were dropping off because the navigation was too complex.",
projectHypothesis: "We believe that by flattening the IA, we will see a 15% increase in task completion.",
```

### B. Goals: Business vs. User

Explicitly differentiating these shows strategic alignment.

```typescript
businessGoals: [
  "Increase conversion rate by 5%",
  "Reduce support ticket volume by 20%"
],
userGoals: [
  "Complete checkout in under 2 minutes",
  "Feel confident about security during payment"
],
```

## 2. The Decision Layer (New & Critical)

This constitutes the core of a Senior interview. Use `designRationale` to explain your tradeoffs.

```typescript
designRationale: [
  {
    topic: "Navigation Structure",
    options: "Evaluated a Hamburger Menu vs. Bottom Bar.",
    decision: "Chose Bottom Bar because 80% of our users are on mobile and need quick access to 'Search'.",
    image: "assets/images/nav-exploration.jpg" // Optional evidence
  },
  {
    topic: "Color Palette",
    options: "Dark Mode vs. Light Mode default.",
    decision: "Defaulted to Dark Mode to align with our pro-user persona who use the app in low-light studios."
  }
],
```

## 3. The Reflection Layer (New & Critical)

Show growth and resilience.

```typescript
challenges: [
  "Technical constraints on the legacy backend prevented real-time search.",
  "Stakeholder pushback on removing the 'Promotions' banner."
],
learnings: [
  "Early user testing saved us 3 weeks of dev time.",
  "Next time, I would involve engineering earlier in the ideation phase."
],
```

## 4. Enhanced Visuals (Overview, Research, Design)

You can still add large "Hero Style" images with accompanying titles and descriptions in three sections.

### Structure

```typescript
{
  title: "Image Title",
  desc: "A brief description explaining the image.",
  image: "assets/images/research-workshop.jpg"
}
```

### Where to Add Them

- **Overview**: `overviewImages` (Before/After legacy comparisons)
- **Research**: `researchImages` (Journey maps, affinity diagrams)
- **Design**: `keyFeatures` (Final UI)

## 5. Complete Reference Example

Here is a complete example of a **Senior-Level** project object.

```typescript
{
  id: "senior-project-example",
  title: "Enterprise Dashboard Redesign",
  category: "B2B SaaS",
  image: "assets/hero.jpg",
  description: "Scaling a complex data tool for enterprise users.",
  tags: ["Strategy", "UX", "React"],

  // Overview Details
  client: "Big Data Corp",
  role: "Lead Product Designer",
  team: ["2 PMs", "4 Devs"],
  year: "2024",
  timeline: "6 Months",
  tools: ["Figma", "Jira"],

  // 1. The Strategy
  problemStatement: "Users could not find critical insights in the cluttered dashboard.",
  projectHypothesis: "By introducing customizable widgets, we will increase daily active usage.",
  businessGoals: ["Reduce churn by 10%", "Increase upsells"],
  userGoals: ["View daily reports in <30 seconds"],

  contextText: [
    "The legacy system was 10 years old.",
    "Our main competitor had just launched a modern alternative."
  ],

  // 2. The Process
  process: [
    { title: "Discovery", description: "Stakeholder interviews and data audit." },
    { title: "Definition", description: "Creating the new information architecture." }
  ],

  // 3. Research & Data
  researchFindings: [
    { icon: "📉", title: "Time on Task", desc: "40% slower than industry benchmark." }
  ],
  researchText: ["Users felt overwhelmed by data density."],

  // 4. Design & Decisions
  designRationale: [
    {
      topic: "Dashboard Layout",
      options: "Fixed Grid vs. Drag-and-Drop.",
      decision: "Went with Fixed Grid for v1 to reduce engineering complexity, while solving 80% of use cases."
    }
  ],

  solution: "A modular dashboard system.",
  designSystem: {
    colors: [{ hex: "#000", name: "Black" }],
    typography: [{ name: "Inter", usage: "Main" }]
  },
  keyFeatures: [
    {
      title: "Widget Library",
      desc: "Users can now pin their favorite charts.",
      image: "assets/final-ui.jpg"
    }
  ],

  // 5. Reflection & Impact
  challenges: ["Migrating 2TB of legacy data without downtime."],
  learnings: ["Data visualization requires extreme attention to edge cases."],

  stats: [
    { value: "50%", label: "Faster", description: "Report generation" }
  ],
  businessImpact: [
    { label: "NPS", before: "20", after: "45" }
  ],
  conclusion: {
    title: "Final Thoughts",
    content: ["A successful turnaround for the product."]
  }
}
```
