import { motion } from "motion/react";

export function AppleSkills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL"],
    },
    {
      title: "AI / ML",
      skills: [
        "PyTorch",
        "TensorFlow",
        "HuggingFace",
        "sentence-transformers",
        "scikit-learn",
        "ONNX",
        "OpenCV",
      ],
    },
    {
      title: "LLM & GenAI",
      skills: [
        "LoRA",
        "QLoRA",
        "PEFT",
        "Fine-tuning",
        "RAG",
        "GRPO",
        "Reinforcement Learning",
        "Prompt Engineering",
        "Ollama",
        "vLLM",
        "veRL",
        "LangChain",
      ],
    },
    {
      title: "Frontend",
      skills: ["ReactJS", "Redux", "TailwindCSS", "GSAP", "TypeScript", "Vite"],
    },
    {
      title: "Backend",
      skills: [
        "NodeJS",
        "ExpressJS",
        "Spring Boot",
        "Kafka",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "Big Data",
      skills: ["Spark", "Hadoop"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Linux", "Git", "GitHub", "Docker", "AWS", "CI/CD", "Metabase"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="h-full p-6 rounded-[18px] bg-background/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] hover:border-primary/20 transition-all">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="px-3 py-1.5 bg-secondary text-foreground/80 rounded-full text-[13px] font-medium hover:bg-accent hover:text-foreground transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-[15px] text-muted-foreground max-w-[640px] mx-auto">
            Continuously learning and exploring new technologies to stay at the
            forefront of software development and AI/ML innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
