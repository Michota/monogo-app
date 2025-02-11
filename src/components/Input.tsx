import React, { useState } from "react";

const MAX_LENGTH_INPUT_VALUE = 500;

type ReactInputProps = React.ComponentProps<"input">;

interface InputProps extends ReactInputProps {
  max?: number;
}

function Input({ value: passedValue, defaultValue, max: maxLength = MAX_LENGTH_INPUT_VALUE, ...props }: InputProps) {
  const [value, setValue] = useState<InputProps["value"]>(passedValue || defaultValue);
  return (
    <input
      {...props}
      value={value}
      max={maxLength}
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
