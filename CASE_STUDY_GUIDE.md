# How to Use the Case Study Template

This guide provides an overview of how to add content to your portfolio case studies, including the newly added features for images in Overview and Research sections.

All case study content is managed in: `src/data/portfolio-data.ts`.

## 1. Adding a New Project

To add a new case study, add a new object to the `PROJECTS_DATA` array in `portfolio-data.ts`.

```typescript
export const PROJECTS_DATA: Project[] = [
  {
    id: "my-project-id", // URL slug
    title: "Project Title",
    // ... basic details
  },
  // ... other projects
];
```

## 2. Adding Images with Text (New Feature)

You can now add large "Hero Style" images with accompanying titles and descriptions in three sections: **Overview**, **Research**, and **Design**.

### Structure

Each image block follows this structure:

```typescript
{
  title: "Image Title",
  desc: "A brief description explaining the image.",
  image: "https://link-to-your-image.com/image.jpg"
}
```

### Where to Add Them

#### A. Overview Section

Add the `overviewImages` array to your project object. These will appear after the "Context" text.

```typescript
overviewImages: [
  {
    title: "The Original Interface",
    desc: "A screenshot of the legacy system showing the clutter.",
    image: "assets/images/legacy-ui.png"
  }
],
```

#### B. Research Section

Add the `researchImages` array. These will appear after your research text and graphs.

```typescript
researchImages: [
  {
    title: "Affinity Mapping",
    desc: "Grouping user insights during our workshop.",
    image: "assets/images/research-workshop.jpg"
  }
],
```

#### C. Design Section (Key Features)

This existing feature uses the `keyFeatures` array.

```typescript
keyFeatures: [
  {
    title: "Final UI",
    desc: " The polished interface design.",
    image: "assets/images/final-ui.jpg"
  }
],
```

## 3. Other Content Sections

### Question: How do I show data?

**Use `researchGraph`**. It renders a bar chart.

```typescript
researchGraph: [
  { label: "Efficiency", value: 30 },
  { label: "Errors", value: 10 }
],
```

### Question: How do I show Before/After metrics?

**Use `businessImpact`**. It renders a comparison card.

```typescript
businessImpact: [
  { label: "Conversion", before: "2%", after: "5%" }
],
```

### Question: How do I show my colors?

**Use `designSystem`**.

```typescript
designSystem: {
  colors: [
    { hex: "#FF0000", name: "Brand Red" }
  ],
  typography: [
    { name: "Inter", usage: "Body" }
  ]
}
```

## 4. Complete Reference Example

Here is a complete example of a project object with all fields populated.

```typescript
{
  id: "comprehensive-example",
  title: "Super App Redesign",
  category: "Mobile App",
  image: "assets/hero.jpg",
  description: "A complete overhaul of the Super App ecosystem.",
  tags: ["UX", "UI", "Mobile"],

  // Overview Details
  client: "Tech Corp",
  role: "Lead Designer",
  team: ["2 Designers", "4 Devs"],
  year: "2024",
  timeline: "4 Months",
  tools: ["Figma", "React"],

  // 1. The Challenge
  problemStatement: "Users were dropping off because the navigation was too complex.",
  contextText: [
    "We noticed a 40% drop-off rate.",
    "The legacy app was built on outdated tech."
  ],
  // [NEW] Overview Images
  overviewImages: [
    {
      title: "Legacy Audit",
      desc: "The old screen showing 12 different menu options.",
      image: "assets/old-screen.jpg"
    }
  ],

  // 2. The Process
  process: [
    { title: "Research", description: "User interviews and data analysis." },
    { title: "Design", description: "Wireframing and prototyping." }
  ],

  // 3. Discovery (Research)
  researchFindings: [
    { icon: "📉", title: "Drop-off", desc: "40% drop at checkout." }
  ],
  researchText: [
    "Users found the checkout process confusing."
  ],
  researchGraph: [
    { label: "Confusion", value: 80 },
    { label: "Clarity", value: 20 }
  ],
  // [NEW] Research Images
  researchImages: [
    {
      title: "User Journey Map",
      desc: "Mapping the pain points across the purchase flow.",
      image: "assets/journey-map.jpg"
    }
  ],

  // 4. Design & Solution
  solution: "We simplified the checkout to 3 steps.",
  solutionText: [
    "The new design focuses on clarity and speed."
  ],
  designSystem: {
    colors: [{ hex: "#000", name: "Black" }],
    typography: [{ name: "Roboto", usage: "Main" }]
  },
  keyFeatures: [
    {
      title: "One-Click Pay",
      desc: "Users can now pay instantly.",
      image: "assets/pay-screen.jpg"
    }
  ],

  // 5. Impact
  stats: [
    { value: "50%", label: "Faster", description: "Checkout speed" }
  ],
  businessImpact: [
    { label: "Revenue", before: "$1M", after: "$2M" }
  ],
  impactGraph: [
    { label: "Q1", value: 20 },
    { label: "Q2", value: 80 }
  ],
  conclusion: {
    title: "Wrap Up",
    content: ["It was a great success."]
  },

  nextProjectId: "next-project-id"
}
```
