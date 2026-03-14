const OwnerSection = () => {
  return (
    <section className="py-20 bg-secondary/50 border-y-2 border-border">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="relative shrink-0">
          <div className="w-48 h-64 bg-card rounded-lg border-2 border-border flex items-center justify-center overflow-hidden mc-pixel-border">
            <img
              src="https://mc-heads.net/body/ClockMaster/180"
              alt="ClockMaster - Server Owner"
              className="h-56 drop-shadow-lg animate-float"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            👑 Founder & Lead Dev
          </span>
          <h2 className="font-display text-3xl text-foreground mt-2 mb-4">ClockMaster</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            "Building Clock MC has been a journey of 3 years. We focus on
            performance and fair play above all else. See you in the warzone."
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              🐦 Twitter
            </a>
            <a href="#" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              💬 Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
