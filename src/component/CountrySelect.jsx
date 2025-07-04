"use client";
import { useState } from "react";
import CommonSelect from "./CommonSelect";

export default function CountrySelect({countrylist}) {
  const [selected, setSelected] = useState(null);

  const options = [
    { value: "india", label: "India" },
    { value: "uae", label: "United Arab Emirates" },
    { value: "china", label: "China" },
    { value: "uk", label: "United Kingdom" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
    { value: "japan", label: "Japan" },
  ];

  return (
    <CommonSelect
      options={countrylist}
      value={selected}
      onChange={setSelected}
      placeholder="Select a country"
    />
  );
}
