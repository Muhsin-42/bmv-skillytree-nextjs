import React from "react";

const ButtonPrimary = ({ text }: { text: string }) => {
  return (
    <button className="primary-gradient h-[35px] w-[160px] rounded-[61px] font-bold text-white">
      {text}
    </button>
  );
};

export default ButtonPrimary;
