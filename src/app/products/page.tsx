"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail:string
}

interface IResponse {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}

const Products = () => {
  const [data, setData] = useState<IResponse | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res: IResponse) => setData(res));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Products List</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-56 relative">
              <Image
                src={product.thumbnail}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-medium text-gray-700 px-4 mt-3">{product.title}</h2>
            <div className="p-4">
              <p className="text-sm text-gray-600">Description: {product.description}</p>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <p className="text-sm text-gray-600">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
