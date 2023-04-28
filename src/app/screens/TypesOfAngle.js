import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const TypesOfAngle = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='findAngle'
            labelText='Enter Angle'
            placeholder='Enter number'
            value={props.angleValue}
            onChange={(e) => props.setAngleValue(e.target.value)}
        />
        <PureButton
            onClick={props.findAngleHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {props.angleResult}</p>
    </QuestionLayout>
  )
}

export default TypesOfAngle;
