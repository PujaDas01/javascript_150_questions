import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const EqualArrayElement = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='checkEqualArrayElement'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.equalArrayElementValue}
            onChange={(e) => props.setEqualArrayElementValue(e.target.value)}
        />
        <PureButton
            onClick={props.onCheckEqualArrayHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {(props.checkEqualArrayElementResult != null) && (props.checkEqualArrayElementResult === true ? 'True' : 'False')}</p>
    </QuestionLayout>
  )
}

export default EqualArrayElement;