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
    description: "You've spent years getting this business right. But is your brand telling that story right?",
    details: "Every good brand feels like a person you'd recognise in a crowd. We help you work out who that person is, what they say and what they look like, then make sure they show up the same way everywhere."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Your brand is posting every week. But is anyone looking forward to the next post?",
    details: "We start by finding out what your audience cares about and what they scroll past. Then we plan, create and run your pages so people come back for more. It takes patience, and we'd rather tell you that now than promise you a viral week."
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Your customers are searching for exactly what you offer. But are they finding you, or someone else?",
    details: "We find out what your customers actually type into Google, then shape your website so it answers them clearly. Nobody can promise you page one overnight, but steady, honest work gets you there and keeps you there."
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "You're spending money to reach people.But do you know what each rupee is bringing back?",
    details: "We set up your ads with clear goals, test what works and stop what doesn't. You get regular updates in plain language, including the weeks when the numbers disappoint, so every rupee has a reason."
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "You've got plenty to say about your business. But is anyone choosing to read it?",
    details: "We create articles, opinion pieces and blogs that answer what your customers are really wondering about. Useful content earns trust slowly, and people who trust you tend to stay."
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns & Copywriting",
    description: "People see hundreds of ads in a day.But which one would they repeat to a friend?",
    details: "A good campaign starts with one honest idea about your brand and the people it's for. We turn that into words that sound like a person talking, not a brand announcing."
  },
  {
    icon: Palette,
    title: "Graphic Design & Motion Graphics",
    description: "People decide how much to trust you before they read a single word.But what are your visuals telling them?",
    details: "We design the posts, videos and visuals that carry your story, and we make sure they all look like they belong to the same brand. Good design is felt more than it's noticed."
  },
  {
    icon: LineChart,
    title: "Digital Strategy Consulting",
    description: "You're active on a dozen platforms. But is any of it adding up to a plan?",
    details: "We look at where you are, what your market is doing and where you want to be, then hand you a clear roadmap in plain language. Use it with us, or take it to anyone you like."
  },
  {
    icon: Users,
    title: "Influencer & Creator Marketing",
    description: "People trust people far more than they trust brands. But are the right people talking about you?",
    details: "We look for creators whose audience genuinely matches yours, not just the ones with the biggest numbers. Then we work with them so the recommendation sounds like theirs, because that's what makes it believable."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    description: "Plenty of people visit your store.But how many leave without buying, and do you know why?",
    details: "We look at the whole journey, from the first click to the abandoned cart, and fix what's getting in the way. That means clearer product pages, a simpler checkout and a gentle reminder for the ones who almost bought."
  },
  {
    icon: ShoppingCart,
    title: "Website Design & Development",
    description: "Everything you do online leads people to your website.But does it make them want to stay?",
    details: "We design and build websites that are easy to use, quick to load and clear about what you do. It should feel like walking into a well-kept shop, where you find what you need without having to ask."
  },
  {
    icon: ShoppingCart,
    title: "Video & Photo Production",
    description: "People remember what they see far longer than what they read. But what are your photos and videos saying about you?",
    details: "We plan, shoot and edit the videos and photographs that show your business as it really is, from a quick reel to a full brand film. The story comes first and the camera second."
  },
  {
    icon: ShoppingCart,
    title: "PR & Media Relations",
    description: "Anyone can say good things about their own brand. But who is saying them for you?",
    details: "We help you tell your story to journalists, publications and the people who write about your industry. Coverage has to be earned, so we start by finding what's genuinely worth telling and then tell it well."
  },
  {
    icon: ShoppingCart,
    title: "Email & WhatsApp Marketing",
    description: "Winning a new customer usually costs more than keeping one. But when did you last speak to the ones you already have?",
    details: "We set up emails and WhatsApp messages that feel like a note from someone who knows them, not a broadcast. Welcomes, reminders, offers and thank-yous, sent at the right time and never too often."
  },
  {
    icon: ShoppingCart,
    title: "Brand Activations & Events",
    description: "People scroll past ads all day. But how many have actually experienced your brand?",
    details: "We plan the events, launches and on-ground moments that let people meet your brand in person, from a mall activation to a product launch. We take care of the idea, the planning and the day itself."
  },
  {
    icon: ShoppingCart,
    title: "Analytics & Reporting",
    description: "You get a report every month. But does it tell you what to do next?",
    details: "We track what matters to your business, not just what's easy to count, and explain it in plain language. Every report ends with what's working, what isn't and what we'd do next."
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
