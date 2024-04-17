import React from "react";

const SingleCity = ({ data, handleCityClick }) => {
  const { city, country, code } = data || {};
  return (
    <div className="m-2 cursor-pointer" onClick={() => handleCityClick(data)}>
      <div className="font-bold">
        {city} {` (${code})`}
      </div>
      <div>{country} </div>
    </div>
  );
};

export default SingleCity;
