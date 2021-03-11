import React, { FC } from "react";

export interface ButtonPrimaryProps {
  containerClassName?: string;
  padding?: string;
  disabled?: boolean;
  fontSize?: string;
  modalToggleId?: string;
  url?: string;
  size?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  containerClassName = "",
  padding = "py-4 px-6 sm:px-8 2xl:px-12",
  fontSize = "text-xs 2xl:text-sm uppercase",
  disabled = false,
  url = "#root",
  children,
  modalToggleId,
}) => {
  let classes =
    `ttnc-ButtonPrimary inline-flex items-center justify-center text-center leading-none tracking-widest` +
    " " +
    "border border-black bg-black text-white dark:border-white hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white dark:hover:border-secondary" +
    " " +
    padding +
    " " +
    fontSize +
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

export default ButtonPrimary;
