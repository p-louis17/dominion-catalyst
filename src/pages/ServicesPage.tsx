import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Palette, TrendingUp, Users, Camera, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Marketing",
      description: "Tailored campaigns and market-driven strategies that position your brand for measurable success.",
      details: [
        "Market Analysis & Research",
        "Campaign Strategy Development",
        "Digital Marketing Solutions",
        "Performance Tracking & Analytics",
        "Competitive Positioning",
        "ROI Optimization"
      ]
    },
    {
      icon: Palette,
      title: "Creative Branding Solutions",
      description: "Logos, company profiles, and mini brand guidelines that define and strengthen your brand identity.",
      details: [
        "Logo Design & Development",
        "Brand Guidelines Creation",
        "Visual Identity Systems",
        "Print & Digital Materials",
        "Brand Messaging Strategy",
        "Rebranding Services"
      ]
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Professional, user-friendly, and responsive websites designed to boost digital visibility and credibility.",
      details: [
        "Responsive Web Design",
        "SEO Optimization",
        "Custom Development",
        "Performance Optimization",
        "E-commerce Solutions",
        "Content Management Systems"
      ]
    },
    {
      icon: Camera,
      title: "Events Management & Audiovisual",
      description: "Complete event planning and execution supported by photography, videography, and livestreaming solutions.",
      details: [
        "Event Planning & Coordination",
        "Professional Photography",
        "Videography Services",
        "Live Streaming Solutions",
        "Audio/Visual Equipment",
        "Post-Event Content"
      ]
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "We create engaging content, manage communities, and track performance to grow your online presence.",
      details: [
        "Content Creation & Curation",
        "Community Management",
        "Performance Analytics",
        "Influencer Partnerships",
        "Social Media Advertising",
        "Engagement Strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-green/10 via-background to-consulting-navy/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-brand-green/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-brand-green/20">
                <span className="text-sm font-medium text-brand-green">Integrated Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Our <span className="text-brand-green">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive solutions tailored to drive your business growth and success
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl p-8 shadow-lg border-2 border-border hover:border-brand-green transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-brand-green-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-brand-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-brand-green/5 to-consulting-navy/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-brand-green/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-brand-green/20">
                <span className="text-sm font-medium text-brand-green">Let's Connect</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Ready to <span className="text-brand-green">Get Started?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Let's discuss how our services can help transform your business and achieve your goals
              </p>
              <Button
                size="lg"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-brand-green hover:bg-brand-green-light text-white font-semibold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
