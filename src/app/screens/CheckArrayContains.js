import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const CheckArrayContains = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='checkArrayContains'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.checkArrayContainsValue}
            onChange={(e) => props.setCheckArrayContainsValue(e.target.value)}
        />
        <PureButton
            onClick={props.onCheckArrayContainsHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {(props.arrayContainsResult != null) && (props.arrayContainsResult === true ? 'True' : 'False')}</p>
    </QuestionLayout>
  )
}

export default CheckArrayContains;
