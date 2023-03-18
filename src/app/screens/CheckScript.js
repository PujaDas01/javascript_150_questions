import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const CheckScript = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='checkScript'
                value={props.checkScriptValue}
                onChange={(e) => props.setCheckScriptValue(e.target.value)}
            />
            <PureButton
                onClick={props.onCheckScriptHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.checkScriptResult}</p>
        </QuestionLayout>
    )
}

export default CheckScript;
