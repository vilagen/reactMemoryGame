import React from "react";
import "./styleCardWrapper.css"

function CardWrapper(props) {
    return (
        <div className="my-3 border container box">
            <div className="row col-12-md">
                <div className="d-flex justify-content-between card-rows">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CardWrapper
