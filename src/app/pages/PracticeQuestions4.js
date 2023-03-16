import React, {useState} from 'react';


const PracticeQuestions4 = () => {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [maxResult, setMaxResult] = useState(null);
    const [fNum, setFNum] = useState('');
    const [sNum, setSNum] = useState('');
    const [nearestHunResult, setNearestHumResult] = useState(null);
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [rangeResult, setRangeResult] = useState(null);
    const [charValue, setCharValue] = useState('');
    const [letterValue, setLetterValue] = useState('');
    const [charResult, setCharResult] = useState(null);
    const [firstLargerValue, setFirstLargerValue] = useState('');
    const [secondLargerValue, setSecondLargerValue] = useState('');
    const [largerResult, setLargerResult] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [lastCheckResult, setLastCheckResult] = useState(null);
    const [wordValue, setWordValue] = useState('');
    const [wordResult, setWordResult] = useState('');
    const [sum1Value, setSum1Value] = useState('');
    const [sum2Value, setSum2Value] = useState('');
    const [computeResult, setComputeResult] = useState(null);
    const [digit1Value, setDigit1Value] = useState('');
    const [digit2Value, setDigit2Value] = useState('');
    const [check8Result, setCheck8Result] = useState(null);


    const onMaxValueHandler = () => {
        let num1 = number1.trim();
        let num2 = number2.trim();
        let num3 = number3.trim();
        if((num1 === '') || (num2 === '') || (num3 === '')) {
            alert('Please insert a number.')
        } else {
            let maximumValue = Math.max(num1, num2, num3);
            setMaxResult(maximumValue);
        }
    }

    const nearestHundredHandler = () => {
        let num1 = fNum.trim();
        let num2 = sNum.trim();
        if((num1 === '') || (num2 === '')) {
            alert('Please enter a number');
        }  else if (num1 === num2){
            alert('Enter two different given integer values');
        } else if((num1 > 100) || (num2 > 100)) {
            alert('Please insert a value less than 100.');
        } else if((100 - num1) < (100 - num2)) {
            setNearestHumResult(num1);
        } else if((100 - num1) > (100 - num2)) {
            setNearestHumResult(num2);
        }
    }

    const onCheckRangeHandler = () => {
        let num1 = firstValue.trim();
        let num2 = secondValue.trim();
        if((num1 === '') || (num2 === '')) {
            alert('Please enter a number.');
        } else if((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)) {
            setRangeResult(true);
        } else {
            setRangeResult(false);
        }
    }

    const onCharHandler = () => {
        let word = charValue.trim();
        let letter = letterValue.trim();
        let extractedLetter = word.slice(2, 5).includes(letter);
        if((word === '') || (letter === '')) {
            alert('Please fill the input(s).');
        } else if(extractedLetter === true) {
            setCharResult(true);
        } else {
            setCharResult(false);
        }
    }

    const onCompareNum = () => {
        let num1 = firstLargerValue.trim();
        let number1 = Math.abs(num1);
        let num2 = secondLargerValue.trim();
        let number2 = Math.abs(num2);
        if ((num1 === '') || (num2 === '')) {
            alert('Please enter a number.');
        } else if ((number1 >= 40 && number1 <= 60) && (number2 >= 40 && number2 <= 60)) {
            if (number1 > number2) {
                return `${number1} is greater.`;
            } else if (number1 < number2) {
                return `${number2} is greater.`;
            } else {
                return `Both numbers are equal so can't be compared.`;
            }
        } else {
            return `Numbers are out of the said range!`;
        }
    }

    const onLargeNumHandler = () => {
        setLargerResult(onCompareNum);
    }


    const onLastNumCheckHandler = () => {
        let number1 = firstNumber.trim();
        // This code is also correct
        // let check = number1.charAt(number1.length-1);
        // console.log('check', check);
        let num1 = Math.abs(number1);
        let getLastNum1 = num1.toString().charAt(num1.toString().length-1);
        let number2 = secondNumber.trim();
        let num2 = Math.abs(number2);
        let getLastNum2 = num2.toString().charAt(num2.toString().length-1);
        let number3 = thirdNumber.trim();
        let num3 = Math.abs(number3);
        let getLastNum3 = num3.toString().charAt(num3.toString().length-1);
        if((number1 === '') || (number2 === '') || (number3 === '')) {
            alert('Please fill the input(s).');
        } else if ((getLastNum1 === getLastNum2) && (getLastNum2 === getLastNum3) && (getLastNum3 === getLastNum1)) {
            setLastCheckResult(true);
        } else {
            setLastCheckResult(false);
        }
    }

    const onWordHandler = () => {
        let wrd = wordValue.trim();
        console.log('wrd:=', wrd);
        let getFrontPart = wrd.substring(0, 3);
        let getLastPart = wrd.substring(3, wrd.length);
        console.log('FrontPart:=', getFrontPart, ', LastPart:=', getLastPart);
        if(wrd === '') {
            alert('Please enter a word.')
        } else if(wrd.length < 3) {
            let word = wrd.toUpperCase()
            setWordResult(word);
        } else if(wrd.length >= 3) {
            let changedCase = getFrontPart.toLowerCase() + getLastPart;
            setWordResult(changedCase);
        }
    }

    const onComputingValueHandler = () => {
        let num1Trim = sum1Value.trim();
        let num2Trim = sum2Value.trim();
        let num1 = Number(sum1Value);
        let num2 = Number(sum2Value);
        let sum = num1 + num2;
        if ((num1Trim === '') || (num2Trim === '')) {
            alert('Please fill the input(s).');
        } else if((isNaN(sum1Value)) || (isNaN(sum2Value))) {
            alert('Please enter a number to perform the calculation.');
        } else if((sum >= 50) && (sum <= 80)) {
            setComputeResult(65);
        } else {
            setComputeResult(80);
        }
    }

    const on8CheckHandler = () => {
        let num1 = Number(digit1Value);
        let num2 = Number(digit2Value);
        let sum = num1 + num2;
        let diff = num1 - num2;
        if((digit1Value.trim() === '') || (digit2Value.trim() === '')) {
            alert('Please fill the input(s).');
        } else if((num1 === 8) || (num2 === 8) || (sum === 8) || (diff === 8)) {
            setCheck8Result(true);
        } else {
            setCheck8Result(false);
        }
    }

    return(
        <div style={{backgroundColor: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}}> 
            <h1 style={{color: 'green'}}>Fourth Page</h1>
            <h3>Question 31: Write a JavaScript program to find the largest of three given integers.</h3>
            <label>Compare</label><br/>
            <label htmlFor='num1'>Enter 1st Number: </label>
            <input id='num1' value={number1} onChange={(e) => setNumber1(e.target.value)} /><br/>
            <label htmlFor='num2'>Enter 2nd Number: </label>
            <input id='num2' value={number2} onChange={(e) => setNumber2(e.target.value)} /><br/>
            <label htmlFor='num3'>Enter 3rd Number: </label>
            <input id='num3' value={number3} onChange={(e) => setNumber3(e.target.value)} /><br/>
            <button onClick={onMaxValueHandler}>COMPARE</button>
            <p>The max value is: {maxResult}</p>
            <h3>Question 32: Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.</h3>
            <label>Nearest 100...</label><br/>
            <label htmlFor='fNo.'>Enter First Number: </label>
            <input id='fNo.' value={fNum} onChange={(e) => setFNum(e.target.value)} /><br/>
            <label htmlFor='sNo.'>Enter Second Number: </label>
            <input id='sNo.' value={sNum} onChange={(e) => setSNum(e.target.value)} /><br/>
            <button onClick={nearestHundredHandler}>Submit</button>
            <p>The closest value near 100 is: {nearestHunResult}</p>
            <h3>Question 33: Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.</h3>
            <label htmlFor='first'>Enter first number: </label>
            <input id='first' value={firstValue} onChange={(e) => setFirstValue(e.target.value)} /><br/>
            <label htmlFor='second'>Enter second number: </label>
            <input id='second' value={secondValue} onChange={(e) => setSecondValue(e.target.value)} /><br/>
            <button onClick={onCheckRangeHandler}>Submit</button>
            <p>{(rangeResult != null) && (rangeResult === true ? 'True' : 'False')}</p>
            <h3>Question 34: Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.</h3>
            <label htmlFor='firstNum'>Enter first number: </label>
            <input id='firstNum' value={firstLargerValue} onChange={(e) => setFirstLargerValue(e.target.value)} /><br/>
            <label htmlFor='secNum'>Enter second number: </label>
            <input id='secNum' value={secondLargerValue} onChange={(e) => setSecondLargerValue(e.target.value)} /><br/>
            <button onClick={onLargeNumHandler}>Submit</button>
            <p>{largerResult}</p>
            <h3>Question 35: Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.</h3>
            <label htmlFor='firChar'>Enter a word: </label>
            <input id='firChar' value={charValue} onChange={(e) => setCharValue(e.target.value)} /><br/>
            <label htmlFor='secChar'>Enter a letter: </label>
            <input id='secChar' value={letterValue} onChange={(e) => setLetterValue(e.target.value)} /><br/>
            <button onClick={onCharHandler}>Submit</button>
            <p>{((charResult != null) && ((charResult === true) ? `${letterValue} exist within the 2nd to 4th position in a given string named ${charValue}` : `${letterValue} does not exist within the 2nd to 4th position in a given string named ${charValue}`))}</p>
            <h3>Question 36: Write a JavaScript program to check whether the last digit of the three given positive integers is same.</h3>
            <label htmlFor='fN'>Enter first number: </label>
            <input id='fN' value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} /><br/>
            <label htmlFor='sN'>Enter second number: </label>
            <input id='sN' value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} /><br/>
            <label htmlFor='tN'>Enter third number: </label>
            <input id='tN' value={thirdNumber} onChange={(e) => setThirdNumber(e.target.value)} /><br/>
            <button onClick={onLastNumCheckHandler}>Submit</button>
            <p>{((lastCheckResult != null) && ((lastCheckResult === true) ? `All three field contains same digit at last.` : `Doesn't contain same numbers at last.`))}</p>
            <h3>Question 37: Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.</h3>
            <label htmlFor='word'>Enter a word: </label>
            <input id='word' value={wordValue} onChange={(e) => setWordValue(e.target.value)} /><br/>
            <button onClick={onWordHandler}>Submit</button>
            <p>The new word is: {wordResult}</p>
            <h3>Question 38: Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.</h3>
            <h3>Question 39: Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.</h3>
            <label htmlFor='n1'>Enter first number: </label>
            <input id='n1' value={sum1Value} onChange={(e) => setSum1Value(e.target.value)} /><br/>
            <label htmlFor='n2'>Enter second number: </label>
            <input id='n2' value={sum2Value} onChange={(e) => setSum2Value(e.target.value)} /><br/>
            <button onClick={onComputingValueHandler}>Submit</button>
            <p>The result is:- {computeResult}</p>
            <h3>Question 40: Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.</h3>
            <label htmlFor='firstDigit'>Enter first number: </label>
            <input id='firstDigit' value={digit1Value} onChange={(e) => setDigit1Value(e.target.value)} /><br/>
            <label htmlFor='secondDigit'>Enter second number: </label>
            <input id='secondDigit' value={digit2Value} onChange={(e) => setDigit2Value(e.target.value)} /><br/>
            <button onClick={on8CheckHandler}>Submit</button>
            <p>{((check8Result != null) && (check8Result === true ? 'True' : 'False'))}</p>
        </div>
    )
}

export default PracticeQuestions4;