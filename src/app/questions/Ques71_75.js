import React, { useState } from 'react';
import ArrayPosition from '../screens/ArrayPosition';
import EqualArrayElement from '../screens/EqualArrayElement';
import { quesData } from '../services/quesData';

const Ques71_75 = () => {
    const [check1ArrayValue, setCheck1ArrayValue] = useState('');
    const [check1ArrayResult, setCheck1ArrayResult] = useState(null);
    const [equalArrayElementValue, setEqualArrayElementValue] = useState('');
    const [checkEqualArrayElementResult, setCheckEqualArrayElementResult] = useState(null);

    const onCheck1ArrayHandler = () => {
      let value = check1ArrayValue.trim(); 
      let splitArr = value.split(',');
      if(!value) {
        alert('Fill the input');
      } else if(splitArr.length < 2) {
          alert('Number length must be greater than or equal to 2.', splitArr.length);
      } else if(((value.charAt(0) === '1') || (value.charAt(value.length-1) === '1')) || ((value.charAt(0) === '1') && (value.charAt(value.length-1) === '1'))) {
        setCheck1ArrayResult(true);
      } else {
        setCheck1ArrayResult(false);
      }
    }

    const onCheckEqualArrayHandler = () => {
      let value = equalArrayElementValue.trim();
      let splitValue = value.split(',');
      if(!value) {
        alert('Fill the input.');
      } else if((splitValue.length < 3) || (splitValue.length > 3)) {
        alert('Value length must be 3.');
      } else if((splitValue.length === 3)) {
        if(splitValue[0] === splitValue[2]) {
          setCheckEqualArrayElementResult(true);
        } else {
          setCheckEqualArrayElementResult(false);
        }
      }
    }

  return (
    <div className='questionContainer'>
        <ArrayPosition
            question={quesData[25]}
            check1ArrayValue={check1ArrayValue}
            setCheck1ArrayValue={(val) => setCheck1ArrayValue(val)}
            onCheck1ArrayHandler={onCheck1ArrayHandler}
            check1ArrayResult={check1ArrayResult}
        />
        <EqualArrayElement
            question={quesData[26]}
            equalArrayElementValue={equalArrayElementValue}
            setEqualArrayElementValue={(val) => setEqualArrayElementValue(val)}
            onCheckEqualArrayHandler={onCheckEqualArrayHandler}
            checkEqualArrayElementResult={checkEqualArrayElementResult}
        />
    </div>
  )
}

export default Ques71_75;