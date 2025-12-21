import Breadcrumb from "../_components/Main/Breadcrumb";
import ProductSection from "../_components/Main/ProductSection";

export default function page() {
  return (
    <main className="md:px-20 px-2 py-2 flex flex-col gap-6">
      <Breadcrumb />
      <ProductSection />
    </main>
  );
}
