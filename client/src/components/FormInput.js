import React from "react";

const FormInput = ({ type, value, name, handleChange, label, placeholder }) => {
  return (
    <div className="formInputContainer">
      <label className="formInputLabel" htmlFor={name}>
        {label}
      </label>
      <input
        className="formInput"
        onChange={handleChange}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
