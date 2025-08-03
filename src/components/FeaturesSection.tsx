import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Network, 
  Clock, 
  BarChart3,
  ArrowUpDown,
  Lock
} from "lucide-react";
import networkBg from "@/assets/network-bg.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: <ArrowUpDown className="w-8 h-8" />,
      title: "Cross-Chain Swaps",
      description: "Seamlessly trade across EVM, Aptos, Sui, and Near networks with optimal routing",
      color: "text-primary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Advanced Limit Orders",
      description: "Set sophisticated trading strategies with our enhanced limit order protocol",
      color: "text-accent"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "1inch Integration",
      description: "Best execution prices through 1inch's powerful aggregation technology",
      color: "text-success"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Audited",
      description: "Battle-tested smart contracts with multiple security audits and insurance",
      color: "text-blue-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Strategies",
      description: "AI-powered trading strategies that adapt to market conditions automatically",
      color: "text-purple-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time portfolio tracking and performance analytics across all chains",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={networkBg} 
          alt="Network Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Advanced DeFi Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Next-Generation 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> DeFi Trading</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of decentralized finance with our comprehensive suite of 
            trading tools, cross-chain capabilities, and intelligent automation.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 defi-card rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-card/50 ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 1inch Integration highlight */}
        <div className="defi-card rounded-2xl p-8 md:p-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-primary rounded-full">
              <Network className="w-6 h-6 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">Powered by 1inch</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold">
              Best Execution <span className="text-primary">Guaranteed</span>
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integration with 1inch ensures you always get the best possible prices 
              across hundreds of DEXes and liquidity sources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg">
                Explore 1inch Features
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;