"use client";
import { useState } from "react";
import CommonSelect from "./CommonSelect";

export default function SortingSelect({ onSortChange }) {
  const [selected, setSelected] = useState(null);

  const sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "date-newest", label: "Newest First" },
    { value: "date-oldest", label: "Oldest First" },
  ];

  const handleChange = (option) => {
    setSelected(option);
    onSortChange?.(option); // call parent callback if provided
  };

  return (
    <CommonSelect
      options={sortOptions}
      value={selected}
      onChange={handleChange}
      placeholder="Sort by"
    />
  );
}
