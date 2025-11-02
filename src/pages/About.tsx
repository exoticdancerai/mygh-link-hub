import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialLinks />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Anthem250</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Anthem250 represents a groundbreaking intersection of American heritage and blockchain technology.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                We're creating the first-ever National Anthem NFT to commemorate America's 250th anniversary. 
                This project preserves a beautiful performance of "The Star-Spangled Banner" by Hannah Magnelli 
                as a digital collectible for generations to come.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Why Anthem250?</h2>
              <p className="text-muted-foreground">
                America's 250th anniversary in 2026 marks a historic milestone. Anthem250 offers a unique way 
                to participate in this celebration by owning a piece of American history in the digital age.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">The Technology</h2>
              <p className="text-muted-foreground">
                Built on the Solana blockchain, Anthem250 leverages cutting-edge technology to ensure 
                accessibility, security, and permanence. With low transaction fees and fast processing, 
                everyone can participate in this historic project.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
