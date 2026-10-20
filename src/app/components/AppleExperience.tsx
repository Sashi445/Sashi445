import { motion } from "motion/react";

export function AppleExperience() {
  const experiences = [
    {
      company: "University at Buffalo",
      role: "AI Engineer",
      period: "October 2025 - Present",
      location: "Buffalo, NY",
      highlights: [
        {
          title: "Natural Language Photo Search",
          description:
            "Built privacy-first photo search that finds photos from plain-language descriptions, indexing six signals per image (RAM tags, InsightFace faces, GIT captions, conditional OCR, color, EXIF).",
        },
        {
          title: "Hybrid Retrieval",
          description:
            "Combined BM25 keyword matching with MiniLM semantic search over FAISS and SQLite. Trained a lightweight text encoder on synthetic queries from photo metadata, improving recall from 62% to 92%, and logged query feedback for future fine-tuning.",
        },
        {
          title: "On-Device ML Pipeline",
          description:
            "Kept the search model under 6MB via quantization so search runs on-device, with a hybrid cloud-device sync strategy that keeps photos private.",
        },
        {
          title: "Cloud Media Backend",
          description:
            "Designed the FastAPI, Supabase, and GCS backend with direct-to-storage signed uploads confirmed by Pub/Sub, plus Google Drive, Dropbox, and Box imports via OAuth PKCE.",
        },
        {
          title: "Library & Data Integrity",
          description:
            "Built folders, tags, and search on transactional Postgres functions for cycle-safe moves and all-or-nothing bulk edits, serving search over 100K items in 25–40ms.",
        },
        {
          title: "AI Voice Tagging",
          description:
            "Added voice tagging using gpt-4o-transcribe and gpt-4o-mini to turn a spoken description into categorized tags that reuse each user's existing vocabulary.",
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
            "Led the end-to-end rebuild of the core operations platform in ReactJS and Spring Boot, powering KYC and support for 150K+ users across the UAE and UK and 10–15K daily queries across onboarding and bank transfers.",
        },
        {
          title: "End-to-End Product Ownership",
          description:
            "Owned the NRI Compliance Tracker from concept to launch, building the lead-generation funnel from scratch to capture 3,000+ leads and drive new customer signups.",
        },
        {
          title: "Web Performance & SEO Growth",
          description:
            "Engineered hybrid build tooling with Vite and Rollup and a GenAI pipeline that automated CMS content, contributing to a 5× increase in web traffic (2K to 11K monthly visits).",
        },
        {
          title: "Product Analytics",
          description:
            "Built SQL-based dashboards in Metabase tracking funnel KPIs, giving marketing the data to measure and optimize campaigns across the growth funnel.",
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
