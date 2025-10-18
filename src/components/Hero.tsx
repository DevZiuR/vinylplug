import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap, Phone } from "lucide-react";
import heroBg from "@/assets/gallery-7.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.imgur.com/ZLQqX4e.jpeg')` }}
    >
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm border border-primary/50 rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium font-inter">Full vehicle wraps from <span className="text-primary font-italic">$1,500</span> • Free Quotes</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            <span className="text-primary">Kissimmee's </span> Expert Vehicle Wraps, Tints & Decals
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
          <span className="text-primary">Protect your investment</span> and express your unique style with our expert wraps, precise tints, and flawless decals. Serving Kissimmee with pride and <span className="text-primary">unparalleled quality.</span></p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-6 py-6 animate-glow-pulse hover:bg-primary/90"
              onClick={scrollToContact}
            >
              <Phone className="ml-1 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline text-lg px-6 py-6 text-white/90"
              onClick={scrollToServices}
            >
              View Services
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      */}
    </section>
  );
};

export default Hero;