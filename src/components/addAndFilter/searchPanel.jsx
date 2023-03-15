import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchPanel = (props) => {
  const {searchTerm, searchInputChange} = props
  return (
    <div className="rounded-full pl-6 py-1 sm:py-2 border-2 border-gray-800 shadow-sm shadow-gray-600 caret-gray-300 text-gray-400 flex items-center gap-2 mt-5 max-w-xs mx-auto">
      <BiSearch className="text-teal-500"></BiSearch>
      <input
        className="bg-[#121111] outline-none"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={searchInputChange}
      />
    </div>
  );
};

export default SearchPanel;
