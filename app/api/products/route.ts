import { NextResponse } from "next/server";

let products: any[] = [];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.price || !data.stock) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newProduct = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description || "",
      image: data.image || "",
    };

    products.push(newProduct);

    return NextResponse.json(
      { message: "Product added", product: newProduct },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding product:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
