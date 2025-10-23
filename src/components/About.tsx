import { Target, Eye } from "lucide-react";
import consultingTeam from "@/assets/consulting-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-consulting-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="text-brand-green">Dominion Consulting</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a dynamic Rwanda-based consultancy dedicated to helping businesses 
              enhance their market presence, brand identity, and operational success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative mb-12 lg:mb-0">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={consultingTeam} 
                  alt="Dominion Consulting professional team"
                  className="w-full h-64 md:h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card p-4 md:p-6 rounded-xl border border-border shadow-lg max-w-[200px] md:max-w-xs">
                <div className="text-lg md:text-2xl font-bold text-brand-green mb-1">Professional Excellence</div>
                <div className="text-xs md:text-sm text-muted-foreground">Delivering measurable results through strategic innovation</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Vision */}
              <div className="bg-service-card p-6 md:p-8 rounded-xl hover:bg-gradient-to-br hover:from-service-card hover:to-consulting-navy transition-all duration-500">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-green">Our Vision</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To be the go-to consulting partner for innovative, results-driven business 
                  growth solutions in Rwanda and beyond.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-service-card p-6 md:p-8 rounded-xl hover:bg-gradient-to-br hover:from-service-card hover:to-consulting-navy transition-all duration-500">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-green">Our Mission</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To empower brands with creative strategies, professional execution, and 
                  measurable impact that foster sustainable success.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { title: "Innovation", desc: "Cutting-edge solutions" },
                  { title: "Excellence", desc: "Uncompromising quality" },
                  { title: "Integrity", desc: "Transparent partnerships" },
                  { title: "Results", desc: "Measurable outcomes" },
                ].map((value, index) => (
                  <div key={value.title} className="text-center p-3 md:p-4 bg-muted/10 rounded-lg hover:bg-brand-green/10 transition-colors duration-300">
                    <div className="text-sm md:text-base font-semibold text-brand-green mb-1">{value.title}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{value.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;