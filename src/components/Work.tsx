import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Revolution",
    client: "Fashion Retailer",
    metric: "300%",
    metricLabel: "Sales increase",
    description: "Complete digital transformation including SEO, social media, and performance marketing that tripled online revenue.",
    tags: ["SEO", "E-commerce", "Social Media"]
  },
  {
    title: "Brand Renaissance",
    client: "Tech Startup",
    metric: "10x",
    metricLabel: "Brand awareness",
    description: "Full brand strategy overhaul with creative campaigns across multiple channels driving exponential growth.",
    tags: ["Branding", "Creative", "Strategy"]
  },
  {
    title: "Content Marketing Success",
    client: "B2B SaaS Company",
    metric: "500%",
    metricLabel: "Qualified leads",
    description: "Strategic content initiative driving organic growth and establishing thought leadership in competitive market.",
    tags: ["Content", "SEO", "Lead Gen"]
  },
  {
    title: "Social Media Domination",
    client: "Food & Beverage Brand",
    metric: "2M+",
    metricLabel: "Engaged followers",
    description: "Influencer partnerships and creative content strategy resulting in viral growth and community building.",
    tags: ["Social", "Influencer", "Content"]
  }
];

const Work = () => {
  return (
    <section id="work" className="py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real results for real brands. Here's how we've helped businesses achieve remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="group bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
                    <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <div className="py-6 border-y border-border">
                  <div className="text-5xl font-display font-bold text-primary mb-2">
                    {study.metric}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {study.metricLabel}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
