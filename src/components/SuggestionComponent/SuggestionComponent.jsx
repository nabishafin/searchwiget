import React from "react";
import data from "../../data.json";
import SingleCity from "../SingleCity/SingleCity";

const SuggestionComponent = ({ value, handleCityClick }) => {
  const filteredData =
    value?.length > 0 &&
    data?.filter((d) => d?.city?.toLowerCase()?.includes(value?.toLowerCase()));

  return (
    filteredData?.length > 0 && (
      <div className="absolute border-1 bg-white mt-2 p-2 max-h-80 overflow-auto">
        {filteredData?.map((data) => (
          <SingleCity
            key={data?.code}
            data={data}
            handleCityClick={handleCityClick}
          />
        ))}
      </div>
    )
  );
};

export default SuggestionComponent;
