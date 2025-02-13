import clsx from "clsx";
import React from "react";
import styles from "./styles/Input.module.css";

type InputProps = React.ComponentProps<"input">;

function Input({ className, ...props }: InputProps) {
  return <input {...props} className={clsx(className, styles.input)} />;
}

export default Input;
