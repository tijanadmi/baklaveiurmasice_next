import AboutSection from "../components/AboutSection";
import CartCheckout from "../components/CartCheckout";
import ContactSection from "../components/ContactSection";
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
        <CartCheckout />
        <OrderSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
