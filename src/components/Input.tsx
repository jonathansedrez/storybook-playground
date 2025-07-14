import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isRequired?: boolean;
  label?: string;
};

export const Input: React.FC<InputProps> = ({
  isRequired,
  label,
  ...props
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="input">{label}</label>
      <input {...props} id="input" />
      {isRequired && (
        <small style={{ color: "red", marginTop: "4px" }}>
          This field is required.
        </small>
      )}
    </div>
  );
};
