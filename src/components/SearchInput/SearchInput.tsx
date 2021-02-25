import React from "react";

export interface SearchInputProps {
  containerClassName?: string;
}

export default function SearchInput({
  containerClassName = "text-white",
}: SearchInputProps) {
  return (
    <form
      className={`wil-search-form relative flex-shrink-0 w-52 ${containerClassName}`}
    >
      <button
        type="submit"
        className="absolute right-2  mr-1px top-1/2 transform -translate-y-1/2 p-2 flex items-center justify-center"
        onClick={undefined}
      >
        <i className="las la-search text-lg leading-none"></i>
      </button>
      <input
        type="text"
        aria-label="Search…"
        placeholder="Search…"
        className="w-full h-10 text-sm rounded-full pl-5 pr-10 placeholder-white border-gray-300 bg-transparent font-LibreFranklin"
      />
    </form>
  );
}
