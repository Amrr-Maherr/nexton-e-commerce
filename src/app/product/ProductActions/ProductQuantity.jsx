import { useState } from "react";

export default function ProductQuantity() {
    const [QuantityValue,setQuantityValue] = useState(1)
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
      <button
        onClick={() => {
          setQuantityValue(QuantityValue - 1);
        }}
        type="button"
        className="h-8 w-8 md:h-9 md:w-9 cursor-pointer rounded-xl border border-gray-200 text-base md:text-lg leading-none"
      >
        –
      </button>

      <input
        type="number"
        onChange={(e) => setQuantityValue(Number(e.target.value))}
        value={QuantityValue}
        className="h-8 w-10 md:h-9 md:w-14 rounded-xl border border-transparent text-center text-sm md:text-base outline-none"
      />

      <button
        onClick={(value) => {
          setQuantityValue(QuantityValue + 1);
        }}
        type="button"
        className="h-8 w-8 md:h-9 md:w-9 cursor-pointer rounded-xl border border-gray-200 text-base md:text-lg leading-none"
      >
        +
      </button>
    </div>
  );
}
