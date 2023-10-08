import React from "react";
const ButtonsAll = ({ disabled, handleResetClick, handleSubmit }) => {
  return (
    <div className="flex items-center justify-around">
      <input
        type="submit"
        className="pl-[5.5rem] pt-[0.3rem] pb-[0.3rem] pr-[5.5rem] border cursor-pointer bg-gradient-to-br from-borderClr to-outlineClr rounded-md text-white font-bold hover:bg-gradient-to-br hover:from-outlineClr hover:to-borderClr"
        value="Register"
        disabled={disabled}
        onSubmit={handleSubmit}
      />
      <input
        type="reset"
        className="pl-[5.5rem] pt-[0.3rem] pb-[0.3rem] pr-[5.5rem] border cursor-pointer bg-gradient-to-br from-borderClr to-outlineClr rounded-md text-white font-bold hover:bg-gradient-to-br hover:from-outlineClr hover:to-borderClr"
        value="Reset"
        onClick={handleResetClick}
      />
    </div>
  );
};

export default ButtonsAll;
