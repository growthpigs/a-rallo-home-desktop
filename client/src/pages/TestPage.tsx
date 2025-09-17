import React from "react";
import { Waves } from "@/components/ui/wave-background";

export const TestPage = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Wave background with inverted colors - black lines on white */}
      <Waves 
        className="absolute inset-0"
        strokeColor="#000000"  // Black lines (inverted from white)
        backgroundColor="#FFFFFF"  // White background (inverted from black)
        pointerSize={0.5}
      />
      
      {/* Content on top */}
      <div className="relative z-10 p-8">
        <h1 className="text-2xl font-bold mb-4 text-black">Wave Background Test</h1>
        <p className="text-gray-600">Interactive wave grid with black lines on white background</p>
      </div>
    </div>
  );
};