export const Stats = () => {
  const stats = [
    { value: "$1.77", label: "Per Token", color: "text-accent" },
    { value: "17.76M", label: "Total Supply", color: "text-accent" },
    { value: "2026", label: "Launch Year", color: "text-accent" },
    { value: "Solana", label: "Blockchain", color: "text-accent" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
