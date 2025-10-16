// ✅ Must be a default export
export default function PromoBar() {
  return (
    <div className="bg-[#ED237A] text-white text-center py-2 text-sm font-semibold">
      <p>
        Final Day! FREE SHIPPING ON ANY ORDER{" "}
        <span className="text-yellow-200">+ $10 OFF</span> on orders $75 or more{" "}
        <button className="bg-white text-[#ED237A] px-3 py-1 rounded ml-2 font-bold">
          APPLIED
        </button>{" "}
        <span className="text-xs ml-2">*Restrictions Apply</span>
      </p>
    </div>
  );
}
