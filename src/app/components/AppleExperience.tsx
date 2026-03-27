import { motion } from "motion/react";

export function AppleExperience() {
  const experiences = [
    {
      company: "University at Buffalo",
      role: "Research Assistant - AI Engineer",
      period: "October 2025 - Present",
      location: "Buffalo, NY",
      highlights: [
        {
          title: "Natural Language Photo Search",
          description:
            "Researched and built a photo search system that lets users find images using natural language instead of scrolling through thousands of photos.",
        },
        {
          title: "Custom Text Encoder Training",
          description:
            "Trained a lightweight text encoder on synthetically generated data from photo metadata, improving search recall from 62% to 92% on a personal photo dataset.",
        },
        {
          title: "On-Device ML Pipeline",
          description:
            "Worked on running the full search pipeline on mobile devices, figured out how to keep the model under 6MB while maintaining quality, using quantization and a hybrid cloud-device sync strategy.",
        },
        {
          title: "Knowledge Graph for Memory Surfacing",
          description:
            "Explored knowledge graphs as a way to surface interesting photo memories automatically, rather than waiting for users to search - connecting people, places, and activities across a gallery.",
        },
        {
          title: "Photo Indexing Pipeline",
          description:
            "Built the indexing pipeline from scratch for face recognition, GPS reverse geocoding, and scene tagging. Figured out how to stitch all three into a single searchable representation per photo.",
        },
      ],
    },
    {
      company: "Aspora",
      badge: "YC W22",
      role: "Full Stack Engineer",
      period: "November 2023 – November 2024",
      location: "Bangalore",
      highlights: [
        {
          title: "Revamped Internal Dashboard (Alphadesk)",
          description:
            "Led complete rebuild using ReactJS and Spring Boot. Enabled KYC verification, ticket tracking, and user support for 150K+ users across UAE and UK, handling 10-15K daily queries.",
        },
        {
          title: "Website Optimization & SEO Growth",
          description:
            "Built hybrid tools using Vite and Rollup integrating React and TypeScript. Automated CMS with GenAI, contributing to 5× traffic increase (2K to 11K monthly visits).",
        },
        {
          title: "NRI Compliance Tracker",
          description:
            "Built end-to-end product for NRI compliance tracking with lead funnel, generating 3,000+ qualified leads.",
        },
        {
          title: "Product Analytics Dashboards",
          description:
            "Created SQL-based dashboards in Metabase for product KPI monitoring and marketing campaign insights.",
        },
      ],
    },
    {
      company: "OpenInApp",
      role: "Frontend Engineer Intern",
      period: "May 2023 – September 2023",
      location: "Bangalore",
      highlights: [
        {
          title: "Performance Optimization",
          description:
            "Rebuilt B2B dashboard, improving Lighthouse score from 50 to 89.",
        },
        {
          title: "Role-Based Access Control",
          description: "Implemented user management system for agency admins.",
        },
        {
          title: "Campaign Management",
          description:
            "Built 'Barter-box' for campaign creation and applicant tracking.",
        },
        {
          title: "Creator Onboarding",
          description: "Developed 'Creator-flow' for influencer management.",
        },
        {
          title: "Payment Integration",
          description:
            "Integrated payment system with error handling and redirection.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-secondary/30">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Experience
          </h2>
          <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-muted-foreground">
            Building scalable applications and driving growth
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="p-8 rounded-[18px] bg-background/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md text-[12px] font-semibold">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-foreground/80 mb-2">
                      {exp.role}
                    </p>
                    <div className="flex flex-wrap gap-3 text-[14px] text-muted-foreground">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + hIndex * 0.1,
                      }}
                      className="flex gap-4"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-[15px] font-semibold text-foreground mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-[15px] leading-[1.47059] text-foreground/70">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
