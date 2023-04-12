import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const LongestString = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='longestString'
            labelText='Enter Word'
            placeholder='Enter word'
            value={props.longestStringValue}
            onChange={(e) => props.setLongestStringValue(e.target.value)}
        />
        <PureButton
            onClick={props.onLongestStringHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {props.longestStringResult}</p>
    </QuestionLayout>
  )
}

export default LongestString;
