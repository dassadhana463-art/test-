import HeroSection from "@/components/HeroSection";
import OwnerSection from "@/components/OwnerSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl text-foreground text-center mb-12">Why Play on Clock MC?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { emoji: "⚔️", title: "Custom Factions", desc: "Unique faction mechanics with custom enchants, cannoning, and territorial warfare." },
            { emoji: "🏪", title: "Player Economy", desc: "A fully player-driven market. Trade, auction, and build your empire from nothing." },
            { emoji: "🛡️", title: "Anti-Cheat", desc: "Enterprise-grade anti-cheat keeps gameplay fair for every single player." },
          ].map((f) => (
            <div key={f.title} className="card-surface p-8 text-center">
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <OwnerSection />
    </>
  );
};

export default Home;
