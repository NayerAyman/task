import { ProductType } from "@/app/_types/ProductTypes";
import { formateCurrency } from "@/app/_lib/helpers";
import { heroSetionTitle } from "@/app/_lib/consts";
import Image from "next/image";

type ProductTextDataProps = Pick<
  ProductType,
  "name" | "description" | "price" | "discount"
>;

function ProductTextData({
  name,
  description,
  price,
  discount,
}: ProductTextDataProps) {
  return (
    <div className="flex flex-col gap-3 pb-2">
      {/* first row */}
      <div className="flex justify-between">
        {/* badge */}
        <span className="block border border-[#be968ee0] text-[#be968ee0] rounded-full py-2 px-4 w-fit font-semibold">
          {heroSetionTitle.sm}
        </span>

        <div className="flex gap-2">
          <button className="border border-gray-200 p-2 rounded-lg">
            <Image
              alt="icon"
              src={"/icon/interface/outline/bag-add.svg"}
              width={24}
              height={24}
            />
          </button>
          <button className="border border-gray-200 p-2 rounded-lg">
            <Image
              alt="icon"
              src={"/icon/interface/outline/heart_2.svg"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <h4 className="text-2xl font-semibold">{name}</h4>

      {/* Price */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <h5 className="text-xl font-bold">
            {discount
              ? formateCurrency(price - discount)
              : formateCurrency(price)}
          </h5>

          {discount && (
            <h5 className="text-lg text-gray-400 line-through font-medium">
              {formateCurrency(price)}
            </h5>
          )}
        </div>
        <p>This price is exclusive of taxes.</p>
      </div>
      {/* Description */}
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default ProductTextData;
