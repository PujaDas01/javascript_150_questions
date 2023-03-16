import React, { useState } from "react";

const PracticeQuestions3 = () => {

    const [checkInteger, setCheckInteger] = useState('');
    const [integerResult, setIntegerResult] = useState(null);
    const [firstPosNegValue, setFirstPosNegValue] = useState('');
    const [secondPosNegValue, setSecondPosNegValue] = useState('');
    const [posNegResult, setPosNegResult] = useState(null);
    const [strValue, setStrValue] = useState('');
    const [strResult, setStrResult] = useState('');
    const [wordValue, setWordValue] = useState('');
    const [positionValue, setPositionValue] = useState('');
    const [removedLetterResult, setRemovedLetterResult] = useState('');
    const [positionChangingValue, setPositionChangingValue] = useState('');
    const [positionChangedResult, setPositionChangedResult] = useState('');
    const [firstLastValue, setFirstLastValue] = useState('');
    const [firstLastValueResult, setFirstLastValueResult] = useState('');
    const [mulNumberValue, setMulNumberValue] = useState('');
    const [mul3Result, setMul3Result] = useState(null);
    const [mul7Result, setMul7Result] = useState(null);
    const [textValue, setTextValue] = useState('');
    const [textValueResult, setTextValueResult] = useState('');
    const [startingValue, setStartingValue] = useState('');
    const [startingValueResult, setStartingValueResult] = useState(null);
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [valueResult, setValueResult] = useState(null);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [numResult, setNumResult] = useState(null);
    const [userWord, setUserWord] = useState('');
    const [userWordResult, setUserWordResult] = useState(null);

    const integerHandler = (input) => {
        setCheckInteger(input);
        if ((Math.abs(100 - input) <= 20) || (Math.abs(400 - input) <= 20)) {
            setIntegerResult(true);
        } else {
            setIntegerResult(false);
        }
    }

    const positiveNegativeHandler = () => {
        if(((firstPosNegValue === '') && (secondPosNegValue === '')) || ((firstPosNegValue === '0') && (secondPosNegValue === '0'))) {
            setPosNegResult(null);
        } else if(((firstPosNegValue < 0) && (secondPosNegValue > 0)) || ((firstPosNegValue > 0) && (secondPosNegValue < 0))) {
            setPosNegResult(true);
        } else {
            setPosNegResult(false);
        }
    }

    const strHandler = () => {
        if((strValue === '') || (Number(strValue))) { 
            setStrResult('');
        } else if((strValue.substring(0, 2).toLowerCase() === 'py')) {
            setStrResult(strValue);
        } else {
            let word = 'Py' + strValue.toLowerCase();
            setStrResult(word);
        }
    }

    const wordRemoveHandler = () => {
        if((wordValue === '') || (positionValue === '')) {
            alert('Fill the input(s)')
        } else if (positionValue > wordValue.length - 1) {
            alert('Index exceeds string length');
        } else {
            let removeIndex = parseInt(positionValue);
            console.log('CHECK:- ', removeIndex + 1);
            let firstExtractedWord = wordValue.substring(0, removeIndex);
            let secondExtractedWord = wordValue.substring(removeIndex + 1);
            let extractedLetterResult = (firstExtractedWord + secondExtractedWord);
            setRemovedLetterResult(extractedLetterResult);
        }
    }


    const wordPositionChangingHandler = () => {
        if(positionChangingValue === '') {
            alert('Please enter a word.')
        } else if(positionChangingValue.length <= 1) {
            console.log(positionChangingValue);
            setPositionChangedResult(positionChangingValue);
        } else {
            let middleWord = positionChangingValue.substring(1, positionChangingValue.length - 1);
            let word = positionChangingValue.charAt(positionChangingValue.length - 1) + middleWord + positionChangingValue.charAt(0);
            setPositionChangedResult(word);
            setPositionChangingValue(word);
        }
    }

    const firstLastValueHandler = () => {
        if(firstLastValue === '') {
            alert('Please enter a word');
        } else {
            let firstLetter = firstLastValue.substring(0, 1);
            let word = firstLetter + firstLastValue + firstLetter;
            setFirstLastValueResult(word);
        }
    }

    const onMulCheckHandler = () => {
        let enteredNum = Number(mulNumberValue);
        if (mulNumberValue.trim() === ''){
            alert('Please enter a number.')
        } else if (isNaN(enteredNum)) {
            alert('Please enter a number to get the result.');
        } else if (enteredNum <= 0) {
            alert('Enter a number greater than 0.');
        } else if ((enteredNum % 3 === 0) && (enteredNum % 7 !== 0)) {
            setMul3Result(true);
            setMul7Result(false);
            console.log('3 true')
        } else if ((enteredNum % 7 === 0) && (enteredNum % 3 !== 0)){
            setMul7Result(true);
            setMul3Result(false)
            console.log('7 true')
        } else if ((enteredNum % 3 === 0) && (enteredNum % 7 === 0)) {
            setMul3Result(true);
            setMul7Result(true);
            console.log('Both true')
        } else {
            setMul3Result(false);
            setMul7Result(false);
            console.log('Both false')
        }
    }

    const onTextValueHandler = () => {
        if(textValue.trim() === '') {
            alert('Enter a word.');
        } else if(textValue.trim().length < 3) {
            alert('Word length must be equal to or greater than 3 letter.');
        } else {
            let extractLetter = textValue.substr(-3);
            let newWord = extractLetter + textValue.trim() + extractLetter;
            setTextValueResult(newWord);
        }
    }

    const onStartingValueHandler = () => {
        let trimmedText = startingValue.trim();
        if(trimmedText === '') {
            alert('Enter a word');
        } else if(trimmedText.toLowerCase().startsWith('java')) {
            setStartingValueResult(true);
        } else {
            setStartingValueResult(false);
        }
    }

    const onFirstSecondHandler = () => {
        if((firstValue.trim() === '') || (secondValue.trim() === '')) {
            alert('Enter a number.');
        } else if((firstValue >= 50 && firstValue <= 99) || (secondValue >= 50 && secondValue <= 99)) {
            setValueResult(true);
        } else {
            setValueResult(false);
        }
    }


    const onNumHandler = () => {
        if((num1.trim() === '') || (num2.trim() === '') || num3.trim() === '') {
            alert('Enter a number.');
        } else if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)) {
            setNumResult(true);
        } else {
            setNumResult(false);
        }
    }


    const userWordHandler = () => {
        let word = userWord.trim();
        if(word === '') {
            alert('Please enter a word!');
        } else if(word.toUpperCase().substring(4, 10) === 'SCRIPT') {
            let firstWord = word.substring(0, 4);
            let lastWord = word.slice(10, word.length);
            let newString = firstWord + lastWord;
            setUserWordResult(newString);
        } else {
            setUserWordResult(word);
        }
    }


    return(
        <div style={{backgroundColor: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}}>
            <h1 style={{color: 'green'}}>Third Page</h1>
            <h3>Question 19: Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.</h3>
            <input type='number' value={checkInteger} onChange={(e) => integerHandler(e.target.value)} />
            <p>{(integerResult !== null) && (integerResult ? 'True' : 'False')}</p>
            <h3>Question 20: Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.</h3>
            <input type='number' placeholder="Enter a number" value={firstPosNegValue} onChange={(e) => setFirstPosNegValue(e.target.value)} />
            <input type='number' placeholder="Enter a number" value={secondPosNegValue} onChange={(e) => setSecondPosNegValue(e.target.value)} />
            <button onClick={positiveNegativeHandler}>Submit</button>
            <p>{(posNegResult !== null) && (posNegResult ? 'True' : 'False')}</p>
            <h3>Question 21: Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.</h3>
            <input type='text' placeholder='Enter a word' value={strValue} onChange={(e) => setStrValue(e.target.value)} />
            <button onClick={strHandler}>Submit</button>
            <p>The word is: {strResult}</p>
            <h3>Question 22: Write a JavaScript program to remove a character at the specified position of a given string and return the new string.</h3>
            <input type='text' placeholder='Enter your word' value={wordValue} onChange={(e) => setWordValue(e.target.value)} />
            <input type='number' placeholder='Enter a number' value={positionValue} onChange={(e) => setPositionValue(e.target.value)} />
            <button onClick={wordRemoveHandler}>Submit</button>
            <p>The new text is: {removedLetterResult}</p>
            <h3>Question 23: Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.</h3>
            <input type='text' placeholder='Enter a word' value={positionChangingValue} onChange={(e) => setPositionChangingValue(e.target.value)} />
            <button onClick={wordPositionChangingHandler}>SUBMIT</button>
            <p>Your position changed word is: {positionChangedResult}</p>
            <h3>Question 24: Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.</h3>
            <input placeholder="Enter a word" value={firstLastValue} onChange={(e) => setFirstLastValue(e.target.value)}/>
            <button onClick={firstLastValueHandler}>Submit</button>
            <p>{firstLastValueResult}</p>
            <h3>Question 25: Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.</h3>
            <input placeholder='Enter a number' value={mulNumberValue} onChange={(e) => setMulNumberValue(e.target.value)} />
            <button onClick={onMulCheckHandler}>Submit</button>
            <p>{(((mul3Result === true && mul7Result === true)) && `${mulNumberValue} is a multiple of both 3 and 7`) || (((mul3Result === false && mul7Result === false)) && `${mulNumberValue} is not a multiple of both 3 and 7`) || (((mul3Result === true) && (mul7Result === false)) && `${mulNumberValue} is multiple of 3`) || (((mul7Result === true) && (mul3Result === false)) && `${mulNumberValue} is multiple of 7`)}</p>
            <h3>Question 26: Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.</h3>
            <input placeholder='Enter a word' value={textValue} onChange={(e) => setTextValue(e.target.value)} />
            <button onClick={onTextValueHandler}>Submit</button>
            <p>The new word is: {textValueResult}</p>
            <h3>Question 27: Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.</h3>
            <input placeholder='Enter a word' value={startingValue} onChange={(e) => setStartingValue(e.target.value)} />
            <button onClick={onStartingValueHandler}>Submit</button>
            {startingValueResult === null ? '' : (<p>{startingValueResult === true ? 'True' : 'False'}</p>)}
            {/* The below code is also correct */}
            {/* <p>{((startingValueResult != null) && ((startingValueResult === true) ? 'True' : 'False'))}</p> */}
            <h3>Question 28: Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.</h3>
            <label htmlFor='firstNum'>First Number: </label>
            <input type='number' id='firstNum' value={firstValue} onChange={(e) => setFirstValue(e.target.value)} /> <br/>
            <label htmlFor='secondNum'>Second Number: </label>
            <input type='number' id='secondNum' value={secondValue} onChange={(e) => setSecondValue(e.target.value)} /> <br/>
            <button onClick={onFirstSecondHandler}>Submit</button>
            <p>{((valueResult != null) && ((valueResult === true) ? 'True' : 'False'))}</p>
            <h3>Question 29: Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.</h3>
            <label htmlFor='firstNum'>First Number: </label>
            <input type='number' id='firstNum' value={num1} onChange={(e) => setNum1(e.target.value)} /> <br/>
            <label htmlFor='secondNum'>Second Number: </label>
            <input type='number' id='secondNum' value={num2} onChange={(e) => setNum2(e.target.value)} /> <br/>
            <label htmlFor='thirdNum'>Third Number: </label>
            <input id='thirdNum' value={num3} onChange={(e) => setNum3(e.target.value)} /> <br/>
            <button onClick={onNumHandler}>Submit</button>
            <p>{((numResult != null) && ((numResult === true) ? 'True' : 'False'))}</p>
            <h3>Question 30: Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.</h3>
            <label htmlFor='userWord'>Enter a word: </label>
            <input id='userWord' value={userWord} onChange={(e) => setUserWord(e.target.value)} />
            <button onClick={userWordHandler}>Submit</button>
            <p>The word is: {userWordResult}</p>
        </div>
    )
}
export default PracticeQuestions3;