import React from 'react'
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const RotateArray = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
          inputId='rotateArray'
          placeholder='Enter number'
          labelText='Enter Number'
          value={props.rotateArrayValue}
          onChange={(e) => props.setRotateArrayValue(e.target.value)}
        />
        <PureButton
            buttonText='Submit'
            onClick={props.onRotateArrayHandler}
        />
        <p className='resultText'>Output: [ {props.rotateArrayResult?.toString()} ]</p>
    </QuestionLayout>
  )
}

export default RotateArray;
