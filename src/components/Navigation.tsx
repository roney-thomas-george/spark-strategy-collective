import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-display font-bold tracking-tight">
            Artful Clarity
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Team
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
