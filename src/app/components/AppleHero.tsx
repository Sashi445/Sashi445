import { motion } from "motion/react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import avatarImage from "./../../assets/bitmoji.png";
import { TypewriterText } from "./TypewriterText";

export function AppleHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background pt-[56px]"
    >
      <div className="max-w-[980px] mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-6 lg:mb-8 inline-block"
          >
            <Avatar className="size-28 sm:size-28 lg:size-60 ring-1 ring-black/[0.08] dark:ring-white/[0.08]">
              <AvatarImage src={avatarImage} alt="Sashidhar Motte" />
              <AvatarFallback className="text-3xl sm:text-4xl font-bold">
                SM
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 sm:mb-4 lg:mb-6"
          >
            <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-muted-foreground font-light mb-2 sm:mb-3">
              Hi, I'm
            </p>
            <h1 className="text-[48px] sm:text-[72px] lg:text-[96px] font-bold tracking-tight leading-none text-foreground min-h-[54px] sm:min-h-[80px] lg:min-h-[110px]">
              <TypewriterText text="Sashidhar Motte" delay={500} speed={80} />
            </h1>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold mb-2 sm:mb-3 lg:mb-4"
          >
            Digital Craftsman
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-4 sm:mb-6 lg:mb-8"
          >
            <MapPin className="h-[16px] w-[16px]" strokeWidth={1.5} />
            <span className="text-[14px] sm:text-[16px]">
              Buffalo, New York
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[17px] lg:text-[19px] leading-[1.5] text-foreground/80 max-w-[720px] mx-auto mb-6 sm:mb-8 lg:mb-12 font-normal"
          >
            I'm an AI engineer with a strong product mindset. I build
            intelligent systems that solve real problems, combining deep
            expertise in AI/ML with full-stack development to create products
            people love. From ideation to deployment, I craft experiences that
            blend innovation with practicality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 justify-center mb-6 sm:mb-8 lg:mb-12"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="group relative px-6 sm:px-8 h-12 sm:h-14 bg-primary text-primary-foreground rounded-full text-[16px] sm:text-[18px] font-medium overflow-hidden shadow-lg shadow-primary/25"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 113, 227, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowUpRight
                  className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  strokeWidth={2}
                />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-6 sm:px-8 h-12 sm:h-14 bg-secondary text-secondary-foreground rounded-full text-[16px] sm:text-[18px] font-medium hover:bg-accent transition-colors border-2 border-border"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 sm:gap-6 justify-center text-[14px] sm:text-[15px]"
          >
            <a
              href="mailto:sashidharmotte@gmail.com"
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/Sashi445"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <svg
                className="h-[18px] w-[18px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sashidharmotte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <svg
                className="h-[18px] w-[18px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
