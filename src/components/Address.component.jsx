import React from "react";

function Address({ id, label, placeholder, maxLength, type }) {
  return (
    <div className="flex justify-between w-full">
      <label
        className="pt-[0.5rem] pb-[0.5rem] text-RedFont font-bold"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className="w-[65%] pt-[0.5rem] pb-[0.5rem] rounded-sm border border-borderClr focus:outline-outlineClr placeholder:pl-[0.5rem] pl-[10px]"
        name=""
        id=""
        cols="50"
        rows="5"
        placeholder={placeholder}
        required
      ></textarea>
    </div>
  );
}

export default Address;
