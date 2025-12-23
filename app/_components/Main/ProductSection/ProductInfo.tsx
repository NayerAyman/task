import ProductTextData from "./ProductTextData";
import ProductControls from "./ProductControls";
import { ProductType } from "@/app/_types/ProductTypes";

type ProductInfoProps = Pick<
  ProductType,
  | "name"
  | "description"
  | "price"
  | "discount"
  | "colors"
>;

function ProductInfo({
  name,
  description,
  price,
  discount,
  colors
}: ProductInfoProps) {
  return (
    <div
      className={`w-full h-fit flex flex-col gap-4 `}
      style={{
        gridColumn: "6/14",
      }}
    >
      {/* Text Data */}
      <ProductTextData
        name={name}
        description={description}
        price={price}
        discount={discount}
      />

      <hr className="border-gray-200"/>
      {/* ProductControls  */}
      <ProductControls price={price}  discount={discount||0} colors={colors}/>
    </div>
  );
}

export default ProductInfo;
