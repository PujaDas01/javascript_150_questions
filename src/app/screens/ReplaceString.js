import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const ReplaceString = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                inputId='replaceText'
                placeholder='Enter word'
                value={props.replaceValue}
                onChange={(e) => props.setReplaceValue(e.target.value)}
            />
            <PureButton
                onClick={props.onReplaceStringHandler}
                buttonText='Replace'
            />
            <p className="resultText">Output: {props.replaceValueResult}</p>
        </QuestionLayout>
    )
}

export default ReplaceString;