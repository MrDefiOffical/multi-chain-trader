import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Smartphone, ArrowRight } from "lucide-react";
import telegramImage from "@/assets/telegram-bot.jpg";

const TelegramSection = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Trading",
      description: "Advanced algorithms execute optimal trades automatically"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Simple Commands",
      description: "Trade with simple text commands - no complex interfaces"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      description: "Trade on-the-go directly from your mobile device"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Bot className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Telegram Bot</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Trade DeFi from 
                <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent"> Telegram</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our advanced Telegram bot brings professional DeFi trading to your fingertips. 
                Execute cross-chain swaps, set limit orders, and manage your portfolio with simple commands.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 defi-card rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bot commands preview */}
            <div className="p-6 defi-card rounded-xl">
              <h3 className="font-semibold mb-4">Example Commands</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-primary">/swap 100 USDC ETH</div>
                <div className="text-accent">/limit sell 10 ETH at 3000 USDC</div>
                <div className="text-success">/portfolio</div>
              </div>
            </div>

            <Button variant="accent" size="lg" className="group">
              Start Trading on Telegram
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Telegram bot screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden defi-card animate-float">
              <img 
                src={telegramImage} 
                alt="Telegram Bot Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating indicators */}
            <div className="absolute -top-4 -right-4 bg-success/20 backdrop-blur-sm border border-success/40 rounded-full px-4 py-2 animate-pulse-glow">
              <span className="text-success text-sm font-semibold">Live Trading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;