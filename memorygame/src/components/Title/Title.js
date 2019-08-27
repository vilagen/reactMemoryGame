import React from "react";
import "./style.css"

Title = (props) => {
    return <h1 className="text-center" id="title">{props.children}</h1>
}

export default Title