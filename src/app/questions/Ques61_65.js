import React, { useState } from "react";
import ConcatenateStrings from "../screens/ConcatenateStrings";
import MiddleThreeCharacter from "../screens/MiddleThreeCharacter";
import MovingThreeCharacters from "../screens/MovingThreeCharacters";
import RemoveLongerString from "../screens/RemoveLongerString";
import { quesData } from "../services/quesData";

const Ques61_65 = () => {

    const [concatenateValue1, setConcatenateValue1] = useState('');
    const [concatenateValue2, setConcatenateValue2] = useState('');
    const [concatenateStringsResult, setConcatenateStringsResult] = useState('');
    const [movingCharacterValue, setMovingCharacterValue] = useState('');
    const [movingCharacterResult, setMovingCharacterResult] = useState('');
    const [middleThreeCharacterValue, setMiddleThreeCharacterValue] = useState('');
    const [middleThreeCharacterResult, setMiddleThreeCharacterResult] = useState('');
    const [checkStringValue1, setCheckStringValue1] = useState('');
    const [checkStringValue2, setCheckStringValue2] = useState('');
    const [removeLongerStringResult, setRemoveLongerStringResult] = useState('');

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

    const onRemoveLongerStringHandler = () => {
        let value1 = checkStringValue1.trim();
        let value2 = checkStringValue2.trim();
        let concatenateStr = value1 + value2;
        let extraCharOfValue1 = value1.length - value2.length;
        let extractedChar1 = value1.substring(0, value1.length-extraCharOfValue1);
        let addValue1 = extractedChar1 + value2;
        let extraCharOfValue2 = value2.length - value1.length;
        let extractedChar2 = value2.substring(0, value2.length - extraCharOfValue2);
        let addValue2 = value1 + extractedChar2;
        if((value1 === '') || (value2 === '')) {
            alert('Fill the input(s).');
        } else if(value1.length === value2.length) {
            setRemoveLongerStringResult(concatenateStr);
        } else if(value1.length > value2.length){
            setRemoveLongerStringResult(addValue1);
        } else if(value2.length > value1.length) {
            setRemoveLongerStringResult(addValue2);
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
            <RemoveLongerString
                question={quesData[18]}
                checkStringValue1={checkStringValue1}
                checkStringValue2={checkStringValue2}
                setCheckStringValue1={(val) => setCheckStringValue1(val)}
                setCheckStringValue2={(val) => setCheckStringValue2(val)}
                onRemoveLongerStringHandler={onRemoveLongerStringHandler}
                removeLongerStringResult={removeLongerStringResult}
            />
        </div>
    )
}

export default Ques61_65;
