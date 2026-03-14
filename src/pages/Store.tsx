import StoreSection from "@/components/StoreSection";

const Store = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary/10 border-b-2 border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">⛏️ Server Store</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Support Clock MC and unlock exclusive ranks, coins, and crate keys.
          </p>
        </div>
      </div>
      <StoreSection />
    </div>
  );
};

export default Store;
