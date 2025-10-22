import { 
  Target, 
  Share2, 
  Search, 
  TrendingUp, 
  FileText, 
  Lightbulb, 
  Palette, 
  LineChart, 
  Users, 
  ShoppingCart 
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Brand Strategy & Identity",
    description: "Crafting compelling brand narratives that define your market position.",
    details: "We develop comprehensive brand strategies including positioning, messaging, visual identity, and brand guidelines that resonate with your target audience."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging audiences with creative content and strategic management.",
    details: "From content creation to community management, we handle all aspects of social media to build meaningful connections with your audience."
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boosting visibility through cutting-edge SEO strategies.",
    details: "Technical SEO, content optimization, link building, and local SEO strategies that drive organic traffic and improve search rankings."
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns delivering measurable ROI.",
    details: "PPC, programmatic advertising, and conversion optimization strategies that maximize your marketing budget and drive results."
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Creating valuable content that attracts and retains audiences.",
    details: "Blog posts, whitepapers, case studies, and multimedia content that establishes thought leadership and drives engagement."
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns & Copywriting",
    description: "Powerful storytelling that converts browsers into customers.",
    details: "Compelling campaign concepts and conversion-focused copywriting that captures attention and drives action across all channels."
  },
  {
    icon: Palette,
    title: "Graphic Design & Motion Graphics",
    description: "Eye-catching visuals that bring your brand story to life.",
    details: "Professional design services including logos, marketing materials, infographics, animations, and video content."
  },
  {
    icon: LineChart,
    title: "Digital Strategy Consulting",
    description: "Strategic guidance to achieve your business goals.",
    details: "Comprehensive digital transformation strategies, market analysis, and actionable roadmaps to drive sustainable growth."
  },
  {
    icon: Users,
    title: "Influencer & Creator Marketing",
    description: "Leveraging partnerships to amplify your brand reach.",
    details: "End-to-end influencer campaign management including discovery, outreach, content collaboration, and performance tracking."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    description: "Optimizing online stores for maximum conversions.",
    details: "Complete e-commerce solutions including store optimization, product marketing, cart abandonment strategies, and conversion rate optimization."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            End-to-end marketing services designed to elevate your brand and drive measurable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flip-card h-80 perspective-1000 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d group cursor-pointer">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold mt-6 mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <p className="text-sm text-primary font-medium mt-4">Click to learn more →</p>
                  </div>
                </div>
                
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full backface-hidden rounded-2xl border border-primary bg-gradient-to-br from-primary/90 to-primary text-white p-8 transform rotate-y-180">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-95">
                      {service.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
