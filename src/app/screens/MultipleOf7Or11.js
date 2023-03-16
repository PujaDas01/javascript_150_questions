import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const MultipleOf7Or11 = (props) => {

  return (
    <> 
      <h2 className='commonHeading'>Practice Questions</h2>
      {/* <div className='questionWrapper'>
        <h3 className='question'>{props.question.quesNo}. {props.question.ques}</h3>
          <div className='inputWrapper'>
            <label className='label' for='multiplyNum1'>Enter First Number: </label>
            <input className='input inputUniqueStyle' id='multiplyNum1' value={props.number1} onChange={(e) => props.setNumber1(e.target.value)} />
            <label className='label' for='multiplyNum2'>Enter Second Number: </label>
            <input className='input' id='multiplyNum2' value={props.number2} onChange={(e) => props.setNumber2(e.target.value)} /> <br/>
            <button className='inputButton' onClick={props.onMultiplyHandler}>Submit</button>
            <p className='resultText'>Output: {(props.multiplyOutput != null) && (props.multiplyOutput === true ? 'True' : 'False')}</p>
          </div>
      </div> */}
          
        <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques} >
          <PureInput
            placeholder='First Number'
            labelText='Enter First Number:'
            value={props.number1}
            onChange={(e) => props.setNumber1(e.target.value)}
          />
          <PureInput
            placeholder='Second Number'
            labelText='Enter Second Number:'
            value={props.number2}
            onChange={(e) => props.setNumber2(e.target.value)}
          />
          <PureButton
            buttonText='Submit'
            onClick={props.onMultiplyHandler}
          />
          <p className='resultText'>Output: {(props.multiplyOutput != null) && (props.multiplyOutput === true ? 'True' : 'False')}</p>
        </QuestionLayout>
    </>
  )
}

export default MultipleOf7Or11;


