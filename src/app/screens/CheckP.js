import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const CheckP = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                inputId='checkStartEndP'
                placeholder='Enter word'
                labelText='Enter Word'
                value={props.checkStartEndPValue}
                onChange={(e) => props.setCheckStartEndPValue(e.target.value)}
            />
            <PureButton
                onClick={props.onCheckStartEndPHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.checkStartEndPResult}</p>
        </QuestionLayout>
    )
}

export default CheckP;
