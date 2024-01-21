import React from "react";
import "./Button.scss";

const Button = ({ onClick, isDisabled, isNotSelected, children, modifier }) => {
  const buttonClassNames = ["button"];
  if (isDisabled || isNotSelected) buttonClassNames.push("disabled");
  if (modifier) buttonClassNames.push(modifier);
  const className = buttonClassNames.join(" ");

  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
