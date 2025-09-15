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
              <span className="text-gold">Dominion Consulting</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a dynamic Rwanda-based consultancy dedicated to helping businesses 
              enhance their market presence, brand identity, and operational success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={consultingTeam} 
                  alt="Dominion Consulting professional team"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl border border-border shadow-lg max-w-xs">
                <div className="text-2xl font-bold text-gold mb-1">Professional Excellence</div>
                <div className="text-sm text-muted-foreground">Delivering measurable results through strategic innovation</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Vision */}
              <div className="bg-service-card p-8 rounded-xl hover:bg-gradient-to-br hover:from-service-card hover:to-consulting-navy transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the go-to consulting partner for innovative, results-driven business 
                  growth solutions in Rwanda and beyond.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-service-card p-8 rounded-xl hover:bg-gradient-to-br hover:from-service-card hover:to-consulting-navy transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower brands with creative strategies, professional execution, and 
                  measurable impact that foster sustainable success.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Innovation", desc: "Cutting-edge solutions" },
                  { title: "Excellence", desc: "Uncompromising quality" },
                  { title: "Integrity", desc: "Transparent partnerships" },
                  { title: "Results", desc: "Measurable outcomes" },
                ].map((value, index) => (
                  <div key={value.title} className="text-center p-4 bg-muted/10 rounded-lg hover:bg-gold/10 transition-colors duration-300">
                    <div className="font-semibold text-gold mb-1">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.desc}</div>
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