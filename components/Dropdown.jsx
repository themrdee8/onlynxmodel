"use client";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ text, description, specificClassNames }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setDropdown(!dropdown)}
        className="border rounded-lg px-4 py-2 flex justify-between cursor-pointer"
      >
        <p>{text}</p>
        <RiArrowDownSLine
          className={`${
            dropdown
              ? "rotate-180"
              : ""
          } ${specificClassNames}`}
        />
      </div>
      <div className={`overflow-auto mt-1 rounded-lg max-h-0 mb-4 ${dropdown ? "max-h-60 border p-3" : ""}`}>
        <p className="text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default Dropdown;
