import React from "react";

const RangeInput = ({ name, label, min, max, step }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} class="form-label">
        {label}
      </label>
      <input
        type="range"
        name={name}
        id={name}
        class="form-range form-control"
        min={min}
        max={max}
        step={step}
      ></input>
    </div>
  );
};

export default RangeInput;
