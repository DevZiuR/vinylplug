import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Play } from "lucide-react";

// Import gallery images
// (Legacy local gallery imports removed after refocus to wraps/decals/chrome/tints)

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  type GalleryItem = {
    src: string;
    alt: string;
    title: string;
    category: string;
    featured?: boolean;
    type?: 'image' | 'video';
  };

  const galleryItems: GalleryItem[] = [
    // Wraps
    {
      src: 'https://i.imgur.com/Kuyty69.jpeg',
      alt: 'Mitsubishi Evo full wrap',
      category: 'wraps',
      title: 'Evo Wrap'
    },
    {
      src: 'https://i.imgur.com/q1X9rd4.jpeg',
      alt: 'Mitsubishi Evo wrap (angle 2)',
      category: 'wraps',
      title: 'Evo Wrap (2)'
    },
    {
      src: 'https://i.imgur.com/0weBdbx.mp4',
      alt: 'Subaru Sambar – Satin Black Wrap & Decals (video)',
      category: 'wraps',
      title: 'Subaru Sambar • Satin Black (Video)',
      type: 'video'
    },

    // Decals
    {
      src: 'https://i.imgur.com/CMwKPlF.jpeg',
      alt: 'Hello Kitty custom decals',
      category: 'decals',
      title: 'Hello Kitty Decals'
    },
    {
      src: 'https://i.imgur.com/ZLQqX4e.jpeg',
      alt: 'Cyber Beast featured background look',
      category: 'decals',
      featured: true,
      title: 'Cyber Beast • Feature'
    },

    // Chrome Deletes
    {
      src: 'https://i.imgur.com/5JfcoKC.jpeg',
      alt: 'Chrome delete on a clean Honda Civic',
      category: 'chrome',
      title: 'Chrome Delete • Civic'
    },
    {
      src: 'https://i.imgur.com/geTXlMN.jpeg',
      alt: 'Chrome delete on Jeep',
      category: 'chrome',
      title: 'Chrome Delete • Jeep'
    },
    {
      src: 'https://i.imgur.com/psKRkUp.jpeg',
      alt: 'Chrome delete on Jeep (angle 2)',
      category: 'chrome',
      title: 'Chrome Delete • Jeep (2)'
    },
    {
      src: 'https://i.imgur.com/DMxNjva.jpeg',
      alt: 'Chrome delete on Mercedes-Benz',
      category: 'chrome',
      title: 'Chrome Delete • Benz'
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Work" },
    { id: "wraps", label: "Wraps" },
    { id: "decals", label: "Decals" },
    { id: "chrome", label: "Chrome Deletes" },
    { id: "tints", label: "Tints" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reveal-on-scroll animation for gallery cards
  useEffect(() => {
    const container = document.querySelector('#gallery');
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
  }, [activeFilter]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
            Our <span className="text-primary">Work Speaks</span> for Itself
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-inter">
            See the incredible transformations we've achieved for Miami's most discerning vehicle owners. 
            From everyday cars to exotic supercars, every detail matters.
          </p>
          
        </div>


        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className={`card-automotive hover-lift cursor-pointer overflow-hidden group reveal-on-scroll opacity-0 translate-y-6 will-change-transform ${
                  item.featured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}>
                  <CardContent className="p-0 relative">
                    <div className="aspect-square overflow-hidden">
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-foreground font-semibold mb-2">{item.title}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground capitalize">
                            {item.category}
                          </span>
                          {item.type === 'video' ? (
                            <Play className="h-5 w-5 text-primary" />
                          ) : (
                            <ZoomIn className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.alt}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;