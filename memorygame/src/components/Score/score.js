import React from "react";
import "./style.css"

Score = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <h2>Matches: <span id="score"></span></h2>
            <h2 className="mx-5">Wins: <span id="wins"></span></h2>
        </div>
    )
}

export default Score