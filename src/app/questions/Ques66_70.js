import React, { useState } from 'react'
import CheckP from '../screens/CheckP';
import DisplayCityName from '../screens/DisplayCityName'
import { quesData } from '../services/quesData'

const Ques66_70 = () => {

  const [cityNameValue, setCityNameValue] = useState('');
  const [cityNameResult, setCityNameResult] = useState('');
  const [checkStartEndPValue, setCheckStartEndPValue] = useState('');
  const [checkStartEndPResult, setCheckStartEndPResult] = useState('');

  const onDisplayCityNameHandler = () => {
    let value = cityNameValue.trim();
    let startThreeCharValue = value.toLowerCase().substring(0, 3);
    if(value === '') {
      alert('Fill the input.');
    } else if(value.length < 3) {
      alert('Value length must be more than or equal to 3.');
    } else if((startThreeCharValue === 'los') || (startThreeCharValue === 'new')) {
      setCityNameResult(value);
    } else {
      setCityNameResult('');
    }
  }

  const onCheckStartEndPHandler = () => {
    let value = checkStartEndPValue.trim();
    let valueStartChar = value.toLowerCase().charAt(0);
    let valueLastChar = value.toLowerCase().charAt(value.length-1);
    let removingStartEndChar = value.substring(1, value.length-1);
    if(value === '') {
      alert('Fill the input.');
    } else if(value.length < 3) {
      alert('Value must be greater than or equal to 3.');
    } else if((valueStartChar === 'p') || (valueLastChar === 'p')){
      setCheckStartEndPResult(removingStartEndChar);
    } else {
      setCheckStartEndPResult(value);
    }
  }

  return (
    <div className="questionContainer">
      <DisplayCityName
        question={quesData[20]}
        cityNameValue={cityNameValue}
        setCityNameValue={(val) => setCityNameValue(val)}
        onDisplayCityNameHandler={onDisplayCityNameHandler}
        cityNameResult={cityNameResult}
      />
      <CheckP
        question={quesData[21]}
        checkStartEndPValue={checkStartEndPValue}
        setCheckStartEndPValue={(val) => setCheckStartEndPValue(val)}
        onCheckStartEndPHandler={onCheckStartEndPHandler}
        checkStartEndPResult={checkStartEndPResult}
      />
    </div>
  )
}

export default Ques66_70;
