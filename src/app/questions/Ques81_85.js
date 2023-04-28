import React, { useState } from 'react';
import AddTwoPositiveIntegers from '../screens/AddTwoPositiveIntegers';
import { quesData } from '../services/quesData';
import AddWithoutCarry from '../screens/AddWithoutCarry';
import LongestString from '../screens/LongestString';
import ReplaceToEnglishAlphabet from '../screens/ReplaceToEnglishAlphabet';
import ArraySizeTwo from '../screens/ArraySizeTwo';

const Ques81_85 = () => {
    const [positiveIntegersValue, setPositiveIntegersValue] = useState('');
    const [positiveIntegersAddResult, setPositiveIntegersAddResult] = useState('');
    const [addWithoutCarryValue, setAddWithoutCarryValue] = useState('');
    const [addWithoutCarryResult, setAddWithoutCarryResult] = useState('');
    const [longestStringValue, setLongestStringValue] = useState('');
    const [longestStringResult, setLongestStringResult] = useState('');
    const [replaceAlphabetValue, setReplaceAlphabetValue] = useState('');
    const [replaceToEnglishAlphabetResult, setReplaceToEnglishAlphabetResult] = useState('');
    const [positiveArrayValue, setPositiveArrayValue] = useState('');
    const [evenIndexArray, setEvenIndexArray] = useState([]);
    const [oddIndexArray, setOddIndexArray] = useState([]);
    const [evenIndexArraySumResult, setEvenIndexArraySumResult] = useState([]);
    const [oddIndexArraySumResult, setOddIndexArraySumResult] = useState([]);

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

    const onEnglishAlphabetHandler = () => {
        let value = replaceAlphabetValue.trim();
        let splitValue = value.split('');
        let encryptedStr = '';
        let stringCode = '';
        for(let i = 0; i < splitValue.length; i++) {
            if(!isNaN(splitValue[i])) {
                alert('Numbers are not allowed, please enter text.');
                return;
            }
        }

        if(!value) {
            alert('Fill the input.');
        } else {
            for(let splitValue = 0; splitValue < value.length; splitValue++){
                if(value[splitValue] === 'z') {
                    encryptedStr = encryptedStr + 'a';
                } else if(value[splitValue] === 'Z') {
                    encryptedStr = encryptedStr + 'A';
                } else {
                    stringCode = value[splitValue].charCodeAt(0) + 1;
                    encryptedStr = encryptedStr + String.fromCharCode(stringCode);
                }
            }
            return setReplaceToEnglishAlphabetResult(encryptedStr);
        }
    }
    const getTwoArrayHandler = () => {
        let splitArr = positiveArrayValue.split(',');
        let oddIndexValue = [];
        let evenIndexValue = [];
        for(let i = 0; i < splitArr.length; i++) {
            if((splitArr[i].trim() === '') || (splitArr[i].trim() < 0)) {
                return (alert('Empty spaces and negative numbers are not allowed.'));
            }
        }

        for(let i = 0; i < splitArr.length; i++) {
            if(splitArr.length <= 3) {
                return (alert('Number length must be greater than or equal to 4.'));
            } else {
                if((i % 2) === 0) {
                    evenIndexValue.push(splitArr[i].trim());
                    setEvenIndexArray(evenIndexValue);
                } else {
                    oddIndexValue.push(splitArr[i].trim());
                    setOddIndexArray(oddIndexValue)
                }
            }
        }
    }

    const twoArraySumHandler = () => {
        if((!evenIndexArray.length) && (!oddIndexArray.length)) {
            alert('Fill the above input.');
        } else {
            let addEvenIndex = evenIndexArray.reduce((acc, currValue) => Number(acc) + Number(currValue));
            setEvenIndexArraySumResult(addEvenIndex);
            let addOddIndex = oddIndexArray.reduce((acc, currValue) => Number(acc) + Number(currValue));
            setOddIndexArraySumResult(addOddIndex);
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
            <ReplaceToEnglishAlphabet
                question={quesData[38]}
                replaceAlphabetValue={replaceAlphabetValue}
                setReplaceAlphabetValue={(val) => setReplaceAlphabetValue(val)}
                onEnglishAlphabetHandler={onEnglishAlphabetHandler}
                replaceToEnglishAlphabetResult={replaceToEnglishAlphabetResult}
            />
            <ArraySizeTwo
                question={quesData[39]}
                positiveArrayValue={positiveArrayValue}
                setPositiveArrayValue={(val) => setPositiveArrayValue(val)}
                getTwoArrayHandler={getTwoArrayHandler}
                evenIndexArray={evenIndexArray}
                oddIndexArray={oddIndexArray}
                twoArraySumHandler={twoArraySumHandler}
                evenIndexArraySumResult={evenIndexArraySumResult}
                oddIndexArraySumResult={oddIndexArraySumResult}
            />
    </div>
  )
}

export default Ques81_85;
