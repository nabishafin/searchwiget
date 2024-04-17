import React from "react";

const WrapperComponent = ({ children, text }) => {
  return (
    <div className="relative">
      <p className="absolute z-10 left-6 top-1 font-normal">{text}</p>
      {children}
    </div>
  );
};

export default WrapperComponent;
