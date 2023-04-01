import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const CheckArrayValue = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='checkArrayValue'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.checkArrayValue}
            onChange={(e) => props.setCheckArrayValue(e.target.value)}
        />
        <PureButton
            onClick={props.onCheckArrayValueHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {(props.arrayElementValueResult != null) && (props.arrayElementValueResult === true ? 'True' : 'False')}</p>
    </QuestionLayout>
  )
}

export default CheckArrayValue;
