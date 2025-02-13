import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles/Input.module.css";

const MAX_LENGTH_INPUT_VALUE = 500;

type ReactInputProps = React.ComponentProps<"input">;
type InputProps = Omit<ReactInputProps, "max" | "min">;

function Input({
  value: passedValue,
  defaultValue,
  maxLength = MAX_LENGTH_INPUT_VALUE,
  className,
  ...props
}: InputProps) {
  const [value, setValue] = useState<InputProps["value"]>(passedValue || defaultValue);
  return (
    <input
      {...props}
      value={value}
      className={clsx(className, styles.input)}
      maxLength={maxLength}
      onChange={(e) => {
        let newValue = e.target.value;

        if (newValue.length > maxLength) {
          newValue = newValue.slice(0, maxLength);
        }

        setValue(newValue);
        props.onChange?.(e);
      }}
    />
  );
}

export default Input;
