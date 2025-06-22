import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false
}) => {
  return (
      <button
          className={`btn ac_btn button_h ${className}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
      >
        {children}
        <div className="ring one"></div>
        <div className="ring two"></div>
        <div className="ring three"></div>
      </button>
  );
};

export default Button;