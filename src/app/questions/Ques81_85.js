import React, { useState } from 'react';
import AddTwoPositiveIntegers from '../screens/AddTwoPositiveIntegers';
import { quesData } from '../services/quesData';
import AddWithoutCarry from '../screens/AddWithoutCarry';
import LongestString from '../screens/LongestString';

const Ques81_85 = () => {
    const [positiveIntegersValue, setPositiveIntegersValue] = useState('');
    const [positiveIntegersAddResult, setPositiveIntegersAddResult] = useState('');
    const [addWithoutCarryValue, setAddWithoutCarryValue] = useState('');
    const [addWithoutCarryResult, setAddWithoutCarryResult] = useState('');
    const [longestStringValue, setLongestStringValue] = useState('');
    const [longestStringResult, setLongestStringResult] = useState('');

    const onAddPositiveIntegersHandler = () => {
        let value = positiveIntegersValue.trim();
        if(!value || value.length < 3) {
            alert('Enter the value');
            return
        }
        let splitValue = value.split(',');
        for(let i = 0; i < splitValue.length; i++) {
            if(splitValue[i] === '' || isNaN(splitValue[i]) ) {
                alert('Value must be a number.');
                return
            }
        }
        let parseIntValue = splitValue.map((item) => parseInt(item));
        if(value.includes('-')) {
            alert('Negative numbers are not allowed.')
        } else if((parseIntValue.length < 2) || (parseIntValue.length > 2)) {
            alert('Value length must be 2.');
        } else {
            let sum = 0;
            parseIntValue.forEach((num) => sum = sum + num);
            setPositiveIntegersAddResult(sum);
        }
    }

    const onAddWithoutCarryHandler = () => {
        // Need to see later on
        alert('carry button clicked');

    }

    const onLongestStringHandler = () => {
        let splitArr = longestStringValue.split(',');
        for(let i = 0; i < splitArr.length; i++) {
            if(!isNaN(splitArr[i]) || splitArr[i].trim() === '') {
                alert('You cannot enter a number or leave the element blank.');
                return;
            }
        };
        let largeValue = splitArr.reduce((acc, cur) => acc.trim().length > cur.trim().length ? acc : cur);
        let filterArr = splitArr.filter((elem) => largeValue.trim().length === elem.trim().length);
        if(longestStringValue.trim() === '') {
            alert('Fill the input.');
        } else {
            filterArr.length === 1 ? setLongestStringResult(largeValue) : setLongestStringResult(filterArr.toString());
        }
    }

  return (
    <div className='questionContainer'>
            <AddTwoPositiveIntegers
                question={quesData[35]}
                positiveIntegersValue={positiveIntegersValue}
                setPositiveIntegersValue={(val) => setPositiveIntegersValue(val)}
                onAddPositiveIntegersHandler={onAddPositiveIntegersHandler}
                positiveIntegersAddResult={positiveIntegersAddResult}
            />
            <AddWithoutCarry
                question={quesData[36]}
                addWithoutCarryValue={addWithoutCarryValue}
                setAddWithoutCarryValue={((val) => setAddWithoutCarryValue(val))}
                onAddWithoutCarryHandler={onAddWithoutCarryHandler}
                addWithoutCarryResult={addWithoutCarryResult}
            />
            <LongestString
                question={quesData[37]}
                longestStringValue={longestStringValue}
                setLongestStringValue={(val) => setLongestStringValue(val)}
                onLongestStringHandler={onLongestStringHandler}
                longestStringResult={longestStringResult}
            />
    </div>
  )
}

export default Ques81_85;
