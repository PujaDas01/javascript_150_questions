import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const FirstLastArrayElement = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='firstLastArrayValue'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.firstLastArrayValue}
            onChange={(e) => props.setFirstLastArrayValue(e.target.value)}
        />
        <PureButton
            onClick={props.onFirstLastArrayValueHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: [ {props.firstLastArrayResult.toString()} ]</p>
    </QuestionLayout>
  )
}

export default FirstLastArrayElement;
