"use client";

export default function Navbar() {
  const items = [
    "Deals",
    "Halloween",
    "Christmas",
    "Party Supplies",
    "Toys & Games",
    "Crafts",
    "Teaching Supplies",
    "Faith",
    "Candy & Snacks",
    "Home & Decor",
    "Wedding",
    "Personalized",
    "Shop By Color",
  ];

  return (
    <nav className="bg-[#006A9A] text-white py-2 text-sm shadow-inner">
      <div className="container mx-auto flex flex-wrap justify-center gap-5 px-3">
        {items.map((item) => (
          <button
            key={item}
            className="hover:text-yellow-300 font-medium transition"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
