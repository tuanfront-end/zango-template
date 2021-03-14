import React from "react";
export interface TextareaProps {
  label?: string;
  desc?: string;
  placeholder?: string;
}
const Textarea: React.FC<TextareaProps> = ({ label, desc, placeholder }) => {
  return (
    <label className="block">
      {label && (
        <span className="text-gray-700 dark:text-gray-300 text-sm font-LibreFranklin tracking-wide">
          {label}
        </span>
      )}
      <textarea
        placeholder={placeholder}
        className="mt-2 block w-full border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 font-LibreFranklin text-sm placeholder-gray-400 tracking-wide font-normal"
        rows={6}
      ></textarea>
    </label>
  );
};

export default Textarea;
