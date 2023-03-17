import React, { useState } from "react";
import ConcatenateStrings from "../screens/ConcatenateStrings";
import MiddleThreeCharacter from "../screens/MiddleThreeCharacter";
import MovingThreeCharacters from "../screens/MovingThreeCharacters";
import { quesData } from "../services/quesData";

const Ques61_65 = () => {

    const [concatenateValue1, setConcatenateValue1] = useState('');
    const [concatenateValue2, setConcatenateValue2] = useState('');
    const [concatenateStringsResult, setConcatenateStringsResult] = useState('');
    const [movingCharacterValue, setMovingCharacterValue] = useState('');
    const [movingCharacterResult, setMovingCharacterResult] = useState('');
    const [middleThreeCharacterValue, setMiddleThreeCharacterValue] = useState('');
    const [middleThreeCharacterResult, setMiddleThreeCharacterResult] = useState('');

    const onConcatenateStringsHandler = () => {
        let value1 = concatenateValue1.trim();
        let value2 = concatenateValue2.trim();
        let extractedPart1 = value1.substring(1, value1.length);
        let extractedPart2 = value2.substring(1, value2.length);
        let concatenatedValues = extractedPart1 + extractedPart2;
        if((value1 === '') || (value2 === '')) {
            alert('Fill the input(s).');
        } else if((value1.length < 2) || (value2.length < 2)) {
            alert('Input length must be greater than 2.');
        } else {
            setConcatenateStringsResult(concatenatedValues);
        }
    }

    const onMovingCharacterHandler = () => {
        let value = movingCharacterValue.trim();
        let threeChar = value.substring(value.length - 3);
        let movingChar = threeChar + value;
        if(value === '') {
            alert('Fill the input.');
        }  else if(value.length < 3) {
            alert('Input length must be greater than or equal to 3.');
        } else {
            setMovingCharacterResult(movingChar);
        }
    }

    const onMiddleThreeCharacterHandler = () => {
        let value = middleThreeCharacterValue.trim();
        if(value === '') {
            alert('Fill the input.');
        } else if(value.length < 3) {
            alert('Input length must be greater than or equal to 3.');
        } else if((value.length === 3) || (value.length % 2 === 0)) {
            setMiddleThreeCharacterResult(value);
        } else if (value.length % 2 != 0) {
            let startEndText = (value.length - 3) / 2;
            let newValue = value.substring(startEndText, value.length - startEndText);
            setMiddleThreeCharacterResult(newValue);
        }
    }

    return(
        <div className="questionContainer">
            <ConcatenateStrings
                question={quesData[15]}
                concatenateValue1={concatenateValue1}
                setConcatenateValue1={(val) => setConcatenateValue1(val)}
                concatenateValue2={concatenateValue2}
                setConcatenateValue2={(val) => setConcatenateValue2(val)}
                onConcatenateStringsHandler={onConcatenateStringsHandler}
                concatenateStringsResult={concatenateStringsResult}
            />
            <MovingThreeCharacters
                question={quesData[16]}
                movingCharacterValue={movingCharacterValue}
                setMovingCharacterValue={(val) => setMovingCharacterValue(val)}
                onMovingCharacterHandler={onMovingCharacterHandler}
                movingCharacterResult={movingCharacterResult}
                />
            <MiddleThreeCharacter
                question={quesData[17]}
                middleThreeCharacterValue={middleThreeCharacterValue}
                setMiddleThreeCharacterValue={(val) => setMiddleThreeCharacterValue(val)}
                onMiddleThreeCharacterHandler={onMiddleThreeCharacterHandler}
                middleThreeCharacterResult={middleThreeCharacterResult}
            />
        </div>
    )
}

export default Ques61_65;
