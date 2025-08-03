import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-defi.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="DeFi Trading Interface" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
              Mr DeFi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionary cross-chain DeFi platform with advanced limit orders, 
              <span className="text-primary font-semibold"> 1inch integration</span>, and 
              <span className="text-accent font-semibold"> Telegram bot trading</span>
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 py-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/30 backdrop-blur-sm rounded-full border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Instant Cross-Chain Swaps</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/30 backdrop-blur-sm rounded-full border border-accent/20">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Advanced Limit Orders</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/30 backdrop-blur-sm rounded-full border border-success/20">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">Smart Trading Strategies</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Launch App
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="lg">
              Try Telegram Bot
            </Button>
          </div>

          {/* Supported chains */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-6">Supported Networks</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Ethereum</span>
              <span className="text-lg font-semibold">Polygon</span>
              <span className="text-lg font-semibold">Aptos</span>
              <span className="text-lg font-semibold">Sui</span>
              <span className="text-lg font-semibold">Near</span>
              <span className="text-lg font-semibold">BSC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;