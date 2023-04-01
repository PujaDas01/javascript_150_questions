import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const CheckArrayElement = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='checkArrayElement'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.checkArrayElementValue}
            onChange={(e) => props.setCheckArrayElementValue(e.target.value)}
        />
        <PureButton
            onClick={props.onCheckArrayElementHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {(props.arrayElementResult != null) && (props.arrayElementResult === true ? 'True' : 'False')}</p>
    </QuestionLayout>
  )
}

export default CheckArrayElement;
