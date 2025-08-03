import { Button } from "@/components/ui/button";
import { Github, Twitter, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "#" },
      { name: "1inch Integration", href: "#" },
      { name: "Limit Orders", href: "#" },
      { name: "Cross-Chain", href: "#" }
    ],
    developers: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Smart Contracts", href: "#" },
      { name: "GitHub", href: "#" }
    ],
    community: [
      { name: "Discord", href: "#" },
      { name: "Telegram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Blog", href: "#" }
    ]
  };

  return (
    <footer className="py-16 px-6 border-t border-border bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mr DeFi
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Revolutionary cross-chain DeFi platform with advanced trading capabilities 
                and Telegram bot integration.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-3">
              {links.developers.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mr DeFi. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;