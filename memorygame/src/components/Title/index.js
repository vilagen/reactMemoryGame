import React from "react";
import "./styleTitle.css"

function Title(props) {
    return <h1 className="text-center" id="title">{props.children}</h1>
}

export default Title