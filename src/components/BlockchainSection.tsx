import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Zap, 
  Lock, 
  BarChart3, 
  Globe, 
  ArrowRightLeft,
  Coins,
  Shield
} from "lucide-react";

const BlockchainSection = () => {
  const useCases = [
    {
      icon: ArrowRightLeft,
      title: "Cross-Chain Swaps",
      description: "Seamlessly swap tokens across multiple blockchains including Ethereum, Polygon, Aptos, Sui, and Near.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Advanced Trading",
      description: "Execute sophisticated trading strategies with limit orders and automated position management.",
      gradient: "from-accent to-accent-light"
    },
    {
      icon: Lock,
      title: "Yield Farming",
      description: "Maximize returns through intelligent yield farming strategies across DeFi protocols.",
      gradient: "from-success to-success-light"
    },
    {
      icon: Coins,
      title: "Liquidity Provision",
      description: "Provide liquidity to earn fees while maintaining optimal capital efficiency.",
      gradient: "from-warning to-warning-light"
    },
    {
      icon: Shield,
      title: "Portfolio Management",
      description: "Manage your entire DeFi portfolio from one unified interface with real-time analytics.",
      gradient: "from-info to-info-light"
    },
    {
      icon: Globe,
      title: "Cross-Chain Bridge",
      description: "Bridge assets securely between different blockchain networks with minimal fees.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const supportedChains = [
    { name: "Ethereum", color: "text-blue-400", description: "The original DeFi ecosystem" },
    { name: "Polygon", color: "text-purple-400", description: "Fast & low-cost transactions" },
    { name: "Aptos", color: "text-green-400", description: "High-performance blockchain" },
    { name: "Sui", color: "text-cyan-400", description: "Next-gen scalability" },
    { name: "Near", color: "text-orange-400", description: "Developer-friendly protocol" },
    { name: "BSC", color: "text-yellow-400", description: "Binance Smart Chain" }
  ];

  return (
    <section id="blockchain" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Layers className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Blockchain Integration</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              Revolutionizing DeFi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leverage the power of multiple blockchains to maximize your trading potential 
            with our cutting-edge cross-chain DeFi platform.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Chains */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Supported Blockchain Networks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportedChains.map((chain, index) => (
              <div key={index} className="group">
                <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                  <div className={`text-2xl font-bold ${chain.color} mb-2`}>
                    {chain.name}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {chain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;