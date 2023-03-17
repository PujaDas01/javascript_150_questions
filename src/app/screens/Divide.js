import React from "react";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";
import QuestionLayout from "../component/QuestionLayout";

const Divide = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                labelText='Enter First Number:'
                placeholder='Enter number'
                inputId='firDiv'
                value={props.divisionFirstValue}
                onChange={(e) => props.setDivisionFirstValue(e.target.value)}
            />
            <PureInput
                labelText='Enter Second Number:'
                placeholder='Enter number'
                inputId='secDiv'
                value={props.divisionSecondValue}
                onChange={(e) => props.setDivisionSecondValue(e.target.value)}
            />
            <PureButton
                onClick={props.onDivisionHandler}
                buttonText='Submit'
            />
            <p className="resultText">RESULT: {props.divisionOutput}</p>
        </QuestionLayout>
    )
}

export default Divide;
