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
        gap-7 
        flex flex-col
      `}
    >
      {/* Type select */}
      <div className="relative  w-full lg:w-[45%]">
        <select
          id="type"
          defaultValue=""
          className="peer w-full px-3  py-3 pr-10 text-sm bg-white border border-gray-200 rounded-md appearance-none focus:outline-none focus:border-black"
        >
          <option value="Cooton" disabled hidden />
          <option value="cotton">Cotton</option>
          <option value="wool">Wool</option>
          <option value="silk">Silk</option>
        </select>

        {/* Arrow */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>

        <label
          htmlFor="type"
          className="absolute left-2 top-2 text-gray-800 transition-all bg-white px-2 pointer-events-none
                 peer-focus:-top-2 peer-focus:text-xs
                 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
        >
          Type
        </label>
      </div>

      {/* Size select */}
      <div className="relative w-full  lg:w-[45%] ">
        <select
          id="size"
          defaultValue=""
          className="peer w-full px-3   py-3 pr-10 text-sm bg-white border border-gray-200 rounded-md appearance-none focus:outline-none focus:border-black"
        >
          <option value="2Xl" disabled hidden  />
          <option value="2xl">2XL</option>
          <option value="3xl">3XL</option>
        </select>

        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>

        <label
          htmlFor="size"
          className="absolute left-2 top-2 text-gray-800 transition-all bg-white px-2  pointer-events-none
                 peer-focus:-top-2 peer-focus:text-xs
                 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
        >
          Size
        </label>
      </div>

      {/* colors list */}
      <h4 className="text-2xl">colors</h4>
      <div className="flex gap-4">
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
        <div className="flex items-center  gap-3  ">
        <h2 className="text-2xl">Quantity</h2>
        <p className="text-md md:text-lg text-gray-400">($300.00 for piece)</p>
        </div>
      <div className="flex gap-x-5 flex-col gap-y-5 md:flex-row md:justify-between">
        {/* quantity */}
        <div className="flex gap-4 w-full items-center">
          <QuantityInput
            gridColumn="span 2"
            gridRow="1 / 2"
            quantity={quantity}
            setQuantity={handleSetQuantity}
          />
          {/* totalPrice */}
          <h5 className="text-2xl font-semibold">
            {formateCurrency(priceAfterDiscount * quantity || price)}
          </h5>
        </div>

        {/* add to cart */}
        <button
          className="w-full md:w-70 bg-[#be968e] text-white py-5 md:px-7 md:py-3 rounded-lg flex gap-2 items-center justify-center font-medium "
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
  const colorsN = [
    { hex: "#d90202", name: " Red" },
    { hex: "#b8ccda", name: "Blue" },
    { hex: "#988755", name: " Brass" },
    { hex: "#7198c8", name: " Blue" },
    { hex: "#5d5d5b", name: " Gray" },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className={`size-12 md:size-15 bg-gray-100 rounded-full flex items-center justify-center ${
          selected === color ? "border-2 border-black" : ""
        }`}
        onClick={() => onSelect(color)}
      >
        <span
          className={` rounded-full size-6 block `}
          style={{ backgroundColor: color }}
        ></span>
      </button>
      <p>
        {selected === color ? colorsN.find((c) => c.hex === color)?.name : ""}
      </p>
    </div>
  );
};
