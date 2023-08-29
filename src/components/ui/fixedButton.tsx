export default function FixedButton() {
  return (
    <button className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2  bottom-4 left-1/2 ">
      <div className="flex justify-center h-full max-w-lg mx-auto bg-blue-500 ease-in-out hover:bg-blue-600  text-white font-semibold border border-blue-700   rounded-full">
        <div className="flex items-center justify-center">Checkout</div>
      </div>
    </button>
  );
}
