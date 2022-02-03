import React from "react";

const Button: React.FC<{ text: string; callback: () => void; }> = ({ text, callback }) => {
  const handleClick = (): void => {
    callback();
  };

  return (
    <button type="button" onClick={handleClick} className="Button">
      {text}
    </button>
  );
};

export default Button;
