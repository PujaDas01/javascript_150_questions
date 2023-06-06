import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const GreatestArrayElement = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='greatestArrayElement'
            labelText='Enter Number'
            placeholder='Enter Number'
            value={props.greatestArrayElement}
            onChange={(e) => props.setGreatestArrayElement(e.target.value)}
        />
        <PureButton
            onClick={props.greatestArrayElementHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {props.greatestArrayElementResult}</p>
    </QuestionLayout>
  )
}

export default GreatestArrayElement;