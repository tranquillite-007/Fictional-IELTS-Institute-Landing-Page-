import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  country: string;
  bandScore: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({ name, country, bandScore, testimonial, avatar }: TestimonialCardProps) => {
  return (
    <Card className="bg-testimonial border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
      <CardContent className="p-8 space-y-6">
        {/* Quote icon */}
        <div className="flex justify-center">
          <Quote className="h-8 w-8 text-primary/20" />
        </div>

        {/* Testimonial text */}
        <p className="text-muted-foreground leading-relaxed italic text-center">
          "{testimonial}"
        </p>

        {/* Rating */}
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>

        {/* User info */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
            {avatar}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{country}</p>
            <div className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
              Band Score: {bandScore}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;