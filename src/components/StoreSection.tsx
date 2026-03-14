import { useState } from "react";
import { Sparkles, Zap, Shield } from "lucide-react";

type Category = "ranks" | "coins" | "keys";

const products: Record<Category, Array<{
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  popular?: boolean;
}>> = {
  ranks: [
    {
      name: "CHRONOS RANK",
      description: "Permanent access to /fly, 5x Homes, and the exclusive Chronos Kit.",
      price: "$24.99",
      icon: <Sparkles className="w-6 h-6 text-mc-gold" />,
      popular: true,
    },
    {
      name: "AETHER RANK",
      description: "Permanent access to /feed, 3x Homes, and the Aether Prefix.",
      price: "$14.99",
      icon: <Zap className="w-6 h-6 text-mc-diamond" />,
    },
    {
      name: "TITAN RANK",
      description: "The ultimate status. All perks included plus /vault and custom tags.",
      price: "$49.99",
      icon: <Shield className="w-6 h-6 text-mc-emerald" />,
    },
  ],
  coins: [
    {
      name: "500 COINS",
      description: "A starter pack for the in-game economy. Trade, bid, and build.",
      price: "$4.99",
      icon: <span className="text-2xl">🪙</span>,
    },
    {
      name: "2,500 COINS",
      description: "Best value pack. Dominate the auction house and outbid rivals.",
      price: "$19.99",
      icon: <span className="text-2xl">💰</span>,
      popular: true,
    },
    {
      name: "10,000 COINS",
      description: "Whale pack. Become the richest player on the server instantly.",
      price: "$69.99",
      icon: <span className="text-2xl">👑</span>,
    },
  ],
  keys: [
    {
      name: "COMMON KEY x3",
      description: "Unlock the Common Crate for basic gear and resources.",
      price: "$2.99",
      icon: <span className="text-2xl">🔑</span>,
    },
    {
      name: "RARE KEY x3",
      description: "Unlock the Rare Crate for enchanted weapons and armor.",
      price: "$7.99",
      icon: <span className="text-2xl">🗝️</span>,
      popular: true,
    },
    {
      name: "LEGENDARY KEY",
      description: "One shot at the Legendary Crate. Custom items and exclusive loot.",
      price: "$14.99",
      icon: <span className="text-2xl">⚡</span>,
    },
  ],
};

const tabs: { label: string; value: Category }[] = [
  { label: "⚔️ Ranks", value: "ranks" },
  { label: "🪙 Coins", value: "coins" },
  { label: "🔑 Keys", value: "keys" },
];

const StoreSection = () => {
  const [activeTab, setActiveTab] = useState<Category>("ranks");

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="flex justify-center mb-10">
        <div className="flex bg-card p-1 rounded-lg border-2 border-border">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2.5 rounded text-sm font-bold transition-all ${
                activeTab === tab.value ? "tab-active" : "tab-inactive"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products[activeTab].map((product) => (
          <div key={product.name} className="card-surface p-8 relative overflow-hidden">
            {product.popular && (
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-black tracking-widest text-mc-gold uppercase bg-mc-gold/10 px-2 py-1 rounded">
                  ⭐ Popular
                </span>
              </div>
            )}
            <div
              className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center ${
                product.popular ? "bg-mc-gold/15" : "bg-secondary"
              }`}
            >
              {product.icon}
            </div>
            <h3 className="text-xl font-display text-foreground mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                {product.price}
              </span>
              <button
                className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                  product.popular
                    ? "mc-btn text-primary-foreground"
                    : "border-2 border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoreSection;
