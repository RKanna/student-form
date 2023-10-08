import React from "react";
import { useState } from "react";
const Phonedropdown = ({ placeholder }) => {
  const [selectedPhone, setSelectedPhone] = useState("+91");

  const handlePhoneChange = (e) => {
    setSelectedPhone(e.target.value);
  };
  return (
    <div className="flex justify-between w-full">
      <label
        htmlFor="phone"
        className="pt-[0.5rem] pb-[0.5rem] text-RedFont font-bold"
      >
        Phone Number
      </label>
      <div className="flex flex-row w-[60%] gap-2">
        <select
          id="phone"
          className="border border-black"
          value={selectedPhone}
          onChange={handlePhoneChange}
        >
          <option value="+91">+91</option>
        </select>
        <input
          className="pt-[0.5rem] pb-[0.5rem] rounded-sm border border-borderClr focus:outline-outlineClr w-full placeholder:pl-[0.2rem] pl-[10px]"
          type="text"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default Phonedropdown;
