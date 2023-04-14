import React, {useState} from "react";
import { quesData } from "../services/quesData";
import MultipleOf7Or11 from "../screens/MultipleOf7Or11";
import Range40To10000 from "../screens/Range40To10000";
import StringReverse from "../screens/StringReverse";
import ReplaceString from "../screens/ReplaceString";

const Ques46_50 = () => {
    const [mulVal1, setMulVal1] = useState('');
    const [mulVal2, setMulVal2] = useState('');
    const [multiplyResult, setMultiplyResult] = useState(null);
    const [range, setRange] = useState('');
    const [rangeValue1, setRangeValue1] = useState('');
    const [rangeValue2, setRangeValue2] = useState('');
    const [rangeResult, setRangeResult] = useState(null);
    const [reverseTextValue, setReverseTextValue] = useState('');
    const [reverseTextResult, setReverseTextResult] = useState('');
    const [replaceValue, setReplaceValue] = useState('');
    const [replaceValueResult, setReplaceValueResult] = useState('');


    const onMultiplyCheckHandler = () => {
        let num1 = Math.abs(mulVal1);
        let num2 = Math.abs(mulVal2);
        let int1 = parseInt(num1);
        let int2 = parseInt(num2);
        let mulSeven1 = int1 % 7 === 0;
        let mulSeven2 = int2 % 7 === 0;
        let mulEleven1 = int1 % 11 === 0;
        let mulEleven2 = int2 % 11 === 0;
        if((mulVal1.trim() === '') || (mulVal2.trim() === '')) {
            alert('Fill the input(s).')
        } else if ((mulSeven1 || mulEleven1) && !(mulSeven2) && !(mulEleven2)) {
            setMultiplyResult(true);
        } else if ((mulSeven2 || mulEleven2) && !(mulSeven1) && !(mulEleven1)) {
            setMultiplyResult(true);
        } else {
            setMultiplyResult(false);
        }
    }

    const onCheckRangeHandler = () => {
        let rangeNum = range.trim();
        let num1 = rangeValue1.trim();
        let num2 = rangeValue2.trim();
        let rangeValue = Number(rangeNum);
        let number1 = Number(num1);
        let number2 = Number(num2);
        if((rangeNum === '') || (num1 === '') || (num2 === '')) {
            alert('Please fill the input(s).');
        } else if((isNaN(rangeValue)) || (isNaN(number1)) || (isNaN(number2))) {
            alert('Please enter number')
        } else if((rangeValue < 40) || (rangeValue > 10000)) {
            setRangeResult(false);
        } else if ((rangeValue >= num1) && (rangeValue <= num2)) {
            setRangeResult(true);
        } else {
            setRangeResult(false);
        }
    }

    const onReverseStringHandler = () => {
        let value = reverseTextValue.trim();
        let textReverse = value.split('').reverse().join('');
        if (value === '') {
            alert('Fill the input.');
        } else if (value.length <= 1) {
            alert('Text length must be more than 1.')
        } else {
            setReverseTextResult(textReverse);
        }
    }

    const onReplaceStringHandler = () => {
        let value = replaceValue.trim();
        let splitValue = value.split('');
        let encryptedString = '';
        let stringCode = '';
        for(splitValue=0; splitValue<value.length; splitValue++) {
            if(value[splitValue] === 'z') {
                encryptedString = encryptedString + 'a';
            } else if(value[splitValue] === 'Z') {
                encryptedString = encryptedString + 'A';
            } else {
                stringCode = value[splitValue].charCodeAt(0) + 1;
                encryptedString = encryptedString + String.fromCharCode(stringCode);
            }
        }
        return setReplaceValueResult(encryptedString);
    }

    return(
        <div className="questionContainer">
            <MultipleOf7Or11 
                question={quesData[0]}
                number1={mulVal1}
                number2={mulVal2}
                setNumber1={setMulVal1}
                setNumber2={setMulVal2}
                onMultiplyHandler={onMultiplyCheckHandler}
                multiplyOutput={multiplyResult}
            />
            <Range40To10000
                question={quesData[1]} 
                range={range}
                rangeValue1={rangeValue1}
                rangeValue2={rangeValue2}
                setRange={(val) => setRange(val)}
                setRangeValue1={(val) => setRangeValue1(val)}
                setRangeValue2={(val) => setRangeValue2(val)}
                onRangeHandler={onCheckRangeHandler}
                rangeResult={rangeResult}
            />
            <StringReverse
                // question={quesData[2]}
                question={quesData[2].quesNo + '. ' + quesData[2].ques}
                reverseTextValue={reverseTextValue}
                setReverseTextValue={setReverseTextValue}
                onReverseStringHandler={onReverseStringHandler}
                reverseTextResult={reverseTextResult}
            />
            <ReplaceString
                question={quesData[3]}
                replaceValue={replaceValue}
                setReplaceValue={(val) => setReplaceValue(val)}
                onReplaceStringHandler={onReplaceStringHandler}
                replaceValueResult={replaceValueResult}
            />
        </div>
    )
}

export default Ques46_50;