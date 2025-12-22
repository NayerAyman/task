"use client";

import { FiMinus, FiPlus } from "react-icons/fi";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 20;

type QuantityInputProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
  gridRow?: string;
  gridColumn?: string;
};

function QuantityInput({
  quantity,
  setQuantity,
  gridRow,
  gridColumn,
}: QuantityInputProps) {
  function handleMinus() {
    if (quantity > MIN_QUANTITY) {
      setQuantity(quantity - 1);
    }
  }

  function handlePlus() {
    if (quantity < MAX_QUANTITY) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <div
      className="
          w-full h-full
          rounded-lg
          flex items-center justify-between
          bg-[#f5f5f5]
          p-1.5 md:max-w-42.5
          min-w-37.5 
        "
      style={{
        gridRow,
        gridColumn,
      }}
    >
      <button
        onClick={handleMinus}
        disabled={quantity === MIN_QUANTITY}
        className="
            p-2 text-black
            bg-white
            rounded-lg
            disabled:opacity-40 disabled:cursor-not-allowed
          "
      >
        <FiMinus />
      </button>

      <span className="text-center font-medium text-sm md:text-lg text-black">
        {quantity < 10 ? `0${quantity}` : quantity}
      </span>

      <button
        onClick={handlePlus}
        disabled={quantity === MAX_QUANTITY}
        className="
            p-2 text-black
            bg-white
            rounded-lg
            disabled:opacity-40 disabled:cursor-not-allowed
          "
      >
        <FiPlus />
      </button>
    </div>
  );
}

export default QuantityInput;
