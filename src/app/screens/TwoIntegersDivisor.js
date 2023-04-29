import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const TwoIntegersDivisor = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='integerDivisor'
            labelText='Enter Number'
            placeholder='Enter Number'
            value={props.divideValue}
            onChange={(e) => props.setDivideValue(e.target.value)}
        />
        <PureButton
            onClick={props.checkDivideHandler}
            buttonText='Divide Check'
        />
        <p className='resultText'>Output: {(props.divideIntegersResult !== null) && (props.divideIntegersResult === true ? 'True' : 'False')}</p>
    </QuestionLayout>
  )
}

export default TwoIntegersDivisor;
