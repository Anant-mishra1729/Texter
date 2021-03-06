import React, { useState } from "react";

// Usestate -> Hooks => For handling states in functional based components

export default function Textform(props) {
  const headingStyle = { color: props.mode === "light" ? "black" : "orange" };
  const textStyle = { color: props.mode === "light" ? "black" : "white" };

  // Convert to uppercase
  const handleUpClick = () => {
    modifyText(text.toUpperCase());
    props.showAlert("Text is capitalized","secondary");
  };

  const removeExtraSpaces = () => {
    modifyText(text.replace(/\s\s+/g, " "));
    props.showAlert("Extra spaces removed","secondary");
  };

  // Counting words
  const countWords = () => {
    let matches = text.split(/[^\s]+/).length - 1;
    return matches;
  };

  // Reading time
  const readTime = () => {
    let time_min = countWords() * 0.008;
    let sec = time_min * 60;
    if (time_min < 1) {
      return sec.toFixed(2) + " seconds";
    } else {
      return (
        Math.floor(time_min) + " minute " + (sec % 60).toFixed(2) + " seconds"
      );
    }
  };

  // Convert to lowercase
  const handleLowClick = () => {
    modifyText(text.toLowerCase());
    props.showAlert("Text converted to lower case","secondary");
  };

  // Clear text
  const clearText = () => {
    modifyText("");
    props.showAlert("Reset completed ","danger");
  };

  // Without this you can't write in text area
  const handleOnChange = (event) => {
    modifyText(event.target.value);
  };

  // Using hook
  const [text, modifyText] = useState("");

  return (
    <>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter your text here..."
            onChange={handleOnChange}
            id="myText"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "rgb(33 37 41)",
              color :props.mode === "light" ? "rgb(33 37 41)" : "#f8f9fa",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-2"
          id="toUpper"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          id="toUpper"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={removeExtraSpaces}>
          Remove whitespaces
        </button>
        <button className="btn btn-danger" onClick={clearText}>
          Reset
        </button>
      </div>

      <div className="container my-2">
        <h1 style={headingStyle}>Summary</h1>
        <p style={textStyle}>Words : {countWords()}</p>
        <p style={textStyle}>Characters : {text.length}</p>
        <p style={textStyle}>
          Avg reading time (130wpm) : <span id="readTime">{readTime()}</span>
        </p>
      </div>
      <div className="container my-2">
        <h1 style={headingStyle}>Preview</h1>
        <p style={textStyle}>{text}</p>
      </div>
    </>
  );
}
