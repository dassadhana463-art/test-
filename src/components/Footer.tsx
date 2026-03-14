import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t-2 border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-display text-lg text-foreground mb-1">⛏️ CLOCK MC</div>
          <p className="text-xs text-muted-foreground">
            © 2024 Clock MC. Not affiliated with Mojang AB.
          </p>
        </div>
        <div className="flex gap-6 text-xs font-bold text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
          <Link to="/store" className="hover:text-primary transition-colors">STORE</Link>
          <Link to="/rules" className="hover:text-primary transition-colors">RULES</Link>
          <a href="#" className="hover:text-primary transition-colors">SUPPORT</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
