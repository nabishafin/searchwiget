import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="p-6 font-bold"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        monthsShown={2}
        placeholderText="Add Date"
        
      />
    </div>
  );
};

export default DatePickerComponent;
