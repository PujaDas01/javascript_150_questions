import React from 'react'
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const ReplaceToEnglishAlphabet = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='replaceAlphabet'
            placeholder='Enter word'
            labelText='Enter Word'
            value={props.replaceAlphabetValue}
            onChange={(e) => props.setReplaceAlphabetValue(e.target.value)}
        />
        <PureButton
            onClick={props.onEnglishAlphabetHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {props.replaceToEnglishAlphabetResult}</p>
    </QuestionLayout>
  )
}

export default ReplaceToEnglishAlphabet;
