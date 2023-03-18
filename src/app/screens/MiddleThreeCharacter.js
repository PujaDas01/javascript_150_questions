import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const MiddleThreeCharacter = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='middleThreeCharacter'
                value={props.middleThreeCharacterValue}
                onChange={(e) => props.setMiddleThreeCharacterValue(e.target.value)}
            />
            <PureButton
                onClick={props.onMiddleThreeCharacterHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.middleThreeCharacterResult}</p>
        </QuestionLayout>
    )
}

export default MiddleThreeCharacter;
