import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aman Sinha",
      country: "India",
      bandScore: "8.5",
      testimonial:
        "The practice tests were incredibly accurate and helped me understand exactly where I needed improvement. I achieved my target score in just 3 months!",
      avatar: "AS",
    },
    {
      name: "Aman Sinha 2",
      country: "Egypt",
      bandScore: "9.0",
      testimonial:
        "The speaking practice sessions boosted my confidence tremendously. The expert feedback was invaluable for perfecting my pronunciation and fluency.",
      avatar: "AS2",
    },
    {
      name: "Aman Sinha 2",
      country: "Mexico",
      bandScore: "8.0",
      testimonial:
        "Outstanding preparation materials and supportive instructors. The mock tests felt exactly like the real exam, which made me feel prepared and confident on test day.",
      avatar: "AS3",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Student
            <span className="text-primary"> Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have achieved their dream IELTS
            scores with our comprehensive preparation programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              country={testimonial.country}
              bandScore={testimonial.bandScore}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
