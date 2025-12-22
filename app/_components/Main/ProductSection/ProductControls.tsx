"use client";
import { useState } from "react";
import QuantityInput from "./QuantityInput";
import { formateCurrency } from "@/app/_lib/helpers";
import Image from "next/image";

function ProductControls({
  price,
  discount,
  colors,
}: {
  price: number;
  discount?: number;
  colors: string[];
}) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>(
    colors[1] || colors[0] || ""
  );
  const priceAfterDiscount = discount ? price - discount : price;

  function handleSetQuantity(quantity: number) {
    setQuantity(quantity);
  }

  return (
    <div
      className={`
        w-full h-full 
        gap-4 
        flex flex-col
      `}
    >
      {/* type input */}
      <input
        className="border border-gray-200 max-w-75"
        type="text"
        name=""
        id=""
      />
      {/* size input */}
      <input
        className="border border-gray-200 max-w-75"
        type="text"
        name=""
        id=""
      />

      {/* colors list */}
      <div className="flex gap-2">
        {colors.map((color) => (
          <ColorPickerItem
            key={color}
            color={color}
            selected={selectedColor}
            onSelect={setSelectedColor}
          />
        ))}
      </div>

      {/* operations */}
      <div className="flex gap-x-5 flex-col gap-y-4 md:flex-row md:justify-between">
        {/* quantity */}
        <div className="flex gap-4 items-center">
          <QuantityInput
            gridColumn="span 2"
            gridRow="1 / 2"
            quantity={quantity}
            setQuantity={handleSetQuantity}
          />
          {/* totalPrice */}
          <h5 className="text-xl font-bold">
            {formateCurrency(priceAfterDiscount * quantity || price)}
          </h5>
        </div>

        {/* add to cart */}
        <button
          className="w-full md:w-50 bg-[#be968e] text-white py-2 rounded-lg flex gap-2 items-center justify-center font-medium "
          type="submit"
        >
          <p>Add To Cart</p>
          <Image
            alt="icon"
            src={"/icon/interface/outline/shopping bag.svg"}
            width={23}
            height={23}
          />
        </button>
      </div>
    </div>
  );
}

export default ProductControls;

const ColorPickerItem = ({
  color,
  selected,
  onSelect,
}: {
  color: string;
  selected: string;
  onSelect: (color: string) => void;
}) => {
  return (
    <button
      className={`size-10 bg-gray-100 rounded-full flex items-center justify-center ${
        selected === color ? "border-2 border-black" : ""
      }`}
      onClick={() => onSelect(color)}
    >
      <span
        className={` rounded-full size-6 block `}
        style={{ backgroundColor: color }}
      ></span>
    </button>
  );
};
