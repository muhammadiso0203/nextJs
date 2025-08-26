"use client";

import { memo, useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto h-220 flex justify-center items-center">
      <div className="text-center bg-gray-300 p-20 rounded-[10px]">
        <h2>Count {count}</h2>
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
