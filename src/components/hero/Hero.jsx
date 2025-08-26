"use client";

import { memo, useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)
  return (
    <div className="container mx-auto h-220 flex justify-center items-center">
      <div className="text-center bg-gray-300 p-20 rounded-[10px]">
        <h2 className="text-2xl font-bold mb-6">
          {loading ? (
            <span className="flex justify-center items-center gap-2">
              <span className="w-5 h-5 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></span>
              Loading...
            </span>
          ) : (
            `Count ${count}`
          )}
        </h2>
        <div className="flex gap-8 mt-10">
          <button
            onClick={() => setCount((p) => p + 1)}
            className="p-2 bg-blue-500 text-white rounded-[10px]"
          >
            Increment
          </button>
          <button
            disabled={count <= 0}
            onClick={() => setCount((p) => p - 1)}
            className="p-2 bg-blue-500 text-white rounded-[10px]"
          >
            Decriment
          </button>
          <button
            onClick={() => setCount(0)}
            className="p-2 bg-blue-500 text-white rounded-[10px]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
