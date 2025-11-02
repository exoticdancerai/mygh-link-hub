import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Countdown } from "@/components/Countdown";
import { AudioSection } from "@/components/AudioSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialLinks />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Countdown />
        <AudioSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
