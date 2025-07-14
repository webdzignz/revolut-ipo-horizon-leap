const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 text-primary tracking-tight">
          IPOWIKI
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Your comprehensive resource for IPO information, analysis, and insights. 
          Discover upcoming public offerings and investment opportunities.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Explore IPOs
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
