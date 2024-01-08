import React, { useState } from "react";

function TextForm(props) {
  const [anyText, setAnyText] = useState("");
  const TextToUpper = () => {
    setAnyText(anyText.toUpperCase());
  };

  const TextToLower = () => {
    setAnyText(anyText.toLowerCase());
  };

  const handleChange = (event) => {
    setAnyText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="txt" className="form-label">
          Enter you thoughts
        </label>
        <textarea
          className="form-control"
          value={anyText}
          onChange={handleChange}
          id="txt"
          rows="10"
        />
      </div>
      <button className="btn btn-primary" onClick={TextToUpper}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-info" onClick={TextToLower}>
        convert to lowercase
      </button>
    </div>
  );
}

export default TextForm;
