import Breadcrumb from "../_components/Main/Breadcrumb";
import ProductSection from "../_components/Main/ProductSection";
import Rating from "../_components/Main/RatingSection/Rating";
import SuggestedProducts from "../_components/Main/SimilerSection/Carousel";

export default function page() {
  return (
    <>
    <main className="lg:px-20 px-5 py-4 flex flex-col gap-7 overflow-hidden">
      <Breadcrumb />
      <ProductSection />
      <Rating />
    </main>
    <SuggestedProducts />
    </>
  );
}
