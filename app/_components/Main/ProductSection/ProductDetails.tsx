import Image from "next/image";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import { ProductType } from "@/app/_types/ProductTypes";

type ProductDetailsProps = Pick<
  ProductType,
  | "description"
  | "discount"
  | "images"
  | "name"
  | "price"
  | "colors"
>;

function ProductDetails({
  description,
  discount,
  images,
  name,
  price,
  colors
}: ProductDetailsProps) {
  return (
    <div
      className=" z-999 relative w-full h-full mx-auto flex md:grid gap-4 md:gap-7
      flex-col md:grid-cols-13 pb-2 md:pb-4"
    >
      <ProductImages images={images} />

      <ProductInfo
        name={name}
        description={description}
        price={price}
        discount={discount}
        colors={colors}
      />

      <Image
  alt="icon"
  src={"/Layer_1.svg"}
  className="absolute left-1 -bottom-8 -z-10"
  width={100}
  height={100}
/>
    </div>
  );
}



export default ProductDetails;
