import React from 'react'
import QuestionLayout from '../component/QuestionLayout';
import PureInput from '../component/PureInput';
import PureButton from '../component/PureButton';

const DisplayCityName = (props) => {
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        <PureInput
            labelText='Enter City Name'
            placeholder='Enter city name'
            inputId='displayCityName'
            value={props.cityNameValue}
            onChange={(e) => props.setCityNameValue(e.target.value)}
        />
        <PureButton
            onClick={props.onDisplayCityNameHandler}
            buttonText='Submit'
        />
        <p className='resultText'>Output: {props.cityNameResult}</p>
    </QuestionLayout>
  )
}

export default DisplayCityName;
