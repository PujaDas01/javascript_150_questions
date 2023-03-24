import React, { useEffect, useState } from 'react'
import CheckP from '../screens/CheckP';
import ComputeSumOfArray from '../screens/ComputeSumOfArray';
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
  const [insertArrayValue, setInsertArrayValue] = useState(''); 
  const [takeArrayValue, setTakeArrayValue] = useState('');
  const [arraySumResult, setArraySumResult] = useState('');
  const [numberEntered, setNumberEntered] = useState('');
  const [numberArray, setNumberArray] = useState([]);
  const [arrayResult, setArrayResult] = useState('');

  useEffect(() => {
    if(numberArray.length === 3) {
      let sum = 0;
      numberArray.forEach((elem) => sum = sum + elem);
      setArrayResult(sum);
      setNumberArray([]);
    }
  }, [numberArray])

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

  const onsubmitNumHandler = () => {
    let value = insertArrayValue.trim();
    let splitValue = value.split(',');
    if(value === '') {
      alert('Please fill the input.');
    } else if(splitValue.length < 3) {
      alert('Entered value length is less than 3, please enter a value of length 3.');
    } else if(splitValue.length > 3) {
      alert('Entered value length is greater than 3, please enter a value of length 3.');
    } else if(splitValue.length === 3) {
        for(let i = 0; i < splitValue.length; i++) {
          if(splitValue[i] === '') {
            alert('Please enter proper number followed by comma.');
          } else if(isNaN(splitValue[i])) {
            alert('Please enter a number to get the addition result.');
          } else {
            let val1 = Number(splitValue[0]);
            let val2 = Number(splitValue[1]);
            let val3 = Number(splitValue[2]);
            let finalData = `${val1} + ${val2} + ${val3}`
            return setTakeArrayValue(finalData);
          }
        }
    }
  }

  const onArraySumHandler = () => {
    let numValue = takeArrayValue.split('+');
    console.log('numValue', numValue);
    let sum = 0;
    for(let i = 0; i < numValue.length; i++) {
      let number = Number(numValue[i])
      sum = sum + number;
    }    
    setArraySumResult(sum);
  }

  const onArrayHandler = () => {
    if(!isNaN(numberEntered)) {
      let char = Number(numberEntered);
      setNumberArray([...numberArray, char]);
      setNumberEntered('');
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
      <ComputeSumOfArray
        question={quesData[23]}
        insertArrayValue={insertArrayValue}
        setInsertArrayValue={(val) => setInsertArrayValue(val)}
        takeArrayValue={takeArrayValue}
        onsubmitNumHandler={onsubmitNumHandler}
        onArraySumHandler={onArraySumHandler}
        arraySumResult={arraySumResult}
      />
      <ComputeSumOfArray
        question={quesData[23]}
        numberEntered={numberEntered}
        numberArray={numberArray}
        setNumberEntered={(val) => setNumberEntered(val)}
        onArrayHandler={onArrayHandler}
        arrayResult={arrayResult}
      />
    </div>
  )
}

export default Ques66_70;
