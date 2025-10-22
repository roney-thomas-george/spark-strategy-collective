const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              At Artful Clarity Hub, we believe that exceptional marketing is the perfect blend of art and science. 
              We don't just create campaigns—we craft experiences that resonate, engage, and convert.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold text-primary">Creative</div>
                <p className="text-muted-foreground">
                  Bold ideas that capture attention and inspire action.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold text-primary">Data-Driven</div>
                <p className="text-muted-foreground">
                  Insights and analytics that inform every decision we make.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold text-primary">Results-Focused</div>
                <p className="text-muted-foreground">
                  Measurable outcomes that drive your business forward.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground pt-8">
              Our approach combines strategic thinking with creative excellence, ensuring that every brand touchpoint 
              delivers value and strengthens your market position. We're not satisfied until your success story becomes our success story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
