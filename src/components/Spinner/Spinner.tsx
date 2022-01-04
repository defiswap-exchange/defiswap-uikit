import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", background: "none" }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="0"
        fill="none"
        stroke="#ffb400"
        strokeWidth="10"
      >
        <animate
          attributeName="r"
          begin="-1.1904761904761905s"
          calcMode="spline"
          dur="2.380952380952381s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;35"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-1.1904761904761905s"
          calcMode="spline"
          dur="2.380952380952381s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="0" fill="none" stroke="#000" strokeWidth="10">
        <animate
          attributeName="r"
          calcMode="spline"
          dur="2.380952380952381s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;35"
        ></animate>
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2.380952380952381s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
}

export default Icon;
