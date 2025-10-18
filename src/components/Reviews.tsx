import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, User } from "lucide-react";
import { useEffect } from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Brian",
      rating: 5,
      text: "Absolutely impressed with the detail and professionalism! My car looks brand new—inside and out every time I book with High Performance Details. Adrian took his time, paid attention to every little spot, and the results speak for themselves. Highly recommend to anyone looking for top-tier service!",
    },
    {
      name: "Marisbel Dominguez", 
      rating: 5,
      text: "High Performance Details did an amazing job on my car! The attention to detail was next level—my car looks brand new inside and out. You can tell he really cares about the quality of his work. The shine, the cleanliness, everything was flawless. Definitely coming back and recommending him to everyone I know. Top-tier service all around!"
    },
    {
      name: "Vinnie Mayans III",
      rating: 5,
      text: "Absolutely the best in the business! Professional and precise when it comes to details. My Corvette convertible 'BLU RAY' had an intense detail job done and it came out better than new condition. I now have him detail both my Corvette 'BLU RAY' and my 'Beautiful Blue Convertible Foxbody Mustang' on a bi-weekly basis. Strongly recommend Adrian @ High Performance Details."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reveal-on-scroll animation for review cards
  useEffect(() => {
    const container = document.querySelector('#reviews');
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
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-black mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-current" />
              ))}
            </div>
            <span className="text-gray-600">• 25+ Google Reviews</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            See why Miami trusts High Performance Detail for exceptional automotive care
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="card-automotive hover-lift h-full reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                    </div>
                  </div>
                  <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" className="h-6 w-6 text-primary/50" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                  "{review.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-6"
            onClick={() => window.open('https://www.google.com/search?q=High+Performance+Detail+Miami+reviews', '_blank')}
          >
            View More Reviews
          </Button>
        </div>


      </div>
    </section>
  );
};

export default Reviews;