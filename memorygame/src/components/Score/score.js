import React from "react";
import "./style.css"

Score = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <h2>{props.children}<span id="score"></span></h2>
            <h2 className="mx-5">{props.children}<span id="wins"></span></h2>
        </div>
    )
}

export default Score