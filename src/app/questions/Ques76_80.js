import React, { useState } from 'react'
import FirstLastArrayElement from '../screens/FirstLastArrayElement';
import { quesData } from '../services/quesData';
import CheckArrayElement from '../screens/CheckArrayElement';
import CheckArrayValue from '../screens/CheckArrayValue';
import CheckArrayContains from '../screens/CheckArrayContains';

const Ques76_80 = () => {

    const [firstLastArrayValue, setFirstLastArrayValue] = useState('');
    const [firstLastArrayResult, setFirstLastArrayResult] = useState([]);
    const [checkArrayElementValue, setCheckArrayElementValue] = useState('');
    const [arrayElementResult, setCheckArrayElementResult] = useState(null);
    const [checkArrayValue, setCheckArrayValue] = useState('');
    const [arrayElementValueResult, setArrayElementValueResult] = useState(null);
    const [checkArrayContainsValue, setCheckArrayContainsValue] = useState('');
    const [arrayContainsResult, setArrayContainsResult] = useState(null);

    const onFirstLastArrayValueHandler = () => {
        let value = firstLastArrayValue.trim();
        let splitArr = value.split(',');
        let filterArr = splitArr.filter((val) => val !== '');
        if(!value) {
            alert('Fill the input.');
        } else if(filterArr.length < 1) {
            alert('Enter a proper value.');
        } else if (filterArr.length >= 1) {
            let newArray = [splitArr[0], splitArr[splitArr.length-1]];
            setFirstLastArrayResult(newArray);
        }
    }

    const onCheckArrayElementHandler = () => {
        let value = checkArrayElementValue.trim();
        let splitArr = value.split(',');
        if(!value) {
            alert('Fill the input.');
        } else if((splitArr.length < 2) || splitArr.length > 2) {
            alert('Value length must be 2.')
        } else if((splitArr.length === 2) && ((splitArr.includes('1')) || (splitArr.includes('3')))) {
            setCheckArrayElementResult(true);
        } else {
            setCheckArrayElementResult(false);
        }
    }

    const onCheckArrayValueHandler = () => {
        let value = checkArrayValue.trim();
        let splitArr = value.split(',');
        if(!value) {
            alert('Fill the input.');
        } else if((splitArr.length < 2) || splitArr.length > 2) {
            alert('Value length must be 2.')
        } else if((splitArr.length === 2) && ((splitArr.includes('1')) || (splitArr.includes('3')))) {
            setArrayElementValueResult(false);
        } else {
            setArrayElementValueResult(true);
        }
    }

    const onCheckArrayContainsHandler = () => {
        let value = checkArrayContainsValue.trim();
        let splitArr = value.split(',');
        let check30 = splitArr.filter((num) => num === '30').length;
        let check40 = splitArr.filter((num) => num === '40').length;
        if(!value) {
            alert('Fill the input.');
        } else if((splitArr.length < 3) || (splitArr.length > 3)) {
            alert('Value length must be 3');
        } else if ((splitArr.length === 3) && ((check30 === 2) || (check40 === 2))) {
            setArrayContainsResult(true);
        } else {
            setArrayContainsResult(false);
        }
    }

  return (
    <div className='questionContainer'>
        <FirstLastArrayElement
            question={quesData[30]}
            firstLastArrayValue={firstLastArrayValue}
            setFirstLastArrayValue={(val) => setFirstLastArrayValue(val)}
            onFirstLastArrayValueHandler={onFirstLastArrayValueHandler}
            firstLastArrayResult={firstLastArrayResult}
        />
        <CheckArrayElement
            question={quesData[31]}
            checkArrayElementValue={checkArrayElementValue}
            setCheckArrayElementValue={(val) => setCheckArrayElementValue(val)}
            onCheckArrayElementHandler={onCheckArrayElementHandler}
            arrayElementResult={arrayElementResult}
        />
        <CheckArrayValue
            question={quesData[32]}
            checkArrayValue={checkArrayValue}
            setCheckArrayValue={(val) => setCheckArrayValue(val)}
            onCheckArrayValueHandler={onCheckArrayValueHandler}
            arrayElementValueResult={arrayElementValueResult}
        />
        <CheckArrayContains
            question={quesData[33]}
            checkArrayContainsValue={checkArrayContainsValue}
            setCheckArrayContainsValue={(val) => setCheckArrayContainsValue(val)}
            onCheckArrayContainsHandler={onCheckArrayContainsHandler}
            arrayContainsResult={arrayContainsResult}
        />
    </div>
  )
}

export default Ques76_80;
