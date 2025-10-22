import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    initials: "SJ",
    bio: "15+ years crafting award-winning campaigns for global brands."
  },
  {
    name: "Michael Chen",
    role: "Strategy Lead",
    initials: "MC",
    bio: "Data wizard with a proven track record of 10x growth strategies."
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategist",
    initials: "ER",
    bio: "Storyteller driving engagement through compelling narratives."
  },
  {
    name: "David Kim",
    role: "Performance Marketing",
    initials: "DK",
    bio: "ROI-focused marketer who turns clicks into loyal customers."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Talented professionals passionate about delivering exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group space-y-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <Avatar className="w-32 h-32 border-4 border-border group-hover:border-primary/20 transition-colors">
                <AvatarFallback className="text-3xl bg-primary/5 text-primary font-display font-bold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-semibold">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
