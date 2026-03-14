import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("play.clockmc.net");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden hero-glow">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Live Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-2 border-primary/20 text-primary text-xs font-bold mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-green" />
          </span>
          1,248 PLAYERS ONLINE
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-6">
          TIME IS{" "}
          <span className="text-primary">POWER.</span>
        </h1>
        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10">
          Experience the next generation of competitive Factions. Low latency,
          custom enchants, and a player-driven economy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={copyIP}
            className={`mc-btn text-primary-foreground px-8 py-3 rounded text-sm transition-all ${
              copied ? "!bg-mc-emerald" : ""
            }`}
          >
            {copied ? "✓ COPIED TO CLIPBOARD!" : "⛏️ PLAY.CLOCKMC.NET"}
          </button>
          <Link
            to="/store"
            className="px-8 py-3 rounded text-sm font-bold border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all"
          >
            VISIT STORE →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
