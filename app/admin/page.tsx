// app/admin/page.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function AdminHome() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Products</h3>
          <p className="text-2xl font-bold mt-2">—</p>
          <Link href="/admin/products" className="text-sm text-blue-600 mt-4 inline-block">
            Manage products →
          </Link>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Orders</h3>
          <p className="text-2xl font-bold mt-2">—</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Customers</h3>
          <p className="text-2xl font-bold mt-2">—</p>
        </div>
      </div>
    </div>
  );
}
