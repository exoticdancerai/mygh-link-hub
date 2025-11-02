import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AudioSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            HEAR HANNAH'S PERFORMANCE
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Listen to this beautiful interpretation of 'The Star-Spangled Banner' that will be preserved for America's 250th anniversary
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Button size="lg" className="rounded-full h-20 w-20" variant="secondary">
                <Play className="h-8 w-8 fill-current" />
              </Button>
            </div>
            <div className="h-2 bg-muted rounded-full mb-4">
              <div className="h-2 bg-primary rounded-full w-0"></div>
            </div>
            <p className="text-sm text-muted-foreground">The Star-Spangled Banner - Hannah Magnelli</p>
          </div>
        </div>
      </div>
    </section>
  );
};
