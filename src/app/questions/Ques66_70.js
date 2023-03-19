import React, { useState } from 'react'
import DisplayCityName from '../screens/DisplayCityName'
import { quesData } from '../services/quesData'

const Ques66_70 = () => {

  const [cityNameValue, setCityNameValue] = useState('');
  const [cityNameResult, setCityNameResult] = useState('');

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

  return (
    <div className="questionContainer">
      <DisplayCityName
        question={quesData[20]}
        cityNameValue={cityNameValue}
        setCityNameValue={(val) => setCityNameValue(val)}
        onDisplayCityNameHandler={onDisplayCityNameHandler}
        cityNameResult={cityNameResult}
      />
    </div>
  )
}

export default Ques66_70;
