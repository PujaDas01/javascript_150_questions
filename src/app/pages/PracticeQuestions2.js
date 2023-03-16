import React, { useEffect, useState } from 'react';

const PracticeQuestions2 = () => {

    const [christmasLeftDays, setChristmasLeftDays] = useState('');
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [mulDivOutput, setMulDivOutput] = useState('');
    const [celsiusValue, setCelsiusValue] = useState('');
    const [fahrenheitValue, setFahrenheitValue] = useState('');
    const [numValue, setNumValue] = useState('');
    const [numResult, setNumResult] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [sumResult, setSumResult] = useState('');
    const [numDifferenceValue, setNumDifferenceValue] = useState('');
    const [differenceResult, setDifferenceResult] = useState('');
    const [checkFirstValue, setCheckFirstValue] = useState('');
    const [checkSecondValue, setCheckSecondValue] = useState('');
    const [checkResult, setCheckResult] = useState('')

    const properties = {
        property1: 'name',
        property2: 'class',
        property3: 'city'
    }

    useEffect(() => {
        christmasDaysCount();
        const user = {
            name: 'tom',
            age: 22,
        };
        user['class'] = 4;
        let newProperty = 'city';
        user[newProperty] = 'Jaigaon';
        console.log('user', user, 'name: ', user[properties.property1], 'class:', user[properties.property2], 'city:', user[properties.property3] );
    }, [properties.property1, properties.property2, properties.property3]);

    const christmasDaysCount = () => {
        let today = new Date();
        let cMas = new Date(today.getFullYear(), 11, 25);
        if(today.getMonth() === 11 && today.getDate() > 25) {
            cMas.setFullYear(cMas.getFullYear() + 1);
        }
        let one_day = 1000 * 60 * 60 * 24;
        let christmasLeftDayCalculation = Math.ceil((cMas.getTime()-today.getTime())/one_day);
        setChristmasLeftDays(christmasLeftDayCalculation);
    }

    const multiplyHandler = () => {
        let multiply = firstNum * secondNum;
        if(firstNum.trim() === '') {
            alert("Please enter the first input field.");
        } else if(secondNum.trim() === '') {
            alert("Please enter the second input field.");
        } else {
            setMulDivOutput(multiply);
        }
    }

    const divideHandler = () => {
        let divide = firstNum / secondNum;
        if (secondNum.trim() === '') {
            alert("Please enter the first input field.")
        } else if (secondNum.trim() === '') {
            alert("Please enter the second input field.");
        } else {
            setMulDivOutput(divide);
        }
    }

    const changeCel = (num) => {
        setCelsiusValue(num);
        let cToFah = num * 9 / 5 + 32;
        let decimalFah = cToFah.toFixed(2);
        setFahrenheitValue(decimalFah);
    }

    const changeFah = (num) => {
        console.log('num',num)
        setFahrenheitValue(num);
        let fToCel = (num - 32) * 5 / 9;
        let decimalCel = fToCel.toFixed(2);
        setCelsiusValue(decimalCel);
    }


    const calculateNumDifference = (number) => {
        setNumValue(number);
        if(number <= 13) {
            let lessCalculationValue = (13 - number);
            setNumResult(lessCalculationValue);
        } else {
            let greaterCalculationValue = (number - 13) * 2;
            setNumResult(greaterCalculationValue)
        }
    }

    const sumHandler = () => {
        let num1 = Number(firstValue);
        let num2 = Number(secondValue);

        if(num1 === num2) {
            let tripleSum = 3 * (num1 + num2);
            setSumResult(tripleSum);
        } else {
            let sum = num1 + num2;
            setSumResult(sum);
        }
    }

    const numDifferenceHandler = (number) => {
        setNumDifferenceValue(number);
        if(number <= 19) {
            let diff = (19 - number);
            setDifferenceResult(diff);
        } else if(number > 19){
            let tripleDiff = 3 * (number - 19);
            setDifferenceResult(tripleDiff);
        }
    }

    const checkNumHandler = () => {
        let firstValue = Number(checkFirstValue);
        let secondValue = Number(checkSecondValue);
        let sumValue = firstValue + secondValue;
        if((firstValue === 50) || (secondValue === 50)) {
            setCheckResult('True');
        } else if (sumValue === 50) {
            setCheckResult('True');
        } else {
            setCheckResult('False');
        }
    }

    const documentUrl = document.URL;

    let fileName = 'practiceQuestion2.js';
    let fileExtension = fileName.split('.').pop();

    return(
        <div style={{backgroundColor: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}}>
            <h1 style={{color: 'green'}}>Second Page</h1>
            <h3>Question 9: Write a JavaScript program to calculate days left until next Christmas.</h3>
            <p>{christmasLeftDays} days left for Christmas🎄</p>
            <h3>Question 10: Write a JavaScript program to calculate multiplication and division of two numbers (input from user).</h3>
            <div style={{paddingTop: '20px'}}>
                <h5>Sample Form :</h5>
                <label>1st Number: </label> 
                <input type='number' onChange={(e) => setFirstNum(e.target.value)} value={firstNum} /><br/>
                <label>2nd Number: </label>
                <input type='number' onChange={(e) => setSecondNum(e.target.value)} value={secondNum} /><br/><br/>
                <button style={{marginRight: '20px'}} onClick={multiplyHandler}>Multiply</button>
                <button onClick={divideHandler}>Divide</button>
                <p>The result is : <b>{mulDivOutput}</b></p>
            </div>
            <h3>Question 11: Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.</h3>
            <div>
                <label>Convert: </label><br/>
                <label>Celsius: </label>
                <input type='number' value={celsiusValue} onChange={(e) => changeCel(e.target.value)} /><br/>
                <label>Fahrenheit: </label>
                <input type='number' value={fahrenheitValue} onChange={(e) => changeFah(e.target.value)} />
            </div>
            <h3>Question 12: Write a JavaScript program to get the website URL (loading page).</h3>
            <p>The website URL is: <a href={documentUrl} style={{fontWeight: '500'}} target='_blank' rel="noreferrer" >{documentUrl}</a></p>
            <h3>Question 13: Write a JavaScript exercise to create a variable using a user-defined name.</h3>
            <h3>Question 14: Write a JavaScript exercise to get the extension of a filename.</h3>
            <p>The extension of a filename is: {fileExtension}</p>
            <h3>Question 15: Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. </h3>
            <input type='number' placeholder='Enter a number' value={numValue} onChange={(e) => calculateNumDifference(e.target.value)} />
            <p>The result is: {numResult}</p>
            <h3>Question 16: Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.</h3>
            <input type='number' placeholder='Enter First Number' value={firstValue} onChange={(e) => setFirstValue(e.target.value)} />
            <input type='number' placeholder='Enter Second Number' value={secondValue} onChange={(e) => setSecondValue(e.target.value)} />
            <button onClick={sumHandler}>Submit</button>
            <p>The sum result is: {sumResult}</p>
            <h3>Question 17: Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.</h3>
            <input type='number' placeholder='Enter Number' value={numDifferenceValue} onChange={(e) => numDifferenceHandler(e.target.value)} />
            <p>The difference result is: {differenceResult}</p>
            <h3>Question 18: Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.</h3>
            <input type='number' placeholder='First Number' value={checkFirstValue} onChange={(e) => setCheckFirstValue(e.target.value)} />
            <input type='number' placeholder='Second Number' value={checkSecondValue} onChange={(e) => setCheckSecondValue(e.target.value)} />
            <button onClick={checkNumHandler}>Submit</button>
            <p>Output: {checkResult}</p>
        </div>
    )
}

export default PracticeQuestions2;