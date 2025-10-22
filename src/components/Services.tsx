import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    description: "Crafting compelling brand narratives that resonate with your audience and define your market position."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging your audience across platforms with creative content and strategic community management."
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boosting your online visibility and organic traffic through cutting-edge SEO strategies."
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable ROI and sustainable growth."
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Creating valuable, relevant content that attracts and retains your target audience."
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns & Copywriting",
    description: "Powerful storytelling and persuasive copy that converts browsers into customers."
  },
  {
    icon: Palette,
    title: "Graphic Design & Motion Graphics",
    description: "Eye-catching visuals and animations that bring your brand story to life."
  },
  {
    icon: LineChart,
    title: "Digital Strategy Consulting",
    description: "Strategic guidance to navigate the digital landscape and achieve your business goals."
  },
  {
    icon: Users,
    title: "Influencer & Creator Marketing",
    description: "Leveraging authentic partnerships to amplify your brand message and reach."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    description: "Optimizing your online store for maximum conversions and customer lifetime value."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive marketing solutions tailored to elevate your brand and drive real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
