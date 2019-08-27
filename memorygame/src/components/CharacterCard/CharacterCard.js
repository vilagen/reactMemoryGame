import React from "react";
import "./style.css"

CharacterCard = (props) => {
    return (
        <div className="card friends" data-id={props.name}>
            <img className="card-img-top characterPic" src={props.pic} alt={props.altPic} />
        </div>
    )
}

export default CharacterCard