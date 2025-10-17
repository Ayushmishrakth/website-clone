// app/admin/layout.tsx
import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-blue-600">MyStore Admin</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <Link href="/admin" className="block px-3 py-2 rounded hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/admin/products" className="block px-3 py-2 rounded hover:bg-gray-100">
            Products
          </Link>
          <Link href="/admin/products/new" className="block px-3 py-2 rounded hover:bg-gray-100">
            Add Product
          </Link>
          <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-500">
            Back to Store
          </Link>
        </nav>

        <div className="mt-auto text-xs text-gray-400">
          <p>Logged in as Admin</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1">
        {/* Top nav */}
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden px-2 py-1 bg-gray-100 rounded">Menu</button>
            <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">admin@example.com</div>
            <button className="px-3 py-1 rounded bg-red-50 text-red-600 text-sm">Logout</button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
