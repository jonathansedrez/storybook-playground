import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isRequired?: boolean;
};

export const Input: React.FC<InputProps> = ({ isRequired, ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input {...props} />
      {isRequired && (
        <small style={{ color: "red", marginTop: "4px" }}>
          This field is required.
        </small>
      )}
    </div>
  );
};
