import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      quarter: "Q4 2024 - Q1 2025",
      items: [
        "Project conception and planning",
        "Team formation",
        "Technology stack selection",
        "Initial community building",
      ],
      completed: true,
    },
    {
      phase: "Phase 2: Development",
      quarter: "Q2 2025 - Q3 2025",
      items: [
        "Smart contract development",
        "Audio recording and production",
        "Website and platform launch",
        "Whitepaper release",
      ],
      completed: false,
    },
    {
      phase: "Phase 3: Pre-Launch",
      quarter: "Q4 2025 - Q1 2026",
      items: [
        "Marketing campaign",
        "Partnership announcements",
        "Waitlist opening",
        "Pre-sale events",
      ],
      completed: false,
    },
    {
      phase: "Phase 4: Launch",
      quarter: "Q2 2026",
      items: [
        "Official token launch",
        "250th anniversary celebration",
        "Community events",
        "Media coverage",
      ],
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SocialLinks />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Roadmap</h1>
            
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Our journey to America's 250th anniversary
            </p>
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <Card key={index} className={`p-8 ${phase.completed ? 'border-primary' : ''}`}>
                  <div className="flex items-start gap-4">
                    {phase.completed && (
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{phase.quarter}</p>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
