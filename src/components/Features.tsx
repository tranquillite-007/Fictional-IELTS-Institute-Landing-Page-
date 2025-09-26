import FeatureCard from "./FeatureCard";
import { Mic, FileText, Brain, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Speaking Practice",
      description:
        "Interactive speaking sessions with AI feedback and real examiner practice to boost your confidence and fluency.",
      highlight: "AI Powered",
    },
    {
      icon: FileText,
      title: "Mock Tests",
      description:
        "Full-length practice tests that simulate the real IELTS exam environment with detailed performance analytics.",
      highlight: "Real Exam Format",
    },
    {
      icon: Brain,
      title: "AI Band Score Prediction",
      description:
        "Get instant band score predictions and personalized improvement suggestions powered by advanced AI technology.",
      highlight: "Instant Results",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Learn from certified IELTS instructors with years of experience helping students achieve their target scores.",
      highlight: "Certified Trainers",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Our
            <span className="text-primary block">IELTS Programs?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive preparation tools and expert guidance designed to help
            you achieve your target IELTS band score efficiently and
            effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
