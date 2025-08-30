export default function ProductQuantity() {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        className="h-8 w-8 md:h-9 md:w-9 cursor-pointer rounded-xl border border-gray-200 text-base md:text-lg leading-none"
      >
        –
      </button>

      <input
        type="number"
        defaultValue={1}
        className="h-8 w-10 md:h-9 md:w-14 rounded-xl border border-transparent text-center text-sm md:text-base outline-none"
      />

      <button
        type="button"
        className="h-8 w-8 md:h-9 md:w-9 cursor-pointer rounded-xl border border-gray-200 text-base md:text-lg leading-none"
      >
        +
      </button>
    </div>
  );
}
