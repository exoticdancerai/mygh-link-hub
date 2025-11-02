import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Own Part <br />
            <span className="text-secondary">of American</span>{" "}
            <span className="text-primary">History</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-2xl mx-auto">
            The first EVER National Anthem NFT commemorating America's 250th anniversary
          </p>
          
          <p className="text-accent text-lg font-semibold mb-8">hero.presale</p>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold">
            Get Early Access
          </Button>
          
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
              <h3 className="font-bold mb-2">What is it?</h3>
              <p className="text-sm text-muted-foreground">
                Digital collectible of the National Anthem performed by Hannah Magnelli
              </p>
            </Card>
            
            <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
              <h3 className="font-bold mb-2">How to buy?</h3>
              <p className="text-sm text-muted-foreground">
                Connect Solana wallet (Phantom/Solflare) or use credit card via MoonPay
              </p>
            </Card>
            
            <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
              <h3 className="font-bold mb-2">Chain & Requirements</h3>
              <p className="text-sm text-muted-foreground">
                Solana blockchain • $1.77 per token • Low gas fees
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
