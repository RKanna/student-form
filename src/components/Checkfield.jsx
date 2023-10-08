import React from "react";
import { useState } from "react";

// function RadioButtons({}) {
//   const [selectedOption, setSelectedOption] = useState("Male");
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
// }

function Checkfield({ id, label }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex justify-between w-full">
      <label
        className="pt-[0.5rem] pb-[0.5rem] text-RedFont font-bold"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="radioBtn w-[65%] pt-[0.5rem] pb-[0.5rem] flex gap-4">
        <input
          className=""
          type="radio"
          id={id}
          value="Male"
          checked={selectedOption === "Male"}
          onChange={handleOptionChange}
          required
        />
        Male
        <input
          className=""
          type="radio"
          id={id}
          value="Female"
          checked={selectedOption === "Female"}
          onChange={handleOptionChange}
          required
        />
        Female
      </div>
    </div>
  );
}

export default Checkfield;
