import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 px-4 py-32 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-none">
            Strategic Marketing Test{" "}
            <span className="relative inline-block">
              <span className="text-primary">Excellence</span>
              <svg 
                className="absolute -bottom-4 left-0 w-full" 
                viewBox="0 0 400 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M0 10 Q100 0, 200 10 T400 10" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  className="text-primary"
                />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Where data-driven strategy meets creative brilliance. We transform brands through intelligent marketing that resonates and converts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group rounded-full px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
