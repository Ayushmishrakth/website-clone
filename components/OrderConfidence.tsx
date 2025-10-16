"use client";

import Image from "next/image";
import React from "react";

const OrderConfidence = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10">
      <div className="bg-[#0099e0] rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/images/order-confidence.png" // 👈 your image file in /public/images/
            alt="Order With Confidence"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="text-white px-6 py-6 md:py-0 md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Order With Confidence
          </h2>
          <p className="text-lg md:text-xl font-medium">
            <span className="font-bold italic">Newsweek®</span> recognized us as{" "}
            <span className="font-bold">best of the best</span> when it comes to
            providing fun-tastic{" "}
            <span className="font-bold">customer service!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderConfidence;
