import clsx from "clsx";
import React from "react";
import Spinner from "./Spinner";
import styles from "./styles/Button.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
}

function Button({ isLoading, className, children, disabled, ...props }: ButtonProps) {
  const isDisabled = isLoading || disabled;
  return (
    <button
      disabled={isDisabled}
      className={clsx(styles.button, className, isLoading && styles.buttonLoading, isDisabled && styles.buttonDisabled)}
      {...props}
    >
      {children}
      {isLoading && <Spinner />}
    </button>
  );
}

export default Button;
