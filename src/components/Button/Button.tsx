import React, { FC } from "react";

export interface ButtonProps {
  containerClassName?: string;
  disabled?: boolean;
  modalToggleId?: string;
  url?: string;
  size?: string;
}

const Button: FC<ButtonProps> = ({
  containerClassName = "",
  disabled = false,
  url = "#root",
  children,
  modalToggleId,
}) => {
  let classes =
    `ttnc-button inline-flex items-center justify-center text-center py-4 px-6 sm:px-8 2xl:px-12 text-xs 2xl:text-sm leading-none tracking-widest` +
    " " +
    "hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white dark:hover:border-secondary" +
    " " +
    containerClassName;

  if (!!url) {
    return (
      <a
        href={url}
        className={`${classes}`}
        data-ttnc-modal-toggle={modalToggleId}
      >
        {children || `This Button`}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={classes}
      data-ttnc-modal-toggle={modalToggleId}
    >
      {children || `This Button`}
    </button>
  );
};

export default Button;
