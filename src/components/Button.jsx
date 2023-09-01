import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient py-4 px-6 rounded-[10px] font-medium ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;
