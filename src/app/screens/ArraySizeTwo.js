import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const ArraySizeTwo = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
          labelText='Enter Number'
          placeholder='Enter number'
          inputId='arrayPositiveInteger'
          value={props.positiveArrayValue}
          onChange={(e) => props.setPositiveArrayValue(e.target.value)}
        />
        <PureButton
          onClick={props.getTwoArrayHandler}
          buttonText='Final Array'
        />
        <p className='resultText'>[ {props.evenIndexArray.toString()} ] [ {props.oddIndexArray.toString()} ]</p>
        <PureButton
          onClick={props.twoArraySumHandler}
          buttonText='Add'
        />
        <p className='resultText'>Output: [ {props.evenIndexArraySumResult} ] [ {props.oddIndexArraySumResult} ]</p>     
    </QuestionLayout>
  )
}

export default ArraySizeTwo;
