import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Instagram,
  Facebook,
  MessageSquare,
  Car,
  Shield,
  Award
} from "lucide-react";
const logo = "https://i.imgur.com/hMmff82.png";
import { useEffect } from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Wraps",
    "Decals", 
    "Chrome Deletes",
    "Tints"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (action: string) => {
    window.open(action, '_blank');
  };

  // Reveal-on-scroll animation for footer sections
  useEffect(() => {
    const container = document.querySelector('#footer');
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
    <footer id="footer" className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="VinylPlugFL Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Premium vehicle wraps, decals, chrome deletes, and tints in Kissimmee, FL. 
              We deliver precise installation, premium materials, and a flawless finish.
            </p>

          </div>

          {/* Quick Links */}
          <div className="reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
            <h4 className="text-xl font-semibold text-foreground mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
            <h4 className="text-xl font-semibold text-foreground mb-6">HOURS</h4>
            <div className="space-y-3 text-sm text-white">
                <p className="text-muted-foreground">TUE: 9:30AM - 6:30PM</p>
                <p className="text-muted-foreground">WED: 9:30AM - 6:30PM</p>
                <p className="text-muted-foreground">THU: 9:30AM - 6:30PM</p>
                <p className="text-muted-foreground">FRI: 9:30AM - 6:30PM</p>
                <p className="text-muted-foreground">SAT: 8:30AM - 5:00PM</p>
                <p className="text-muted-foreground">SUN: CLOSED</p>
                <p className="text-muted-foreground">MON: CLOSED</p>
            </div>

          </div>

          {/* Contact Info */}
          <div className="reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
            <h4 className="text-xl font-semibold text-foreground mb-6">CONTACT</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleContactClick("tel:+1407xxxxxxx")}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>+1 (407) xxx-xxxx</span>
              </button>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Kissimmee, FL</span>
              </div>
              
              <button
                onClick={() => handleContactClick("mailto:info@vinylplugfl.com")}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>info@vinylplugfl.com</span>
              </button>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-outline p-2"
                  onClick={() => handleContactClick("sms:+1407xxxxxxx")}
                >
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-outline p-2"
                  onClick={() => handleContactClick("#")}
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-outline p-2"
                  onClick={() => handleContactClick("#")}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8 reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 VinylPlugFL. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-primary transition-colors duration-300">
                Service Area
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;