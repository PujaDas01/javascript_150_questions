import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const HalfExtractedString = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                placeholder='Enter word'
                labelText='Enter Word'
                inputId='halfStringExtracted'
                value={props.halfStringExtractedValue}
                onChange={(e) => props.setHalfStringExtractedValue(e.target.value)}
            />
            <PureButton
                onClick={props.onHalfStringExtractedHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.halfStringExtractedResult}</p>
        </QuestionLayout>
    )
}

export default HalfExtractedString;
