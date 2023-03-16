import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const StringSeparation = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                inputId='separationString'
                labelText='Enter Word:'
                placeholder='Enter word'
                value={props.stringSeparationValue}
                onChange={(e) => props.setStringSeparationValue(e.target.value)}
            />
            <PureButton
                onClick={props.onStringSeparationHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {((props.stringSeparationResult != null) && (props.stringSeparationResult === true ? 'True' : 'False'))}</p>
        </QuestionLayout>
    )
}

export default StringSeparation;