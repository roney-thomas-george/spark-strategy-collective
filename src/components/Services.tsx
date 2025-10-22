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
    description: "Crafting compelling brand narratives that define your market position."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging audiences with creative content and strategic management."
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boosting visibility through cutting-edge SEO strategies."
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns delivering measurable ROI."
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Creating valuable content that attracts and retains audiences."
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns",
    description: "Powerful storytelling that converts browsers into customers."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that bring your brand story to life."
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description: "Strategic guidance to achieve your business goals."
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Leveraging partnerships to amplify your brand reach."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    description: "Optimizing online stores for maximum conversions."
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
              className="group space-y-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
