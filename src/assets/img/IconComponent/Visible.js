import React from "react";
import "./_index.scss";

const VisibleEye = () => {
  return (
    <svg
      className="eyeGlobal"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C16.9091 6 21 12 21 12C21 12 16.9091 18 12 18C5.45455 18 3 12 3 12C3 12 5.45455 6 12 6Z"
        fill="#077777"
      />
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z"
        fill="#077777"
      />
    </svg>
  );
};

export default VisibleEye;
