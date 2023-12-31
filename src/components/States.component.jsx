import React from "react";
import { useState } from "react";

const States = ({ placeholder, label }) => {
  const [selectedPhone, setSelectedPhone] = useState("--Select your state--");

  const handlePhoneChange = (e) => {
    setSelectedPhone(e.target.value);
  };
  return (
    <div className="flex justify-between w-full">
      <label
        className="pt-[0.5rem] pb-[0.5rem] text-RedFont font-bold"
        htmlFor={label}
      >
        {label}
      </label>

      <select
        id="phone"
        className="border border-black w-[65%] border-borderClr focus:outline-outlineClr placeholder:pl-[0.5rem] pl-[10px]"
        value={selectedPhone}
        onChange={handlePhoneChange}
        required
      >
        <option value="--Select your state--">--Select your state--</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">
          Andaman and Nicobar Islands
        </option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">
          Dadra and Nagar Haveli and Daman and Diu
        </option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
      </select>
    </div>
  );
};

export default States;
