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
    `ttnc-button inline-flex items-center justify-center text-center py-3 xl:py-4 px-10 2xl:px-12 text-xs 2xl:text-sm leading-none tracking-widest` +
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
