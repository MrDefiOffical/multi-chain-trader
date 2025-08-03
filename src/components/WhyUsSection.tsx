import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const WhyUsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our optimized infrastructure and direct 1inch integration.",
      stats: "< 100ms execution",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-layer security protocols protect your assets with smart contract audits and insurance coverage.",
      stats: "$100M+ protected",
      color: "text-accent"
    },
    {
      icon: DollarSign,
      title: "Lowest Fees",
      description: "Save up to 70% on trading fees with our intelligent routing and gas optimization.",
      stats: "0.1% trading fee",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Advanced analytics and AI-powered insights help you make better trading decisions.",
      stats: "98% accuracy",
      color: "text-info"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join 50K+ active traders sharing strategies and insights in our vibrant community.",
      stats: "50K+ users",
      color: "text-warning"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and automated assistance through our Telegram bot.",
      stats: "24/7 availability",
      color: "text-purple-400"
    }
  ];

  const achievements = [
    { label: "Total Volume Traded", value: "$2.5B+", icon: TrendingUp },
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Supported Tokens", value: "10K+", icon: Zap },
    { label: "Uptime", value: "99.9%", icon: CheckCircle }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-accent-light bg-clip-text text-transparent">
              The Ultimate DeFi
            </span>
            <br />
            <span className="text-foreground">Trading Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of decentralized trading with our cutting-edge platform 
            that combines speed, security, and simplicity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-current/20 to-current/10 flex items-center justify-center ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {benefit.title}
                      </h3>
                      <span className={`text-sm font-bold ${benefit.color}`}>
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Stats */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <achievement.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Trading?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of traders who trust Mr DeFi for their cross-chain DeFi needs.
              Start trading today and experience the difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="lg" className="group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;