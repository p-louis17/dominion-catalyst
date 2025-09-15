import { CheckCircle, Lightbulb, Users, BarChart3 } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Tailor-made Solutions",
      description: "Every solution is customized to meet your specific business needs and objectives, ensuring maximum relevance and impact.",
      highlight: "Custom Approach"
    },
    {
      icon: Lightbulb,
      title: "Strategy + Creativity",
      description: "We combine strategic thinking with creative innovation to deliver solutions that stand out in the market and drive results.",
      highlight: "Maximum Impact"
    },
    {
      icon: Users,
      title: "Professional & Innovative Team",
      description: "Our team of experienced professionals brings fresh perspectives and cutting-edge expertise to every project.",
      highlight: "Expert Team"
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "We're committed to delivering outcomes you can measure, track, and celebrate as your business grows and succeeds.",
      highlight: "Proven Success"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-consulting-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Why Choose </span>
              <span className="text-gold">Dominion Consulting</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand out as your ideal consulting partner through our unique approach 
              to business transformation and growth.
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="relative bg-service-card p-8 rounded-xl border border-border hover:border-gold/30 transition-all duration-500 group"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-xl transform rotate-12"></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                    <reason.icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {reason.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                Our Track Record Speaks for Itself
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that demonstrate our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed", desc: "Successful implementations" },
                { number: "100%", label: "Client Satisfaction", desc: "Happy partnerships" },
                { number: "5+", label: "Years Experience", desc: "Industry expertise" },
                { number: "24/7", label: "Support Available", desc: "Always here for you" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;