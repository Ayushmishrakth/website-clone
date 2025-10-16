"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-[#f9399d] text-white py-12 text-center">
      <h1 className="text-4xl font-bold mb-2">
        🎃 Halloween Sale 🎃
      </h1>
      <p className="text-lg mb-6">
        Up to 60% OFF 1000s of spooky deals!
      </p>
      <Button className="bg-white text-pink-700 hover:bg-pink-200 font-semibold">
        Shop Now
      </Button>
    </section>
  );
}
