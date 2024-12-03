"use client";
import React from "react";

function TopButton() {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed right-10 bottom-10 bg-[#1d1d1f] text-white rounded-full p-4"
      onClick={onClick}
    >
      Top
    </button>
  );
}

export default TopButton;
