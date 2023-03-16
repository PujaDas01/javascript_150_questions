import React from "react";

const PureButton = (props) => {
    return(
        <button 
            className="inputButton"
            onClick={props.onClick}
            >
                {props.buttonText}
        </button>
    )
}



export default PureButton;