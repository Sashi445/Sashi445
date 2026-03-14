import { ThemeProvider } from './components/ThemeProvider';
import { AppleNavigation } from './components/AppleNavigation';
import { AppleHero } from './components/AppleHero';
import { AppleEducation } from './components/AppleEducation';
import { AppleExperience } from './components/AppleExperience';
import { AppleProjects } from './components/AppleProjects';
import { AppleSkills } from './components/AppleSkills';
import { AppleContact } from './components/AppleContact';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="portfolio-theme">
      <div className="min-h-screen w-full bg-background text-foreground">
        <AppleNavigation />
        <AppleHero />
        <AppleEducation />
        <AppleExperience />
        <AppleProjects />
        <AppleSkills />
        <AppleContact />
      </div>
    </ThemeProvider>
  );
}