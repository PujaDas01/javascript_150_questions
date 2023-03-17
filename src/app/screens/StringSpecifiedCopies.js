import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const StringSpecifiedCopies = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='specifiedString'
                value={props.specifiedStringValue}
                onChange={(e) => props.setSpecifiedStringValue(e.target.value)}
            />
            <PureInput
                placeholder='Enter number'
                labelText='Enter Number'
                inputId='repeatStringValue'
                value={props.repeatStringValue}
                onChange={(e) => props.setRepeatStringValue(e.target.value)}
            />
            <PureButton 
                buttonText='Submit' 
                onClick={props.onSpecifiedStringHandler}
            />
            <p className="resultText">Output: {props.specifiedStringResult}</p>
        </QuestionLayout>
    )
}

export default StringSpecifiedCopies;
