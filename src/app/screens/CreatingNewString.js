import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const CreatingNewString = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                inputId='creatingNewString'
                placeholder='Enter word'
                labelText='Enter Word'
                value={props.creatingNewStringValue}
                onChange={(e) => props.setCreatingNewStringValue(e.target.value)}
            />
            <PureInput
                inputId='nValue'
                placeholder='Enter number'
                labelText='Enter Number'
                value={props.nValue}
                onChange={(e) => props.setNValue(e.target.value)}
            />
            <PureButton
                onClick={props.onCreatingNewString}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.creatingNewStringResult}</p>
        </QuestionLayout>
    )
}

export default CreatingNewString;
