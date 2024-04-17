import React, { useState } from "react";
import SuggestionComponent from "../SuggestionComponent/SuggestionComponent";

const SearchComponent = ({ value, setValue, additionalStyles = '' }) => {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue?.length > 0) {
      setShow(true);
    }
    setValue(inputValue);
  };
  const handleCityClick = (data) => {
    setShow(false);
    setValue(`${data?.city} (${data?.code})`);
  };
  return (
    <div className="">
      <input
        className={`p-6 font-bold ${additionalStyles}`}
        placeholder='Country, city or airport'
        value={value}
        onChange={handleChange}
      />
      {(
        <SuggestionComponent value={value} handleCityClick={handleCityClick} />
      )}
    </div>
  );
};

export default SearchComponent;
