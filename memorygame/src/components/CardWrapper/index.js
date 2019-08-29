import React from "react";
import "./styleCardWrapper.css"

CardWrapper = (props) => {
    return (
        <div className="container my-3 border">
            <div className="row col-12-md">
                <div className="d-flex justify-content-between card-rows">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CardWrapper
