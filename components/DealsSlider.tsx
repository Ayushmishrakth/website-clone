"use client";

import Image from "next/image";

export default function DealsSlider() {
  const deals = [
    {
      title: "Halloween Decor",
      subtitle: "1000s of Spooky Options",
      image: "/images/halloween-decor.jpg",
    },
    {
      title: "HALLOWEEN SALE",
      subtitle: "UP TO 60% OFF 1000s of Deals",
      image: "/images/halloween-sale.jpg",
    },
    {
      title: "HALLOWEEN COSTUME SALE",
      subtitle: "UP TO 70% OFF",
      image: "/images/costume-sale.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 group"
          >
            {/* Image */}
            <div className="relative w-full h-[480px]">
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-1">
                {deal.title}
              </h2>
              <p className="text-lg text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                {deal.subtitle}
              </p>
            </div>

            {/* Border glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-orange-500/60 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
