import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlockchainSection from "@/components/BlockchainSection";
import WhyUsSection from "@/components/WhyUsSection";
import TelegramSection from "@/components/TelegramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <BlockchainSection />
      <WhyUsSection />
      <TelegramSection />
      <Footer />
    </div>
  );
};

export default Index;
