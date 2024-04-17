import React, { useState } from "react";
import CountComponent from "./CountComponent";

const PassengerCount = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const [show, setShow] = useState(false);

  let value;
  if (adultCount + childCount == 1) {
    if (adultCount == 1) {
      value = `${adultCount} Adult, Economy`;
    }
    if (childCount == 1) {
      value = `${childCount} Child, Economy`;
    }
  } else if (adultCount + childCount > 1) {
    value = `${adultCount + childCount} Travellers, Economy`;
  }else{
    value = ''
  }


  return (
    <div className="relative">
      <input
        className="p-6 font-bold rounded-r-lg"
        placeholder="Add Passengers"
        readOnly
        value={value}
        // onChange={handleChange}
        onClick={() => setShow(s => !s)}
      />

      {show && (
        <div className="w-full bg-white p-6 mt-2 rounded-lg me-5 relative">
          <h6 className="font-bold">Cabin class</h6>
          <CountComponent
            title={"Adults"}
            description={"Aged 16+"}
            value={adultCount}
            setValue={setAdultCount}
          />
          <CountComponent
            title={"Children"}
            description={"Aged 0 to 15"}
            value={childCount}
            setValue={setChildCount}
          />
        </div>
      )}
    </div>
  );
};

export default PassengerCount;
