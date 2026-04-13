export type CareerJob = {
  slug: string;
  title: string;
  experience: string;
  vacancy: number;
  salary: string;
  type: string;
  location: string;
  overview: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  contact: string;
};

export const careersJobs: CareerJob[] = [
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    experience: "Senior",
    vacancy: 2,
    salary: "10000$",
    type: "Full Time",
    location: "Kathmandu",
    overview:
      "We\u2019re seeking a Senior Product Designer to lead our design initiatives at Next Wave AI. You\u2019ll drive the user experience for our cutting-edge AI products, ensuring they are intuitive, engaging, and aligned with our users\u2019 needs.",
    description:
      "Lead the design process from concept to launch, ensuring high-quality experiences across platform products.",
    responsibilities: [
      "Lead the design process from concept to launch, ensuring high-quality experiences.",
      "Conduct user research and usability testing to inform design decisions.",
      "Collaborate with cross-functional teams to define product requirements.",
      "Mentor junior designers and foster a culture of design excellence.",
      "Develop and maintain design systems and standards.",
    ],
    requirements: [
      "5+ years of experience in product design, with a focus on UX.",
      "A strong portfolio showcasing your design process and problem-solving.",
      "Proficiency in design tools such as Figma, Sketch, and Adobe Creative Cloud.",
      "Excellent communication and collaboration skills.",
      "Experience with AI or machine learning products is a plus.",
    ],
    perks: [
      "A collaborative and supportive work environment.",
      "Opportunity to work on innovative AI products shaping the future.",
      "Competitive salary and benefits.",
      "Professional development opportunities to grow your career.",
      "Flexible work arrangements to support your work-life balance.",
    ],
    contact: "+977 9876543210",
  },
  {
    slug: "junior-product-designer",
    title: "Junior Product Designer",
    experience: "Entry",
    vacancy: 5,
    salary: "4500$",
    type: "Full Time",
    location: "Kathmandu",
    overview:
      "A great opportunity for an early-career designer to join our product team and contribute to real AI experiences.",
    description:
      "Assist in developing design concepts and prototypes for various AI-driven projects.",
    responsibilities: [
      "Support senior designers with research and prototyping.",
      "Help refine interaction flows and visual design details.",
      "Collaborate with product managers and engineers on feature design.",
      "Participate in design reviews and team feedback sessions.",
    ],
    requirements: [
      "1-2 years of design experience or strong internship background.",
      "A portfolio that demonstrates solid visual and UX thinking.",
      "Familiarity with Figma or similar design tools.",
      "An eagerness to learn and grow in a fast-paced environment.",
    ],
    perks: [
      "Structured mentorship from senior designers.",
      "Exposure to end-to-end product design work.",
      "Friendly team with regular feedback and growth support.",
      "Access to training and skill-building resources.",
    ],
    contact: "+977 9876543210",
  },
  {
    slug: "mid-level-product-designer",
    title: "Mid-Level Product Designer",
    experience: "Mid",
    vacancy: 3,
    salary: "6700$",
    type: "Full Time",
    location: "Kathmandu",
    overview:
      "Join our team as a Mid-Level Product Designer and help shape practical, delightful AI experiences.",
    description:
      "Design thoughtful product experiences and collaborate closely with stakeholders.",
    responsibilities: [
      "Contribute to product strategy with data-informed design choices.",
      "Create prototypes and polished visual deliverables.",
      "Work across teams to ensure alignment and execution quality.",
      "Help maintain design system consistency across products.",
    ],
    requirements: [
      "3+ years of experience in product and interaction design.",
      "Strong portfolio of product and digital interface work.",
      "Ability to define and iterate on UX solutions quickly.",
      "Effective communication across design, product, and engineering teams.",
    ],
    perks: [
      "A chance to own important product design work.",
      "Collaborative culture with thoughtful feedback.",
      "Competitive compensation and growth opportunities.",
    ],
    contact: "+977 9876543210",
  },
  {
    slug: "lead-product-designer",
    title: "Lead Product Designer",
    experience: "Expert",
    vacancy: 1,
    salary: "10000$",
    type: "Full Time",
    location: "Kathmandu",
    overview:
      "Lead design across our most important AI initiatives and drive experience quality from strategy through delivery.",
    description:
      "Own the product design direction for a suite of AI solutions and guide the team to deliver exceptional outcomes.",
    responsibilities: [
      "Set the vision and design roadmap for major product experiences.",
      "Coach and grow design talent across the product team.",
      "Partner with leadership to align design with business and user goals.",
      "Ensure design quality through strong systems and review processes.",
    ],
    requirements: [
      "7+ years of product design experience with proven leadership.",
      "Record of shipping polished digital products at scale.",
      "Strong strategic thinking and mentoring capability.",
      "Comfortable working across complex product and engineering domains.",
    ],
    perks: [
      "High-impact leadership role at an AI-focused company.",
      "Ownership of major product design work.",
      "Opportunities for career and team development.",
    ],
    contact: "+977 9876543210",
  },
];

export function getCareerJobBySlug(slug: string) {
  return careersJobs.find((job) => job.slug === slug);
}

export function getCareerJobSlugs() {
  return careersJobs.map((job) => ({ slug: job.slug }));
}
