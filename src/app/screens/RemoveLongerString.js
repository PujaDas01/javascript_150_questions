import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const RemoveLongerString = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='checkStringValue1'
                value={props.checkStringValue1}
                onChange={(e) => props.setCheckStringValue1(e.target.value)}
            />
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='checkStringValue2'
                value={props.checkStringValue2}
                onChange={(e) => props.setCheckStringValue2(e.target.value)}
            />
            <PureButton
                onClick={props.onRemoveLongerStringHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.removeLongerStringResult}</p>
        </QuestionLayout>
    )
}

export default RemoveLongerString;
