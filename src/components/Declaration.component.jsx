import React from "react";
const Declaration = () => {
  return (
    <div className="flex w-full gap-4 small-checkbox">
      <input
        className="forclrCheckBox w-[17px] h-[17px] outline outline-borderClr outline-1"
        type="checkbox"
        id="myCheckbox"
        required
      />
      <label className="mt-[-0.25rem]" htmlFor="myCheckbox">
        I hereby declare that the above information provided is true and
        correct.
      </label>
    </div>
  );
};

export default Declaration;
