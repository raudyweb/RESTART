import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import HoursSection from "@/components/HoursSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
  title="Restart Coffee | Café de especialidad y brunch en Vilanova i la Geltrú"
  description="Disfruta de café de especialidad, brunch y repostería artesanal en Restart Coffee. Descubre nuestra carta y visítanos en Vilanova i la Geltrú."
/>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReviewsSection />
      <HoursSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
