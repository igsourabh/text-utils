import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Crs(props) {
  const handleupclick = () => {
    console.log(text);
    let NewText = text.toUpperCase();
    setText(NewText);
  };

  const handlelowclick = () => {
    console.log(text);
    let NewText = text.toLowerCase();
    setText(NewText);
  };

  const handlechange = (event) => {
    console.log("handle change ");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter the text here"); // its a global text value

  return (
    <>
      <div>
        <div className="container">
          <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {props.title}
          </h1>
          <div className="mb-3">
            <label for="myBox" className="form-label"></label>
            <textarea
              className="form-control"
              value={text}
              onChange={handlechange}
              style={{
                backgroundColor: props.mode === "dark" ? "#404040" : "white",
              color: props.mode === "dark" ? "white" : "black" }}
              id="myBox"
              rows="8"
            ></textarea>
            <br />
            <buttton
              className={`btn btn-primary ${props.state} mx-1`}
              onClick={handleupclick}
            >
              Convert to upper case
            </buttton>
            <buttton
              className={`btn btn-primary ${props.state} mx-1`}
              onClick={handlelowclick}
            >
              Convert to lowercase case
            </buttton>
          </div>
          <div
            className="conatiner"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <h2>Preview</h2>
            <p>{text}</p>
            <hr />
            <p>
              total {text.split(" ").length}words and total{text.length}{" "}
              character
            </p>
            <p>{0.005 * text.split(" ").length} reading spped</p>
          </div>
        </div>
      </div>
    </>
  );
}

Crs.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};
