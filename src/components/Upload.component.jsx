import React, { useState } from "react";

const FileUpload = ({ label }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //validation for checking the file size not exceed 100kb
      if (file.size <= 100000) {
        setSelectedFile(file);
      } else {
        alert("File size exceeds the maximum limit of 100KB.");
      }
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
      <div className="flex flex-row w-[60%] gap-12">
        <div className="w-[5rem]">
          <span className="whitespace-nowrap text-borderClr">*Max size</span>
          <p className="text-borderClr">100kb.</p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {selectedFile && <p></p>}
      </div>
    </div>
  );
};

export default FileUpload;
