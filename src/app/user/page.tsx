"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  image: string;
}

interface IResponse {
  users: IUser[];
  limit: number;
  skip: number;
  total: number;
}

const User = () => {
  const [data, setData] = useState<IResponse | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res: IResponse) => setData(res));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Users List</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data?.users?.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-56 relative">
              <Image
                src={user.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-600">Age: {user.age}</p>
              <p className="text-sm text-gray-600">Gender: {user.gender}</p>
              <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(User);
