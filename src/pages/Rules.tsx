const rules = [
  {
    category: "General Rules",
    icon: "📜",
    items: [
      "Be respectful to all players and staff members.",
      "No spamming, flooding, or excessive caps in chat.",
      "No advertising other servers, websites, or Discord servers.",
      "English only in global chat. Other languages in private messages.",
      "No impersonating staff or other players.",
    ],
  },
  {
    category: "Gameplay Rules",
    icon: "⚔️",
    items: [
      "No hacking, cheating, or using unfair client modifications.",
      "No exploiting bugs or glitches — report them to staff.",
      "No teaming in solo game modes.",
      "No combat logging during PvP encounters.",
      "AFK machines and auto-clickers are strictly prohibited.",
    ],
  },
  {
    category: "Faction Rules",
    icon: "🏰",
    items: [
      "No insiding (betraying your faction from within).",
      "Maximum of 20 members per faction.",
      "No building inappropriate structures.",
      "Cannoning rules: max 10-second shot clocks during raids.",
      "No merging factions to bypass member limits.",
    ],
  },
  {
    category: "Trading Rules",
    icon: "🤝",
    items: [
      "All trades are final — no chargebacks.",
      "No scamming other players in any form.",
      "Real-money trading (RMT) is strictly prohibited.",
      "Use the official auction house for public trades.",
    ],
  },
];

const Rules = () => {
  return (
    <div className="pt-16">
      <div className="bg-accent/10 border-b-2 border-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">📋 Server Rules</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Please read and follow all rules. Violations may result in mutes, bans, or permanent removal.
          </p>
        </div>
      </div>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {rules.map((section, i) => (
            <div key={section.category} className="card-surface p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="font-display text-2xl text-foreground">
                  {i + 1}. {section.category}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((rule, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">▸</span>
                    <span className="text-sm leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 card-surface p-6 bg-destructive/5 border-destructive/20">
          <p className="text-sm text-center text-muted-foreground">
            <span className="font-bold text-destructive">⚠️ Warning:</span> Staff decisions are final. 
            Repeated offenses will result in escalating punishments up to permanent bans.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rules;
