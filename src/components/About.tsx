import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import aboutCar from "@/assets/about-car.jpeg";

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
             <span className="text-primary">Driven</span> by Passion, <span className="text-primary">Defined</span> by Detail        
            </h2>

            <div className="prose prose-lg mb-8">
              <p className="text-md leading-relaxed mb-6 font-inter text-muted-foreground">
              VinylPlugFL was born from a passion for automotive excellence and an eye for impeccable detail. Based in the heart of Kissimmee, FL, we've built our reputation not on being the biggest, but on being the best. Every wrap, tint, chrome delete, and decal is applied with precision and care, because your <span className="text-primary">vehicle deserves nothing less</span>.
              </p>
              
              <p className="text-md leading-relaxed mb-6 font-inter text-muted-foreground">
              We use only <span className="text-primary">premium materials</span> and cutting-edge techniques to ensure a flawless finish that turns heads and stands the test of time. Our pride isn't just in the work we do; it's in the exclusive, elevated look we help you achieve.
              </p>
            </div>

            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              See Our Work
            </Button>
          </div>

          {/* Car Image */}
          <div className="animate-fade-in">
            <img 
              src={'https://i.imgur.com/zQES4kH.jpeg'} 
              alt="High Performance Detail luxury car detailing results" 
              className="w-full h-auto rounded-lg shadow-elegant"
            />

            {/* Maintenance Plans CTA */}
            {/* 
            <Card className="card-automotive mt-8">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-playfair text-foreground mb-3">Maintenance Plans Available</h3>
                <p className="text-muted-foreground mb-4 font-inter">
                  Consistent care is key to vehicle protection and pristine appearance. 
                  Our weekly, bi-weekly, and monthly maintenance plans ensure your vehicle 
                  stays protected and immaculate year-round.
                </p>
                <Button 
                  variant="outline" 
                  className="btn-outline"
                  onClick={scrollToContact}
                >
                  Learn About Plans
                </Button>
              </CardContent>
            </Card>
            */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;