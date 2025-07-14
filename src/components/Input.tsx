import React, { type ChangeEvent } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isRequired?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  isRequired,
  label,
  onChange,
  ...props
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="input">{label}</label>
      <input {...props} id="input" onChange={onChange} />
      {isRequired && (
        <small style={{ color: "red", marginTop: "4px" }}>
          This field is required.
        </small>
      )}
    </div>
  );
};
