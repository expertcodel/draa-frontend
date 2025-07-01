"use client";
import { useState } from "react";
import CommonSelect from "./CommonSelect";

export default function SortingSelect({ setcourselist, selected, setSelected, name, course_name, setIdx, setButton, type }) {
  // const [selected, setSelected] = useState(null);

  const sortOptions = [

    { value: "date-newest", label: "Newest First" },
    { value: "date-oldest", label: "Oldest First" },
  ];

  const handleChange = async (option) => {


    if (option.value === "date-newest") {
      setSelected(1);
    }
    else {
      setSelected(0);
    }

    if (type === "courses") {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${1}&name=${name}&course_name=${course_name}&sort=${option.value === "date-newest" ? 1 : 0}`);
      setIdx(1);
      const res = await response.json();
      if (res.status) {
        setcourselist(res.courselist);
        setButton(Math.ceil(res.totalItems / 12));
      }

    }
    else {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books/?page=${1}&name=${name}&book_category=${course_name}&sort=${option.value === "date-newest" ? 1 : 0}`);
      setIdx(1);
      const res = await response.json();
      if (res.status) {
        setcourselist(res.booklist);
        setButton(Math.ceil(res.totalItems / 12));
      }
    }



    // onSortChange?.(option); // call parent callback if provided
  };

  return (
    <CommonSelect
      options={sortOptions}
      onChange={handleChange}
      placeholder="Sort by"
    />
  );
}
