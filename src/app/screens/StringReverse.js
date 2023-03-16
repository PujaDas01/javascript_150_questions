import React from "react";
import QuestionLayout from "../component/QuestionLayout";
import PureInput from "../component/PureInput";
import PureButton from "../component/PureButton";

const StringReverse = (props) => {
    return(

        // Deep flattens an array
        // Example:
        // const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
        // console.log(deepFlatten([2, [4], [[6], 8], 10]));
        // Output:
        // [2, 4, 6, 8, 10]


        // <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <QuestionLayout question={props.question}>
            <PureInput
                inputId='stringReverse'
                labelText='Enter Word: '
                placeholder='Enter Word'
                value={props.reverseTextValue}
                onChange={(e) => props.setReverseTextValue(e.target.value)}
            />
            <PureButton
                onClick={props.onReverseStringHandler}
                buttonText='Reverse'
            />
            <p className="resultText">The Reversed String is: {props.reverseTextResult}</p>
        </QuestionLayout>
    )
}

export default StringReverse;