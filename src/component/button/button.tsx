import React from "react";
import "../../style/button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ onClick, label }) => {
  return (
    <div className="containerButton" onClick={onClick}>
      <a>{label}</a>
    </div>
  );
};

export default Button;
