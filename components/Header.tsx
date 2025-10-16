"use client";

import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Phone, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#0073A8] text-white py-3 shadow">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Oriental Trading" className="h-10" />
        </div>

        {/* Center: Search */}
        <div className="flex items-center bg-white rounded overflow-hidden w-[40%]">
          <Input
            placeholder="Search for Party, Wedding, Toys, Crafts & More..."
            className="border-none text-black focus-visible:ring-0"
          />
          <button className="bg-[#005F87] px-3 py-2">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <Phone className="w-5 h-5" />
          <User className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
