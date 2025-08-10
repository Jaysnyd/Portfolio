import React from "react";

const BG = () => {
  return (
    <div
      className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%]"
      style={{
        animation: "gradientShift 15s ease infinite",
      }}
    />
  );
};

export default BG;
