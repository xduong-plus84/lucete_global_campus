export function ButtonStyle() {
  return (
    <button
      onClick={() => handleClickPrint()}
      className="w-32 px-3 py-1 font-semibold border rounded border-transparent bg-gray-600 text-gray-50 hover:text-gray-50 hover:bg-gray-500 duration-300 ml-4"
    >
      Print
    </button>
  );
}
