import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const AddWithoutCarry = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            inputId='addWithoutCarry'
            labelText='Enter Number'
            placeholder='Enter number'
            value={props.addWithoutCarryValue}
            onChange={(e) => props.setAddWithoutCarryValue(e.target.value)}
        />
        <PureButton
            onClick={props.onAddWithoutCarryHandler}
            buttonText='Add'
        />
        <p className='resultText'>Output: {props.addWithoutCarryResult}</p>
    </QuestionLayout>
  )
}

export default AddWithoutCarry;
