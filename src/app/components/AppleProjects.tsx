import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function AppleProjects() {
  const projects = [
    {
      title: "Unified Speech and Translation Toolkit",
      period: "June 2025 - July 2025",
      description:
        "Comprehensive speech-to-text and machine translation system with state-of-the-art performance.",
      technologies: ["Python", "PyTorch", "RNN", "Seq2Seq"],
      metrics: [
        { label: "Word Error Rate", value: "0.2721" },
        { label: "BLEU Score", value: "24.6" },
      ],
      highlights: [
        "Developed RNN-based speech-to-text model with CTC loss",
        "Implemented Bahdanau Attention mechanism for translation",
        "Improved BLEU score from 21.0 to 24.6",
        "Designed for web application and API deployment",
      ],
      link: "https://github.com/Sashi445/speech_to_text_dl",
    },
    {
      title: "Craigslist Ad Retrieval Engine",
      period: "August 2021 – December 2021",
      description:
        "High-performance search engine for retrieving relevant documents from thousands of Craigslist ads.",
      technologies: ["Python", "Information Retrieval", "Indexing"],
      highlights: [
        "Built efficient indexing system for large-scale data",
        "Implemented advanced document retrieval algorithms",
        "Optimized search relevance and query performance",
        "Processed thousands of scraped advertisements",
      ],
      link: "https://github.com/Sashi445/CraigslistAdRetrieval",
    },
    {
      title: "Social Media Content Reach Simulation",
      period: "August 2021 – December 2021",
      description:
        "Agent-based modeling project simulating content propagation across social networks.",
      technologies: ["NetLogo", "Agent-Based Modeling", "Simulation"],
      highlights: [
        "Created multi-agent simulation environment",
        "Modeled user behavior and content interactions",
        "Analyzed reach patterns under different scenarios",
        "Visualized network effects and engagement metrics",
      ],
      link: "https://github.com/Sashi445/abms-nlogo-project-model",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Projects
          </h2>
          <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-muted-foreground">
            Building intelligent systems and scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="h-full p-6 rounded-[18px] bg-secondary/50 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] hover:bg-secondary/80 hover:scale-[1.02] transition-all duration-300">
                <div className="mb-4">
                  <div className="text-[12px] font-medium text-primary mb-3 tracking-wide">
                    {project.period}
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] lg:text-[21px] font-semibold text-foreground mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.47059] text-foreground/70 mb-4">
                    {project.description}
                  </p>
                </div>

                {project.metrics && (
                  <div className="flex gap-3 mb-4">
                    {project.metrics.map((metric, mIndex) => (
                      <div
                        key={mIndex}
                        className="flex-1 p-3 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <div className="text-[12px] text-muted-foreground mb-1">
                          {metric.label}
                        </div>
                        <div className="text-[19px] font-semibold text-primary">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-2 mb-5">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[13px] leading-[1.47059] text-foreground/60">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-accent/50 text-foreground/70 rounded-md text-[12px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center gap-1 text-[14px] text-primary font-medium group-hover:gap-2 transition-all cursor-pointer"
                  whileHover={{ x: 2 }}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
