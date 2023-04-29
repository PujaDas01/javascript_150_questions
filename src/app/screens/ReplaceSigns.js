import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const ReplaceSigns = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='replaceSigns'
            labelText='Enter Number'
            placeholder='Enter Number'
            value={props.replaceSignValue}
            onChange={(e) => props.setReplaceSignValue(e.target.value)}
        />
        <PureButton
            onClick={props.replaceSignHandler}
            buttonText='Replace Sign'
        />
        <p className='resultText'>Output: {(props.replaceSignResult !== null) && (props.replaceSignResult === true ? 'true' : 'False')}</p>
    </QuestionLayout>
  )
}

export default ReplaceSigns;