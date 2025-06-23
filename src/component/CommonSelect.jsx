"use client";
import Select from "react-select";

export default function CommonSelect({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  isMulti = false,
  className = "form-control",
  ...rest
}) {
  return (
    <div className="selectBox">
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isMulti={isMulti}
        className={className}
        {...rest}
      />
    </div>
  );
}
