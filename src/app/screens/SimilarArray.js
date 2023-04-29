import React from 'react';
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const SimilarArray = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
        />
        <PureButton
        />
    </QuestionLayout>
  )
}

export default SimilarArray;
