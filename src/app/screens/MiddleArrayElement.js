import React from 'react'
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const MiddleArrayElement = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
          inputId='firstArrayInput'
          placeholder='Enter numbers'
          labelText='Enter Numbers'
          value={props.firstArrayValue}
          onChange={(e) => props.setFirstArrayValue(e.target.value)}
        />
        <PureInput
          inputId='secondArrayInput'
          placeholder='Enter numbers'
          labelText='Enter Numbers'
          value={props.secondArrayValue}
          onChange={(e) => props.setSecondArrayValue(e.target.value)}
        />
        <PureButton
          onClick={props.onMiddleArrayValueHandler}
          buttonText='Submit'
        />
        <p className='resultText'>Output: [ {props.middleValueResult} ]</p>
    </QuestionLayout>
  )
}

export default MiddleArrayElement;
