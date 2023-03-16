import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const ContainingPndT = (props) => {
    return(
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
            <PureInput
                labelText='Enter Word'
                placeholder='Enter word'
                value={props.checkAlphabetValue}
                onChange={(e) => props.setCheckAlphabetValue(e.target.value)}
            />
            <PureButton
                buttonText='Check'
                onClick={props.onCheckEqualAlphabetHandler}
            />
            <p className='resultText'>Output: {props.checkAlphabetResult}</p>
        </QuestionLayout>
    )
}

export default ContainingPndT;