import { Globe, Palette, TrendingUp, Users, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesIllustration from "@/assets/services-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Professional, user-friendly, and responsive websites designed to boost digital visibility and credibility.",
      features: ["Responsive Design", "SEO Optimization", "Custom Development", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "Creative Branding Solutions",
      description: "Logos, company profiles, and mini brand guidelines that define and strengthen your brand identity.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Materials"]
    },
    {
      icon: TrendingUp,
      title: "Strategic Marketing",
      description: "Tailored campaigns and market-driven strategies that position your brand for measurable success.",
      features: ["Market Analysis", "Campaign Strategy", "Digital Marketing", "Performance Tracking"]
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "We create engaging content, manage communities, and track performance to grow your online presence.",
      features: ["Content Creation", "Community Management", "Analytics", "Influencer Partnerships"]
    },
    {
      icon: Camera,
      title: "Events Management & Audiovisual",
      description: "Complete event planning and execution supported by photography, videography, and livestreaming solutions.",
      features: ["Event Planning", "Photography", "Videography", "Live Streaming"]
    }
  ];

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

          {/* Services grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-card p-8 rounded-xl border border-border group cursor-pointer"
                style={{"--delay": `${index * 100}ms`} as React.CSSProperties}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-green/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-green/30 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-brand-green" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group-hover:text-brand-green group-hover:bg-brand-green/10 transition-all duration-300 p-0"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom section with illustration */}
          <div className="bg-service-card rounded-2xl p-8 lg:p-12">
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
                  className="bg-brand-green hover:bg-brand-green-light text-brand-green-foreground font-semibold"
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