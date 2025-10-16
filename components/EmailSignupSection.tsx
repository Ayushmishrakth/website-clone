"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function EmailSignupSection() {
  return (
    <section className="bg-[#007fad] text-white">
      {/* 🔹 Top Email Signup Bar */}
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between border-b border-white/20">
        <div className="flex flex-col w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-3">
            Get $10 Off Your Order When You Sign Up for Our Emails!
          </h2>
          <div className="flex w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 py-3 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-[#e65525] hover:bg-[#cc4b21] px-6 py-3 rounded-r-md font-bold">
              SIGN UP
            </button>
          </div>
        </div>

        {/* 🔹 Social Icons */}
        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <h3 className="font-bold mb-3">
            Stay Connected with Oriental Trading
          </h3>
          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, color: "#3b5998" },
              { Icon: FaLinkedinIn, color: "#0077b5" },
              { Icon: FaPinterestP, color: "#bd081c" },
              { Icon: FaTiktok, color: "#010101" },
              { Icon: FaYoutube, color: "#ff0000" },
              { Icon: FaInstagram, color: "#e1306c" },
            ].map(({ Icon, color }, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-md hover:scale-110 transition-transform"
                style={{ color }}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Footer Links Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        {[
          {
            title: "Quick Links",
            items: [
              "Catalog Quick Order",
              "Request Free Catalog",
              "Gift Cards",
              "Oriental Trading Coupons",
              "Email Sign-Up",
              "SMS Text Sign-Up",
              "What is Fun Rewards+?",
            ],
          },
          {
            title: "Customer Service",
            items: [
              "Contact Us",
              "Help & FAQ",
              "Order Tracking",
              "Order Form",
              "Return Policy",
              "Shipping Info",
              "Shopping Cart",
            ],
          },
          {
            title: "About Us",
            items: [
              "Company Information",
              "How We Give Back",
              "Employment",
              "Affiliate Program",
              "110% Lowest Price Guarantee",
              "100% Happiness Guarantee",
            ],
          },
          {
            title: "Safe & Secure Shopping",
            items: [
              "Privacy Policy",
              "Terms of Use",
              "Safety News",
              "Cookie Policy",
              "Do Not Sell or Share My Info",
            ],
          },
          {
            title: "Custom Products",
            items: ["Custom Products"],
          },
        ].map((section, i) => (
          <div key={i}>
            <h4 className="font-bold mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
