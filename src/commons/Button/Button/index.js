import React from "react";
import ReactLoading from "react-loading";
import "./style.css";

export const Button = ({
  title,
  primary = true,
  secondary,
  Icon,
  disabled,
  loading,
  width,
  height,
  margin,
  color,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={
        disabled || loading
          ? "disabled-button basic-button"
          : primary
          ? "basic-button custom-button-primary "
          : secondary && "basic-button custom-button-secondary"
      }
      style={{ width, margin, height }}
      {...props}
    >
      {loading ? (
        <ReactLoading type={"spin"} width="20px" height="20px" color={color} />
      ) : (
        title
      )}

      {Icon && <div className="button-right-icon"> {Icon}</div>}
    </button>
  );
};
