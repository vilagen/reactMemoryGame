import React from "react";
import "./styleCard.css"


function CharacterCard(props){
    return (
        <div onClick={() => props.addToArray(props.name)} className="card friends" key={props.id} data-id={props.name}>
            <img className="card-img-top characterPic" src={props.pic} alt={props.altPic} />
        </div>
    )
}

export default CharacterCard