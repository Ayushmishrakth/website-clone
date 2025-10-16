import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PromoBar from "@/components/PromoBar";
import DealsSlider from "@/components/DealsSlider";
import FlosDeals from "@/components/FlosDeals";
import PromoShowcase from "@/components/PromoShowcase";
import TrendingTikTok from "@/components/TrendingTikTok";
import FeaturedCategories from "@/components/FeaturedCategories";
import OrderConfidence from "@/components/OrderConfidence";
//import ProductGrid from "@/components/ProductGrid";
import EmailSignupSection from "@/components/EmailSignupSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Navbar />
      <PromoBar />
      <DealsSlider />
      <FlosDeals />
      <PromoShowcase />
      <TrendingTikTok />
      <FeaturedCategories />
      <OrderConfidence />
      <EmailSignupSection />
      {/* <ProductGrid /> */}
      <Footer />
    </main>
  );
}
