import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const MovingThreeCharacters = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='movingCharacter'
                value={props.movingCharacterValue}
                onChange={(e) => props.setMovingCharacterValue(e.target.value)}
            />
            <PureButton
                onClick={props.onMovingCharacterHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.movingCharacterResult}</p>
        </QuestionLayout>
    )
}

export default MovingThreeCharacters;
