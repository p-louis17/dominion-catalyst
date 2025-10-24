import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const Hero = () => {
  const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0' 
                : index < currentSlide 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
            }`}
          >
            <img
              src={slide}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-consulting-navy/95 via-consulting-navy/80 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Slide Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 z-20 p-2 md:p-3 rounded-full bg-brand-green/20 hover:bg-brand-green/40 backdrop-blur-sm transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 z-20 p-2 md:p-3 rounded-full bg-brand-green/20 hover:bg-brand-green/40 backdrop-blur-sm transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-6 md:w-8 bg-brand-green'
                : 'w-1.5 md:w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-green/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 animate-fade-in border border-brand-green/30">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-brand-green fill-brand-green" />
            <span className="text-xs md:text-sm font-medium text-brand-green">Your Growth Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in text-white leading-tight">
            Transform Your Business with{" "}
            <span className="text-brand-green">Strategic Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-10 leading-relaxed animate-fade-in max-w-2xl">
            From branding to digital marketing, we deliver integrated solutions that drive measurable results and sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16 animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-brand-green hover:bg-brand-green-light text-white font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-consulting-navy font-semibold text-base md:text-lg px-6 py-5 md:px-8 md:py-6 backdrop-blur-sm transition-all duration-300"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl animate-fade-in">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mb-1 md:mb-2">150+</div>
              <div className="text-xs sm:text-sm text-gray-300">Successful Projects</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mb-1 md:mb-2">5+</div>
              <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mb-1 md:mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
