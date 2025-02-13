import clsx from "clsx";
import React from "react";
import styles from "./styles/Input.module.css";

type InputProps = React.ComponentProps<"input">;

function Input({ className, ...props }: InputProps) {
  return (
    <div>
      <input {...props} className={clsx(className, styles.input)} />
    </div>
  );
}

export default Input;
