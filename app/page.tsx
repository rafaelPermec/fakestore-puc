import Banner from "@/components/Home/Banner/Banner";
import ProductsSection from "@/components/Home/ProductsSection/ProductsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-[40dvw] pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-white">
      <Banner />
      <ProductsSection />
    </div>
  );
}
