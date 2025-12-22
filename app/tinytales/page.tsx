import Breadcrumb from "../_components/Main/Breadcrumb";
import ProductSection from "../_components/Main/ProductSection";

export default function page() {
  return (
    <main className="lg:px-20 px-5 py-4 flex flex-col gap-4">
      <Breadcrumb />
      <ProductSection />
    </main>
  );
}
