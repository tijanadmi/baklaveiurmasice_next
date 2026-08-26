import About1Section from "../components/About1Section";
import AboutSection from "../components/AboutSection";
import CartCheckout from "../components/CartCheckout";
import ContactSection from "../components/ContactSection";
import DeliverySection from "../components/DeliverySection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import OrderSection from "../components/OrderSection";
import ScrollReveal from "../components/ScrollReveal";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <DeliverySection />
        <CartCheckout />
        <OrderSection />
        <TestimonialsSection />
        <About1Section />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
