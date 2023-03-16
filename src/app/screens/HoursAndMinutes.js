import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const HoursAndMinutes = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput 
                inputId='hrMin'
                labelText='Enter Number:'
                placeholder='Enter number'
                value={props.hrMinConversionValue}
                onChange={(e) => props.setHrMinConversionValue(e.target.value)}
            />
            <PureButton
                onClick={props.onHrMinHandler}
                buttonText='Convert'
            />
            <p className="resultText">The conversion is: {props.hrAndMinConversionResult}</p>
        </QuestionLayout>
    )
}

export default HoursAndMinutes;