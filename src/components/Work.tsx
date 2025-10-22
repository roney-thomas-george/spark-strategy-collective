import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "E-commerce Revolution",
    client: "Fashion Retailer",
    results: "300% increase in online sales",
    description: "Complete digital transformation including SEO, social media, and performance marketing.",
    tags: ["SEO", "E-commerce", "Social Media"]
  },
  {
    title: "Brand Renaissance",
    client: "Tech Startup",
    results: "10x brand awareness growth",
    description: "Full brand strategy overhaul with creative campaigns across multiple channels.",
    tags: ["Branding", "Creative", "Digital Strategy"]
  },
  {
    title: "Content Marketing Success",
    client: "B2B SaaS Company",
    results: "500% increase in qualified leads",
    description: "Strategic content marketing initiative driving organic growth and thought leadership.",
    tags: ["Content Marketing", "SEO", "Lead Generation"]
  },
  {
    title: "Social Media Domination",
    client: "Food & Beverage Brand",
    results: "2M+ engaged followers",
    description: "Influencer partnerships and creative content strategy resulting in viral growth.",
    tags: ["Social Media", "Influencer Marketing", "Content"]
  }
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Real results for real brands. Here's how we've helped businesses like yours achieve remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">{study.client}</p>
                  </div>
                  
                  <div className="py-4">
                    <div className="text-3xl font-bold text-primary">{study.results}</div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
