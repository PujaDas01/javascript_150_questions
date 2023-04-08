import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const AddTwoPositiveIntegers = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='positiveInteger'
            labelText='Enter Number'
            placeholder='Enter number'
            value={props.positiveIntegersValue}
            onChange={(e) => props.setPositiveIntegersValue(e.target.value)}
        />
        <PureButton
            onClick={props.onAddPositiveIntegersHandler}
            buttonText='Add'
        />
        <p className='resultText'>Output: {props.positiveIntegersAddResult}</p>
    </QuestionLayout>
  )
}

export default AddTwoPositiveIntegers;
