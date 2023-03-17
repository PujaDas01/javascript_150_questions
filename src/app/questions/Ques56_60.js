import React, {useState} from "react";
import CharacterCopies from "../screens/CharacterCopies";
import Divide from "../screens/Divide";
import HalfExtractedString from "../screens/HalfExtractedString";
import StringSpecifiedCopies from "../screens/StringSpecifiedCopies";
import { quesData } from "../services/quesData";

const Ques56_60 = () => {
    const [divisionFirstValue, setDivisionFirstValue] = useState('');
    const [divisionSecondValue, setDivisionSecondValue] = useState('');
    const [divisionOutput, setDivisionOutput] = useState('');
    const [specifiedStringValue, setSpecifiedStringValue] = useState('');
    const [repeatStringValue, setRepeatStringValue] = useState('');
    const [specifiedStringResult, setSpecifiedStringResult] = useState('');
    const [characterValue, setCharacterValue] = useState('');
    const [characterResult, setCharacterResult] = useState('');
    const [halfStringExtractedValue, setHalfStringExtractedValue] = useState('');
    const [halfStringExtractedResult, setHalfStringExtractedResult] = useState('');

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

    const onCharacterHandler = () => {
        let value = characterValue.trim();
        let lastThreeChar = value.substring(value.length - 3);
        let copyString = `${lastThreeChar}, ${lastThreeChar}, ${lastThreeChar}, ${lastThreeChar}`
        if(value === '') {
            alert('Fill the input.');
        } else if(value.length < 3) {
            alert('Value length must be greater than 3.')
        } else {
            setCharacterResult(copyString);
        }
    }

    const onHalfStringExtractedHandler = () => {
        let value = halfStringExtractedValue.trim();
        let firstHalfValue = value.substring(0, value.length / 2);
        if(value === '') {
            alert('Fill the input.');
        } else if(value.length % 2 === 0) {
            setHalfStringExtractedResult(firstHalfValue);
        } else {
            setHalfStringExtractedResult(value);
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
            <CharacterCopies
                question={quesData[12]}
                characterValue={characterValue}
                setCharacterValue={(val) => setCharacterValue(val)}
                onCharacterHandler={onCharacterHandler}
                characterResult={characterResult}
            />
            <HalfExtractedString
                question={quesData[13]}
                halfStringExtractedValue={halfStringExtractedValue}
                setHalfStringExtractedValue={(val) => setHalfStringExtractedValue(val)}
                onHalfStringExtractedHandler={onHalfStringExtractedHandler}
                halfStringExtractedResult={halfStringExtractedResult}
            />
        </div>
    )
}

export default Ques56_60;
