import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const ReverseArray = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='reverseArrayElement'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.reverseArrayValue}
            onChange={(e) => props.setReverseArrayValue(e.target.value)}
        />
        <PureButton
            onClick={props.onReverseArrayHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: [ {props.reverseArrayResult} ]</p>
    </QuestionLayout>
  )
}

export default ReverseArray;
