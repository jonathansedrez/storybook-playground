import { useState } from "react";
import { Input } from "./Input";

export const RegistrationForm: React.FC = () => {
  const [input, setInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const handleConfirm = () => {
    if (input) {
      setIsFinished(true);
    }
  };

  return (
    <>
      <p>Welcome to registration form</p>
      <Input
        onChange={(e) => setInput(e.target.value)}
        isRequired={!input}
        label="Some label"
      />

      <button onClick={handleConfirm}>Confirm</button>

      {isFinished && <p>Done!</p>}
    </>
  );
};
