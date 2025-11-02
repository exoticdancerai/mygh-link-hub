import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Tokenomics = () => {
  const tokenomicsData = [
    { label: "Token Price", value: "$1.77", description: "Symbolic of 1776" },
    { label: "Total Supply", value: "17.76M", description: "Representing independence year" },
    { label: "Blockchain", value: "Solana", description: "Fast & low-cost" },
    { label: "Launch Year", value: "2026", description: "250th anniversary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SocialLinks />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Tokenomics</h1>
            
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Every number tells a story of American independence
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {tokenomicsData.map((item, index) => (
                <Card key={index} className="p-8">
                  <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                  <div className="text-4xl font-bold text-accent mb-2">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </Card>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Distribution</h2>
              <p className="text-muted-foreground mb-8">
                The token distribution is designed to ensure broad participation and long-term sustainability 
                of the Anthem250 project.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Utility</h2>
              <p className="text-muted-foreground">
                Anthem250 tokens represent ownership of a unique piece of American history. Holders will have 
                access to exclusive content, community events, and future initiatives celebrating America's heritage.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tokenomics;
