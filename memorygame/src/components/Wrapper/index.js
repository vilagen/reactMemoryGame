import React from "react";
import "./wrapper.css";

function Wrapper(props) {
  return <body className="wrapper">{props.children}</body>;
}

export default Wrapper;
