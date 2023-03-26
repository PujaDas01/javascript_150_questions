import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';


const ArrayPosition = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='check1Array'
            placeholder='Enter number'
            labelText='Enter Number'
            value={props.check1ArrayValue}
            onChange={(e) => props.setCheck1ArrayValue(e.target.value)}
        />
        <PureButton
            buttonText='Submit'
            onClick={props.onCheck1ArrayHandler}
        />
        <p className='resultText'>Output: {(props.check1ArrayResult != null) && (props.check1ArrayResult === true ? 'True' : 'False')}</p>
    </QuestionLayout>
  )
}

export default ArrayPosition;
