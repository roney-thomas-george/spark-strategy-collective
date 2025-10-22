import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                  Let's Create Something Amazing
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to transform your brand? Get in touch and let's start a conversation.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">hello@artfulclarityhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <Input 
                    id="company" 
                    placeholder="Your company"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button className="w-full h-12 rounded-full text-base" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto mt-24 pt-12 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>© 2024 Artful Clarity Hub. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
