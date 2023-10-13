import React, { useState } from "react";

function Checkbox({ label }) {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "checkbox1":
        setCheckbox1(checked);
        break;
      case "checkbox2":
        setCheckbox2(checked);
        break;
      case "checkbox3":
        setCheckbox3(checked);
        break;
      case "checkbox4":
        setCheckbox4(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-between w-full">
      <label
        className="pt-[0.5rem] pb-[0.5rem] text-RedFont font-bold"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="w-[75%] pt-[0.5rem] pb-[0.5rem] flex gap-12 forHobbies">
        <label className="font-bold text-RedFont">
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkbox1}
            onChange={handleCheckboxChange}
          />
          Music
        </label>

        <label className="font-bold text-RedFont">
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkbox2}
            onChange={handleCheckboxChange}
          />
          Movies
        </label>

        <label className="font-bold text-RedFont">
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkbox3}
            onChange={handleCheckboxChange}
          />
          Sports
        </label>

        <label className="font-bold text-RedFont">
          <input
            type="checkbox"
            name="checkbox4"
            checked={checkbox4}
            onChange={handleCheckboxChange}
          />
          Travel
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
