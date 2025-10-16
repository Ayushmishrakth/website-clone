"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Halloween Decor",
    subtitle: "1000s of Spooky Options",
    image: "/decor.png",
  },
  {
    id: 2,
    title: "Halloween Sale",
    subtitle: "Up to 60% Off",
    image: "/sale.png",
  },
  {
    id: 3,
    title: "Halloween Costume Sale",
    subtitle: "Up to 70% Off",
    image: "/costume.png",
  },
];

export default function ProductGrid() {
  return (
    <section className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="relative overflow-hidden rounded-lg shadow hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-0 relative">
            {/* Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-cover w-full h-[480px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
              <h3 className="text-2xl font-bold drop-shadow-md">{product.title}</h3>
              <p className="text-lg text-white/90">{product.subtitle}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
