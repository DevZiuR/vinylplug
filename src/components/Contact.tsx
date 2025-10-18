import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare,
  Car,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  const businessHours = [
    { day: "Tuesday - Friday", hours: "9:30 AM - 6:30 PM" },
    { day: "Saturday", hours: "8:30 AM - 5:00 PM" },
    { day: "Sunday & Monday", hours: "Closed" },
  ];

  const contactMethods = [
    {
      icon: Phone,
      text: "(407) xxx-xxxx",
      action: "tel:+1407xxx xxxx"
    },
    {
      icon: Mail,
      text: "info@vinylplugfl.com",
      action: "mailto:info@vinylplugfl.com"
    },
    {
      icon: MapPin,
      text: "Kissimmee, FL"
    }
  ];

  const serviceTypes = [
    "Wraps",
    "Decals",
    "Chrome Delete",
    "Tints",
    "Custom Request"
  ];

  const handleContactClick = (action: string | null) => {
    if (action) {
      window.open(action, '_blank');
    }
  };

  // Reveal-on-scroll animation for contact section items
  useEffect(() => {
    const container = document.querySelector('#contact');
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-4">
            Ready to <span className="text-primary">Elevate</span> Your Look?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Premium vehicle <span className="font-semibold">wraps, decals, chrome deletes, and tints</span> in Kissimmee, FL.
            We use high‑quality materials and precise installation for a flawless, long‑lasting finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
            <Card className="card-automotive">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-primary mr-3" />
                  Request Your Wrap/Tint/Decal Quote
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Your name"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="+1 (407) xxx-xxxx"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Needed *
                    </label>
                    <select className="w-full p-3 bg-muted border border-border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Vehicle Make & Model
                      </label>
                      <Input 
                        placeholder="e.g., BMW 3 Series"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Vehicle Year
                      </label>
                      <Input 
                        placeholder="e.g., 2022"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Desired Color / Finish (Wrap/Tint)
                      </label>
                      <Input 
                        placeholder="e.g., Satin Black, 35% tint, etc."
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Decal Placement (if applicable)
                      </label>
                      <Input 
                        placeholder="e.g., doors, hood, rear window, etc."
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <Input 
                        placeholder="$ - $$$"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date
                      </label>
                      <Input 
                        type="date"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Location *
                    </label>
                    <Input 
                      placeholder="Address in Kissimmee (or Central Florida) where service will be performed"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea 
                      placeholder="Tell us about your vehicle's condition, specific needs, or any questions..."
                      rows={4}
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-primary text-lg py-6"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Get My Free Quote
                  </Button>
                </form>

              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4 reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-4 rounded-lg bg-card text-foreground hover:bg-secondary transition-colors cursor-pointer ${method.action ? 'hover:bg-secondary' : ''}`}
                    onClick={() => method.action && handleContactClick(method.action)}
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{method.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="card-automotive reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Emergency services available by appointment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3 reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6 flex items-center justify-center w-full"
                onClick={() => handleContactClick("tel:+1407xxxxxxx")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;