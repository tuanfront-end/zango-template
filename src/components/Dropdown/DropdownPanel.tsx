import React from "react";

export interface DropdownPanelProps {
  containerClassName?: string;
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({
  children,
  containerClassName = "",
}) => {
  return (
    <div
      className={`ttnc-dropdown__panel hidden w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 my-2 z-50 ${containerClassName}`}
      style={{ minWidth: "12rem" }}
    >
      {children}
    </div>
  );
};

export default DropdownPanel;
