import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const RemovingFirstLastCharacter = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='firstLastExtracted'
                value={props.firstLastExtractedValue}
                onChange={(e) => props.setFirstLastExtractedValue(e.target.value)}
            />
            <PureButton
                onClick={props.onFirstLastExtractedHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.firstLastExtractedResult}</p>
        </QuestionLayout>
    )
}

export default RemovingFirstLastCharacter;
