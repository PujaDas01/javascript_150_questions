import React, { useState } from 'react'
import CheckP from '../screens/CheckP';
import CreatingNewString from '../screens/CreatingNewString';
import DisplayCityName from '../screens/DisplayCityName'
import { quesData } from '../services/quesData'

const Ques66_70 = () => {

  const [cityNameValue, setCityNameValue] = useState('');
  const [cityNameResult, setCityNameResult] = useState('');
  const [checkStartEndPValue, setCheckStartEndPValue] = useState('');
  const [checkStartEndPResult, setCheckStartEndPResult] = useState('');
  const [creatingNewStringValue, setCreatingNewStringValue] = useState('');
  const [creatingNewStringResult, setCreatingNewStringResult] = useState('');
  const [nValue, setNValue] = useState('');

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
    } else if((valueStartChar === 'p') || (valueLastChar === 'p')) {
      setCheckStartEndPResult(removingStartEndChar);
    } else {
      setCheckStartEndPResult(value);
    }
  }

  const onCreatingNewStringHandler = () => {
    let value = creatingNewStringValue.trim();
    let numValue = nValue.trim();
    let number = Number(Math.trunc(numValue));
    let first_part = value.substring(0, number);
    let last_part = value.substring(value.length - number); 
    let joiningPart = first_part + last_part;
    if((value === '') || (numValue === '')) {
      alert('Fill the input(s).');
    } else if(isNaN(number)) {
      alert('Please enter a number.');
    } else if(number === 0) {
      alert('Please enter a number greater than 0');
    } else if (value.length < number) {
      alert('String length must be greater or equal to the number.');
    } else if (value.length >= number) {
      setCreatingNewStringResult(joiningPart);
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
      <CreatingNewString
        question={quesData[22]}
        creatingNewStringValue={creatingNewStringValue}
        setCreatingNewStringValue={(val) => setCreatingNewStringValue(val)}
        nValue={nValue}
        setNValue={(val) => setNValue(val)}
        onCreatingNewString={onCreatingNewStringHandler}
        creatingNewStringResult={creatingNewStringResult}
      />
    </div>
  )
}

export default Ques66_70;
