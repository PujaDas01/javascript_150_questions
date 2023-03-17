import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const ConcatenateStrings = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter first word'
                labelText='Enter First Word'
                inputId='concatenateString1'
                value={props.concatenateValue1}
                onChange={(e) => props.setConcatenateValue1(e.target.value)}
            />
            <PureInput
                placeholder='Enter second word'
                labelText='Enter Second Word'
                inputId='concatenateString2'
                value={props.concatenateValue2}
                onChange={(e) => props.setConcatenateValue2(e.target.value)}
            />
            <PureButton
                onClick={props.onConcatenateStringsHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.concatenateStringsResult}</p>
        </QuestionLayout>
    )
}

export default ConcatenateStrings;
