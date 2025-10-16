"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function FlosDeals() {
  const products = [
    {
      id: 1,
      title: '2" Mini Pumpkin-Shaped Orange Foam Stress Toys - 24 Pc.',
      price: "$14.98",
      sale: "35% OFF",
      image: "/images/pumpkin.png",
    },
    {
      id: 2,
      title: '2 1/2" Halloween Witch Rubber Ducks in Pointed Hats – 12 Pc.',
      price: "$9.99",
      sale: "40% OFF",
      image: "/images/ducks.png",
    },
    {
      id: 3,
      title: "Haunted Cemetery Backdrop - 3 Pc.",
      price: "$13.68",
      sale: "40% OFF",
      image: "/images/cemetery.png",
    },
    {
      id: 4,
      title: "Bulk 250 Pc. Plastic Glow Sticks & Accessories Party Pack",
      price: "$37.98",
      sale: "16% OFF",
      image: "/images/glow.png",
    },
    {
      id: 5,
      title:
        "11 3/4” Halloween Multicolor Prismatic Jack-O'-Lantern Light-Up LED Light",
      price: "$49.99",
      sale: "10% OFF",
      image: "/images/lantern.png",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        {/* Left Banner */}
        <div className="bg-purple-700 rounded-2xl text-white p-10 flex flex-col justify-center items-center shadow-lg lg:col-span-1">
          <Image
            src="/images/flo.png"
            alt="Flo the Flamingo"
            width={200}
            height={200}
            className="mb-6"
          />
          <h2 className="text-3xl font-bold mb-2">Flo’s Deals</h2>
          <p className="text-xl font-semibold">UP TO 70% OFF</p>
        </div>

        {/* Right Product List */}
        <div className="lg:col-span-3 overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-[220px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-3">
                  <div className="relative w-full h-48 overflow-hidden rounded-md">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mt-3 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-orange-600">
                      {product.price}
                    </p>
                    <p className="text-xs text-gray-500">{product.sale}</p>
                  </div>
                  <button className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white py-1.5 rounded-md text-sm transition">
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
