"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function TrendingTikTok() {
  const products = [
    {
      id: 1,
      name: "2 1/2'' Halloween Witch Rubber Ducks in Pointed Hats – 12 Pc.",
      price: "$9.99",
      image: "/images/duck-witch.png",
    },
    {
      id: 2,
      name: "Long Arm Stuffed Bear Animal Buddies - 12 Pc.",
      price: "$21.99",
      image: "/images/bear-buddies.png",
    },
    {
      id: 3,
      name: "Halloween Bat & Tombstone Plastic Infinity Light",
      price: "$43.99",
      image: "/images/bat-light.png",
    },
    {
      id: 4,
      name: "Halloween Orange & Black Glitter Rubber Ducks - 12 Pc.",
      price: "$9.99",
      image: "/images/duck-glitter.png",
    },
    {
      id: 5,
      name: "Mini Halloween Ghost Rubber Ducks - 24 Pc.",
      price: "$9.99",
      image: "/images/duck-ghost.png",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        {/* Left TikTok Banner */}
        <div className="bg-gradient-to-br from-pink-500 via-black to-cyan-400 rounded-2xl text-white p-10 flex flex-col justify-center items-center shadow-lg lg:col-span-1 hover:scale-105 hover:shadow-pink-400/50 transition-transform duration-500">
          <Image
            src="/images/tiktok-banner.png"
            alt="Trending on TikTok"
            width={200}
            height={200}
            className="mb-6"
          />
          <h2 className="text-3xl font-bold mb-2 text-center">
            Trending on TikTok
          </h2>
          <p className="text-xl font-semibold text-center">HOT RIGHT NOW 🔥</p>
        </div>

        {/* Product Cards (Scrollable) */}
        <div className="lg:col-span-3 overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-[220px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group relative"
              >
                <CardContent className="p-3">
                  <div className="relative w-full h-48 overflow-hidden rounded-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-orange-500 blur-xl transition-opacity duration-500" />
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800 mt-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-orange-600">
                      {product.price}
                    </p>
                  </div>
                  <button className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white py-1.5 rounded-md text-sm transition-transform duration-300 group-hover:scale-105">
                    Add to Cart
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
