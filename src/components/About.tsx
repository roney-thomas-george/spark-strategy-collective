const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed">
              We believe exceptional marketing is the perfect blend of art and science.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Artful Clarity Hub, we don't just create campaigns—we craft experiences that resonate, engage, and convert. Our approach combines strategic thinking with creative excellence, ensuring that every brand touchpoint delivers value.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 pt-12">
              <div className="space-y-4">
                <div className="text-5xl font-display font-bold text-primary">01</div>
                <h3 className="text-2xl font-display font-semibold">Creative</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bold ideas that capture attention and inspire action in crowded markets.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl font-display font-bold text-primary">02</div>
                <h3 className="text-2xl font-display font-semibold">Data-Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Insights and analytics that inform every strategic decision we make.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl font-display font-bold text-primary">03</div>
                <h3 className="text-2xl font-display font-semibold">Results-Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Measurable outcomes that drive sustainable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
