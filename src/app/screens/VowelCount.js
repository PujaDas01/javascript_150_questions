import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const VowelCount = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                inputId='vowelCount'
                placeholder='Enter word'
                labelText='Enter Word'
                value={props.vowelCountValue}
                onChange={(e) => props.setVowelCountValue(e.target.value)}
            />
            <PureButton
                onClick={props.onVowelCountHandler}
                buttonText='Submit'
            />
            <p className="resultText">Result: {props.vowelCountResult}</p>
        </QuestionLayout>
    )
}

export default VowelCount;