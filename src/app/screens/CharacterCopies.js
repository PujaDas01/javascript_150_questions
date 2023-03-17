import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const CharacterCopies = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='copyThreeCharacter'
                value={props.characterValue}
                onChange={(e) => props.setCharacterValue(e.target.value)}
            />
            <PureButton
                onClick={props.onCharacterHandler}
                buttonText='Submit'
            />
            <p className="resultText">4 copies of the last 3 characters of a given original string is: {props.characterResult}</p>
        </QuestionLayout>
    )
}

export default CharacterCopies;
