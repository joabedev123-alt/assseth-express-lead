import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ForWhoSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
