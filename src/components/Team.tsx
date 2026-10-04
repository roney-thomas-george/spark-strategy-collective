import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Amal Prabha",
    role: "Founder & Creative Director",
    initials: "SJ",
    bio: "Turning brands into names people cherish. 8+ years of internationally acclaimed work.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Vishnu Manoj",
    role: "Co-founder / Finance",
    initials: "MC",
    bio: "CMA co-founder who does the sums, so the ideas can be brave. ",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Sachin Kartik",
    role: "Cinematographer / Videographer ",
    initials: "ER",
    bio: "Film-trained cinematographer with 7+ years behind the camera.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Midhun MT",
    role: "Designer Lead",
    initials: "DK",
    bio: "Designer with 7+ years of making ideas hard to scroll past. ",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Amal Paul",
    role: "Production Team Lead",
    initials: "DK",
    bio: "Detail-minded producer who keeps big ideas on schedule and on screen. ",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
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
            <Card 
              key={index} 
              className="group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-6">
                <Avatar className="w-32 h-32 mx-auto border-4 border-border group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                  <AvatarFallback className="text-3xl bg-primary/5 text-primary font-display font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-3 text-center">
                  <h3 className="text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-3 pt-4">
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Website"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
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

export default Team;
