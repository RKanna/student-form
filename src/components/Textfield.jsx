import React from "react";

function Textfield({
  id,
  label,
  placeholder,
  maxLength,
  type,
  minDate,
  maxDate,
  name,
  value,
  onChange,
  textInputValue,
  handleTextInputChange,
}) {
  return (
    <div className="flex justify-between w-full">
      <label
        className="pt-[0.5rem] pb-[0.5rem] text-RedFont font-bold"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-[65%] pt-[0.5rem] pb-[0.5rem] rounded-sm border border-borderClr focus:outline-outlineClr placeholder:pl-[0.2rem] pl-[10px]"
        type={type}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        min={minDate}
        max={maxDate}
        name={name}
        // value={textInputValue}
        // onChange={handleTextInputChange}

        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export default Textfield;
