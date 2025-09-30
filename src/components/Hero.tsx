import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
       
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/90 font-medium">
                Trusted by 10,000+ students
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Master IELTS with
                <span className="block text-accent">Confidence</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Join thousands of successful students who achieved their dream
                IELTS band scores with our proven methods, expert guidance, and
                AI-powered practice tests.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-gray-800 hover:bg-white/10"
              >
                View Success Stories
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">9.0</div>
                <div className="text-sm text-white/80">Average Band Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/80">Target Achievement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-white/80">Countries Served</div>
              </div>
            </div>
          </div>

        
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="IELTS students studying together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

          
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground rounded-full p-4 shadow-medium">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground rounded-xl p-4 shadow-medium">
              <div className="text-sm font-bold">Band 8.5+</div>
              <div className="text-xs">Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
