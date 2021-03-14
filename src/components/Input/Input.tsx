import React from "react";
export interface InputProps {
  containerClassName?: string;
  placeholder?: string;
  label?: string;
  type?: string;
}
const Input: React.FC<InputProps> = ({
  containerClassName = "block",
  placeholder = "",
  label = "",
  type = "text",
}) => {
  return (
    <label className={containerClassName}>
      {label && (
        <span className="text-gray-700 dark:text-gray-300 text-sm font-LibreFranklin tracking-wide">
          {label}
        </span>
      )}
      <input
        type={type}
        className="mt-2 block w-full border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 font-LibreFranklin 2xl:py-3 placeholder-gray-400 tracking-wide text-sm"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
