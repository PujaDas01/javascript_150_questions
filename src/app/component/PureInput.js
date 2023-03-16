import React from "react";

const PureInput = (props) => {
    return(
        <div className='inputWrapper'>
            <label 
                className="label"
                style={props.labelStyle}
                htmlFor={props.inputId}
            >{props.labelText}</label>
            <input 
                className="input"
                style={props.inputStyle}
                id={props.inputId}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default PureInput;