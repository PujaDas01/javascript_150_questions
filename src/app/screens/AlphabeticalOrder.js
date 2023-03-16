import React from "react";
import PureButton from "../component/PureButton";
import PureInput from "../component/PureInput";
import QuestionLayout from "../component/QuestionLayout";

const AlphabeticalOrder = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                labelText='Enter Word:'
                placeholder='Enter word'
                inputId='alphabeticalOrder'
                value={props.alphabeticalOrderValue}
                onChange={(e) => props.setAlphabeticalOrderValue(e.target.value)}
            />
            <PureButton
                onClick={props.onOrderHandler}
                buttonText='Submit'
            />
            <p className="resultText">Output: {props.alphabeticalOrderResult}</p>
        </QuestionLayout>
    )
}

export default AlphabeticalOrder;