import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-8 consulting-fade-in">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Rwanda's Premier Consulting Partner</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 consulting-fade-in stagger-animation" style={{"--delay": "200ms"} as React.CSSProperties}>
            <span className="text-foreground">Elevate Your</span>
            <br />
            <span className="text-gold">Business Success</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed consulting-fade-in stagger-animation" style={{"--delay": "400ms"} as React.CSSProperties}>
            Dynamic Rwanda-based consultancy dedicated to enhancing your market presence, 
            brand identity, and operational success through integrated creative and strategic solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center consulting-fade-in stagger-animation" style={{"--delay": "600ms"} as React.CSSProperties}>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-light text-gold-foreground font-semibold px-8 py-4 text-lg gold-glow"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gold/30 text-gold hover:bg-gold/10 px-8 py-4 text-lg"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 consulting-fade-in stagger-animation" style={{"--delay": "800ms"} as React.CSSProperties}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;