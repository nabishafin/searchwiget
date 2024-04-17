import React from "react";

const CountComponent = ({ title, description, value = 0, setValue }) => {
  const handlePlusClick = () => {
    setValue((val) => val + 1);
  };
  const handleMinusClick = () => {
    if (value > 0) {
      setValue((val) => val - 1);
    }
  };
  return (
    <div className="flex justify-between items-center mt-7">
      <div className="flex flex-col">
        <div className="font-bold">{title}</div>
        <div>{description}</div>
      </div>
      <div className="">
        <button
          className="border bg-slate-200 px-2 rounded font-bold"
          onClick={handleMinusClick}
          disabled={value == 0}
        >
          -
        </button>
        <span className="ms-3 font-bold">{value}</span>
        <button
          className="ms-3 border bg-slate-200 px-2 rounded font-bold"
          onClick={handlePlusClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CountComponent;
