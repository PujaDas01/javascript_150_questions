import React, {useState} from "react";
import Divide from "../screens/Divide";
import StringSpecifiedCopies from "../screens/StringSpecifiedCopies";
import { quesData } from "../services/quesData";

const Ques56_60 = () => {
    const [divisionFirstValue, setDivisionFirstValue] = useState('');
    const [divisionSecondValue, setDivisionSecondValue] = useState('');
    const [divisionOutput, setDivisionOutput] = useState('');
    const [specifiedStringValue, setSpecifiedStringValue] = useState('');
    const [repeatStringValue, setRepeatStringValue] = useState('');
    const [specifiedStringResult, setSpecifiedStringResult] = useState('');

    const onDivisionHandler = () => {
        let value1 = divisionFirstValue.trim();
        let value2 = divisionSecondValue.trim();
        let val1 = Number(value1);
        let val2 = Number(value2);
        let divideValue = val1/val2;
        let fixedValue = divideValue.toFixed();
        let splitValue = fixedValue.split('').join(', ');
        if((value1 === '') || (value2 === '')) {
            alert('Fill the input(s).');
        } else if(val1 < val2) {
            alert('First input must be greater than second input.');
        } else {
            setDivisionOutput(splitValue);
        }
    }

    const onSpecifiedStringHandler = () => {
        let text = specifiedStringValue.trim();
        let val = repeatStringValue.trim();
        let repeatVal = Number(val);
        let newValue = '';
        for(let i = 0; i < repeatVal; i++) {
            newValue = newValue + text + ' ';
        }
        if((text === '') || (val === '')) {
            alert('Fill the input(s).');
        } else if(isNaN(repeatVal)) {
            alert('Please enter a number to get the repetition of the above value.')
        } else if(repeatVal === 0) {
            setSpecifiedStringResult(`Text can't be repeated, as your number given to repeat value is 0.`);
        } else if(repeatVal < 0) {
            alert('Enter a value greater than 0.');
        } else {
            setSpecifiedStringResult(newValue);
        }
    }
    
    return(
        <div className="questionContainer">
            <Divide
                question={quesData[10]}
                divisionFirstValue={divisionFirstValue}
                setDivisionFirstValue={(val) => setDivisionFirstValue(val)}
                divisionSecondValue={divisionSecondValue}
                setDivisionSecondValue={(val) => setDivisionSecondValue(val)}
                onDivisionHandler={onDivisionHandler}
                divisionOutput={divisionOutput}
            />
            <StringSpecifiedCopies
                question={quesData[11]}
                specifiedStringValue={specifiedStringValue}
                setSpecifiedStringValue={(val) => setSpecifiedStringValue(val)}
                repeatStringValue={repeatStringValue}
                setRepeatStringValue={(val) => setRepeatStringValue(val)}
                onSpecifiedStringHandler={onSpecifiedStringHandler}
                specifiedStringResult={specifiedStringResult}
            />
        </div>
    )
}

export default Ques56_60;
