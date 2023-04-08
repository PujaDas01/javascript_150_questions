import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const SwapArrayElements = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                inputId='swapElement'
                placeholder='Enter number'
                labelText='Enter Number'
                value={props.swapElementValue}
                onChange={(e) => props.setSwapElementValue(e.target.value)}
            />
            <PureButton
                onClick={props.onSwapElementHandler}
                buttonText='Submit'
            />
            <p className='resultText'>Output: [ {props.swapElementResult} ]</p>
        </QuestionLayout>
    )
}

export default SwapArrayElements;
