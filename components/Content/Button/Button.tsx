import React from "react";
import styles from "./Button.module.css";
type ButtonType = {
  text: string | null;
  style: string;
  iconStyle: string;
  onClick?: () => void;
  disabled?: boolean;
};
const Button: React.FC<ButtonType> = ({
  text,
  style,
  iconStyle,
  onClick,
  disabled,
}) => {
  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      <i className={iconStyle}></i>
      {text && <p className={`text-sm ${styles.whitespace}`}>{text}</p>}
    </button>
  );
};

export default Button;
