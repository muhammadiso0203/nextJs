"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";

interface IRecipes {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  image:string
}

interface IResponse {
  recipes: IRecipes[];
  limit: number;
  skip: number;
  total: number;
}

const Products = () => {
  const [data, setData] = useState<IResponse | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res: IResponse) => setData(res));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Recipes List</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data?.recipes?.map((recipes) => (
          <div
            key={recipes.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-56 relative">
              <Image
                src={recipes.image}
                alt="food picture"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-medium text-gray-700 px-4 mt-3">{recipes.name}</h2>
            <div className="p-4">
              <p className="text-sm text-gray-600">Description: {recipes.prepTimeMinutes}</p>
              <p className="text-sm text-gray-600">Category: {recipes.cookTimeMinutes}</p>
              <p className="text-sm text-gray-600">Price: {recipes.servings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
