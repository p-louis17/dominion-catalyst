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
      features: [
        "Market Analysis & Research",
        "Campaign Strategy Development",
        "Digital Marketing Solutions",
        "Performance Tracking & Analytics",
        "Competitive Positioning",
        "ROI Optimization"
      ],
      benefits: "Drive measurable growth with data-driven marketing strategies that connect with your target audience and deliver results."
    },
    {
      icon: Palette,
      title: "Creative Branding Solutions",
      description: "Logos, company profiles, and mini brand guidelines that define and strengthen your brand identity.",
      features: [
        "Logo Design & Development",
        "Brand Guidelines Creation",
        "Visual Identity Systems",
        "Print & Digital Materials",
        "Brand Messaging Strategy",
        "Rebranding Services"
      ],
      benefits: "Create a memorable brand identity that resonates with your audience and sets you apart from competitors."
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Professional, user-friendly, and responsive websites designed to boost digital visibility and credibility.",
      features: [
        "Responsive Web Design",
        "SEO Optimization",
        "Custom Development",
        "Performance Optimization",
        "E-commerce Solutions",
        "Content Management Systems"
      ],
      benefits: "Establish a powerful online presence with websites that engage visitors and convert them into customers."
    },
    {
      icon: Camera,
      title: "Events Management & Audiovisual",
      description: "Complete event planning and execution supported by photography, videography, and livestreaming solutions.",
      features: [
        "Event Planning & Coordination",
        "Professional Photography",
        "Videography Services",
        "Live Streaming Solutions",
        "Audio/Visual Equipment",
        "Post-Event Content"
      ],
      benefits: "Create memorable experiences with seamless event execution and high-quality audiovisual coverage."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "We create engaging content, manage communities, and track performance to grow your online presence.",
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Performance Analytics",
        "Influencer Partnerships",
        "Social Media Advertising",
        "Engagement Strategies"
      ],
      benefits: "Build and nurture an engaged online community that amplifies your brand message and drives business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-consulting-navy via-background to-brand-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-foreground">
              Our <span className="text-brand-green">Services</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions designed to elevate your business and drive sustainable growth. 
              From strategy to execution, we're your partner in success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <Card key={service.title} className="overflow-hidden border-border bg-service-card shadow-card">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <CardHeader className={`p-6 md:p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-green/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      size="lg"
                      onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="bg-brand-green hover:bg-brand-green-light text-white font-semibold text-sm md:text-base w-full sm:w-auto"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </CardHeader>

                  {/* Benefits */}
                  <CardContent className={`bg-brand-green/10 p-6 md:p-8 lg:p-12 flex items-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-brand-green">Why Choose This Service?</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {service.benefits}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-brand-green/10 via-background to-consulting-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-brand-green hover:bg-brand-green-light text-white font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
