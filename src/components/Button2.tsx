import React from "react";

const Button2 = ({ label }: { label: string }) => {
  return (
    <button className="border border-secondary backdrop-blur-lg text-secondary capitalize px-4 py-2 cursor-pointer">
      {label}
    </button>
  );
};

export default Button2;
