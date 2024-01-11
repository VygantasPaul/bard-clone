import React from "react";
import styles from "./Button.module.css";
type ButtonType = {
  text: string;
  style: string;
  iconStyle: string;
};
const Button: React.FC<ButtonType> = ({ text, style, iconStyle }) => {
  return (
    <button className={style}>
      <i className={iconStyle}></i>
      <p className={`text-sm ${styles.whitespace}`}>{text}</p>
    </button>
  );
};

export default Button;
