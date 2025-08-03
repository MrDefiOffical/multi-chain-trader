import HeroSection from "@/components/HeroSection";
import TelegramSection from "@/components/TelegramSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TelegramSection />
      <Footer />
    </div>
  );
};

export default Index;
