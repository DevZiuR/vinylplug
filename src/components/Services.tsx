import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Shield, 
  Sparkles, 
  Eye, 
  Palette, 
  Droplets, 
  Sofa, 
  Settings 
} from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Wraps",
      description: "High-quality vinyl wraps with precise installation and premium finishes."
    },
    {
      icon: Sparkles,
      title: "Decals",
      description: "Custom decals and graphics applied with flawless alignment and durability."
    },
    {
      icon: Settings,
      title: "Chrome deletes",
      description: "Sleek, modern chrome delete packages for a clean, stealth look."
    },
    {
      icon: Eye,
      title: "Tints",
      description: "UV-blocking, privacy-enhancing window tints with a perfect finish."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reveal-on-scroll animation for service cards and CTA
  useEffect(() => {
    const container = document.querySelector('#services');
    if (!container) return;

    const elements = container.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('animate-fade-in', 'opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-4">
            Our Exclusive Services          
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
          We offer more than just installation; we provide transformative solutions tailored to your vision. Explore our premium services below, each designed to elevate your vehicle's aesthetics, provide unmatched protection, and ensure exclusivity on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-automotive hover-lift group cursor-pointer h-full reveal-on-scroll opacity-0 translate-y-6 will-change-transform"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300 mx-auto border-2 border-primary">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Get Custom Quote
          </Button>
          <p className="text-muted-foreground mt-4">
            Free consultation and personalized service recommendations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;