import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function AppleNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex items-center justify-between h-[56px]">
            <div className="text-[24px] font-bold tracking-tight text-foreground">SM</div>
            <div className="w-9 h-9" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{
        backgroundColor: scrolled
          ? theme === 'dark'
            ? 'rgba(0, 0, 0, 0.72)'
            : 'rgba(255, 255, 255, 0.72)'
          : 'rgba(255, 255, 255, 0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.08] dark:border-white/[0.08] transition-colors"
    >
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-[56px]">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-[24px] font-bold tracking-tight text-foreground"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            SM
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[14px] font-medium tracking-wide transition-opacity ${
                  activeSection === item.id
                    ? 'text-foreground opacity-100'
                    : 'text-muted-foreground opacity-80 hover:opacity-100'
                }`}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-foreground" strokeWidth={1.5} />
            ) : (
              <Moon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}