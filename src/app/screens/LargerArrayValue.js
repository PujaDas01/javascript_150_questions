import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const LargerArrayValue = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='largerArrayValue'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.largerArrayValue}
            onChange={(e) => props.setLargerArrayValue(e.target.value)}
        />
        <PureButton
            onClick={props.onLargerArrayValueHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: [ {props.largerArrayResult} ]</p>
    </QuestionLayout>
  )
}

export default LargerArrayValue;
