import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex item-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-blue-600 text-zinc-200"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
