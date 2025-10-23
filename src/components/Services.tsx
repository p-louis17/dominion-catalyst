import { Globe, Palette, TrendingUp, Users, Camera, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import servicesIllustration from "@/assets/services-illustration.jpg";

const Services = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Marketing",
      description: "Tailored campaigns and market-driven strategies that position your brand for measurable success."
    },
    {
      icon: Palette,
      title: "Creative Branding Solutions",
      description: "Logos, company profiles, and mini brand guidelines that define and strengthen your brand identity."
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Professional, user-friendly, and responsive websites designed to boost digital visibility and credibility."
    },
    {
      icon: Camera,
      title: "Events Management & Audiovisual",
      description: "Complete event planning and execution supported by photography, videography, and livestreaming solutions."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "We create engaging content, manage communities, and track performance to grow your online presence."
    }
  ];

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextService();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentService = services[currentIndex];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-brand-green">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in delivering integrated creative and strategic solutions 
              that drive business growth and success.
            </p>
          </div>

          {/* Service Carousel */}
          <div className="relative mb-16">
            <div className="bg-service-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
              <div className="max-w-4xl mx-auto">
                {/* Icon */}
                <div className="w-20 h-20 bg-brand-green/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <currentService.icon className="w-10 h-10 text-brand-green" />
                </div>

                {/* Content */}
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                  {currentService.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed max-w-2xl mx-auto">
                  {currentService.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/services')}
                    className="bg-brand-green hover:bg-brand-green-light text-white font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-brand-green/20 hover:bg-brand-green/40 backdrop-blur-sm transition-all duration-300 group"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-brand-green/20 hover:bg-brand-green/40 backdrop-blur-sm transition-all duration-300 group"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-brand-green'
                      : 'w-2 bg-muted hover:bg-brand-green/50'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="bg-service-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-green">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's discuss how our integrated solutions can help your business achieve 
                  sustainable growth and market success.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-brand-green hover:bg-brand-green-light text-white font-semibold"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={servicesIllustration} 
                  alt="Business services illustration"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-consulting-navy/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
