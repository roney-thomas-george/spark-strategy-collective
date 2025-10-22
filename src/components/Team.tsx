import { Card, CardContent } from "@/components/ui/card";
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
    bio: "Data wizard with a track record of 10x growth strategies."
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategist",
    initials: "ER",
    bio: "Storyteller at heart, driving engagement through compelling narratives."
  },
  {
    name: "David Kim",
    role: "Performance Marketing",
    initials: "DK",
    bio: "ROI-focused marketer who turns clicks into customers."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Talented professionals passionate about delivering exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
