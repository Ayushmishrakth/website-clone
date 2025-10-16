"use client";
import Image from "next/image";
import { useRef } from "react";

export default function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const categories = [
    { id: 1, name: "Sale", image: "/images/cat-sale.png" },
    { id: 2, name: "New", image: "/images/cat-new.png" },
    { id: 3, name: "Party Supplies", image: "/images/cat-party.png" },
    { id: 4, name: "Candy & Snacks", image: "/images/cat-candy.png" },
    { id: 5, name: "Apparel & Accessories", image: "/images/cat-apparel.png" },
    { id: 6, name: "Team Spirit", image: "/images/cat-team.png" },
    { id: 7, name: "Grand Events", image: "/images/cat-events.png" },
    { id: 8, name: "Wedding", image: "/images/cat-wedding.png" },
    { id: 9, name: "Teaching Supplies", image: "/images/cat-teaching.png" },
  ];

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12 relative">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
        Featured Categories
      </h2>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
      >
        <span className="text-2xl font-bold text-gray-700">‹</span>
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
      >
        <span className="text-2xl font-bold text-gray-700">›</span>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4"
      >
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center flex-shrink-0 group">
            <div className="w-28 h-28 rounded-full bg-blue-600 flex justify-center items-center border-4 border-blue-300 hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-blue-600 text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
