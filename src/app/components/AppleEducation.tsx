import { motion } from 'motion/react';

export function AppleEducation() {
  const education = [
    {
      school: 'State University of New York, Buffalo',
      degree: 'MS in Computer Science (AI/ML)',
      period: '2025 – 2026',
      gpa: '3.8/4.0',
      location: 'Buffalo, New York',
    },
    {
      school: 'Indian Institute of Information Technology, Sri City',
      degree: 'B. Tech. in Computer Science & Engineering',
      period: '2019 – 2023',
      gpa: '8.0/10.0',
      location: 'Sri City, India',
    },
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Education
          </h2>
          <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-muted-foreground">
            Academic foundation in Computer Science and AI/ML
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="h-full p-8 rounded-[18px] bg-secondary/50 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] hover:bg-secondary/80 transition-colors">
                <div className="mb-4">
                  <div className="text-[12px] font-medium text-primary mb-3 tracking-wide uppercase">
                    {edu.period}
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] lg:text-[21px] font-semibold text-foreground mb-2 leading-tight">
                    {edu.school}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-foreground/80 mb-4">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-4 text-[14px]">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                      <span className="font-medium">GPA:</span>
                      <span className="font-semibold">{edu.gpa}</span>
                    </div>
                    <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}