import { Globe, Palette, TrendingUp, Users, Camera, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import servicesIllustration from "@/assets/services-illustration.jpg";

const Services = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

          {/* Service Carousel - 3 items visible */}
          <div className="relative mb-16">
            {/* Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2 md:p-3 rounded-full bg-brand-green/20 hover:bg-brand-green/40 backdrop-blur-sm transition-all duration-300 group z-10"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-brand-green group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-2 md:p-3 rounded-full bg-brand-green/20 hover:bg-brand-green/40 backdrop-blur-sm transition-all duration-300 group z-10"
              aria-label="Next services"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-brand-green group-hover:scale-110 transition-transform" />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex-none w-full md:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="bg-service-card rounded-2xl p-6 md:p-8 shadow-card border border-border h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-brand-green/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <service.icon className="w-8 h-8 text-brand-green" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-center text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-6 text-center leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col gap-3">
                      <Button 
                        size="default"
                        onClick={() => navigate('/services')}
                        className="bg-brand-green hover:bg-brand-green-light text-white font-semibold text-sm w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        size="default"
                        variant="outline"
                        onClick={() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold text-sm w-full"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
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
