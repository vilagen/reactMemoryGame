import React from "react";
import "./styleScore.css";

function Score(props){
    return (
        <div className="d-flex justify-content-center">
            <h2>Matches: <span id="matches">{props.matches}</span></h2>
            <h2 className="mx-5">Wins: <span id="wins">{props.wins}</span></h2>
        </div>
    )
}


export default Score