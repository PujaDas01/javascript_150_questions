import React, {useState} from "react";

const PracticeQuestions5 = () => {

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [numberOutput, setNumberOutput] = useState(null);
    const [mode1Value, setMode1Value] = useState('');
    const [mode2Value, setMode2Value] = useState('');
    const [mode3Value, setMode3Value] = useState('');
    const [modeResult, setModeResult] = useState(null);
    const [num1Value, setNum1Value] = useState('');
    const [num2Value, setNum2Value] = useState('');
    const [num3Value, setNum3Value] = useState('');
    const [numResult, setNumResult] = useState(null);
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [integer1, setInteger1] = useState('');
    const [integer2, setInteger2] = useState('');
    const [integer3, setInteger3] = useState('');
    const [check15Result, setCheck15Result] = useState(null);
    


    const [integerResult, setIntegerResult] = useState(null);

    const onNumberHandler = () => {
        let num1 = n1.trim();
        let num2 = n2.trim();
        let num3 = n3.trim();
        if((num1 === '') || (num2 === '') || (num3 === '')) {
            alert('Please fill the input(s)');
        } else if((isNaN(n1)) || (isNaN(n2)) || (isNaN(n3))) {
            alert('Please enter a number');
        } else if((n1 === n2) && (n1 === n3) && (n2 === n3)) {
            setNumberOutput(30);
            console.log('first 30 all three match');
        } else if((n1 === n2) || (n1 === n3) || (n2 === n3) || (n3 === n1)) {
            setNumberOutput(40);
            console.log('second 40 two match');
        } else {
            setNumberOutput(20);
            console.log('last 20 any number did not match');
        }
    }

    const onModeHandler = () => {
        let num1 = mode1Value.trim();
        let num2 = mode2Value.trim();
        let num3 = mode3Value.trim();
        console.log('num', num1, num2, num3);
        if((num1 === '') || (num2 === '') || (num3 ==='')) {
            alert('Please fill the input(s)');
        } else if ((num1 < num2) && (num2 < num3)) {
            setModeResult('Strict Mode');
        } else if ((num1 >= num2) || (num3 > num2)) {
            setModeResult('Soft Mode');
        } else {
            setModeResult('Unknown Mode');
        }
    }

    const onNumHandler = () => {
        let num1 = num1Value.trim();
        let num2 = num2Value.trim();
        let num3 = num3Value.trim();
        let lastValue1 = num1.slice(num1.length - 1);
        let lastValue2 = num2.slice(num2.length - 1);
        let lastValue3 = num3.slice(num3.length - 1);
        let n1 = Number(num1);
        let n2 = Number(num2);
        let n3 = Number(num3);

        if((num1 === '') || (num2 === '') || (num3 === '')) {
            alert('Please fill the input(s).');
        } else if((num1 < 0) || (num2 < 0) || (num3 < 0)) {
            alert('Insert a positive number.');
            console.log('number is less than 0');
        } else if((isNaN(n1)) || (isNaN(n2)) || isNaN(n3)) {
            alert('Please enter a number.');
            console.log('This is not a number')
        } else if((lastValue1 === lastValue2) && (lastValue2 === lastValue3) && (lastValue3 === lastValue1)) {
            setNumResult(true);
            console.log('All three last digits are same');
        } else if (((lastValue1 === lastValue2) && (lastValue1 !== lastValue3)) || ((lastValue2 === lastValue3) && (lastValue2 !== lastValue1)) || ((lastValue3 === lastValue1) && (lastValue3 !== lastValue2))) {
            setNumResult(true);
            console.log('Only two last digits are same');
        } else {
            setNumResult(false);
            console.log('None of them matches.');
        }
    }

    const onCheck15Handler = () => {
        let num1 = number1.trim();
        let num2 = number2.trim();
        let n1 = Number(num1);
        let n2 = Number(num2);
        let sum = n1 + n2;
        let diff = n1 - n2;
        if((num1 === '') || (num2 === '')) {
            alert('Please fill the input(s).');
        } else if((isNaN(n1)) || (isNaN(n2))) {
            alert('Please enter a number.');
        } else if((n1 === 15) || (n2 === 15)) {
            setCheck15Result(true);
        } else if((sum === 15) || (diff === 15)) {
            setCheck15Result(true);
        } else {
            setCheck15Result(false);
        }
    }

    const onIntegerHandler = () => {
        let n1 = integer1.trim();
        let n2 = integer2.trim();
        let n3 = integer3.trim();

        if((n1 === '') || (n2 === '') || (n3 === '')) {
            alert('Please fill the input(s).');
        } else if(n1 >= 20 && (n1 < n2 || n1 < n3)) {
            setIntegerResult(true);
        } else if (n2 >= 20 && (n2 < n1 || n2 < n3)) {
            setIntegerResult(true);
        } else if (n3 >= 20 && (n3 < n1 || n3 < n2)) {
            setIntegerResult(true);
        } else {
            setIntegerResult(false);
        }
    }

    return(
        <div style={{backgroundColor: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}}> 
            <h1 style={{color: 'green'}}>Fourth Page</h1>
            <h3>Question 41: Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.</h3>
            <label>Enter First Number: </label>
            <input value={n1} onChange={(e) => setN1(e.target.value)} /><br/>
            <label>Enter Second Number: </label>
            <input value={n2} onChange={(e) => setN2(e.target.value)} /><br/>  
            <label>Enter Third Number: </label>
            <input value={n3} onChange={(e) => setN3(e.target.value)} /><br/>
            <button onClick={onNumberHandler}>Submit</button>
            <p>The output is {numberOutput}</p>
            <h3>Question 42:  Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.Note: Strict mode: 10, 15, 31 : Soft mode: 24, 22, 31 or 22, 22, 31</h3>
            <label>Check Mode: </label><br/>
            <label>Enter First Number: </label>
            <input value={mode1Value} onChange={(e) => setMode1Value(e.target.value)} /><br/>
            <label>Enter Second Number: </label>
            <input value={mode2Value} onChange={(e) => setMode2Value(e.target.value)}/> <br/>
            <label>Enter Third Number: </label>
            <input value={mode3Value} onChange={(e) => setMode3Value(e.target.value)} /><br/>
            <button onClick={onModeHandler}>CHECK</button>
            <p>The mode is: {modeResult}</p>
            <h3>Question 43: Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.</h3>
            <label>Enter First Number: </label>
            <input value={num1Value} onChange={(e) => setNum1Value(e.target.value)} /><br/>
            <label>Enter Second Number: </label>
            <input value={num2Value} onChange={(e) => setNum2Value(e.target.value)}/> <br/>
            <label>Enter Third Number: </label>
            <input value={num3Value} onChange={(e) => setNum3Value(e.target.value)} /><br/>
            <button onClick={onNumHandler}>Submit</button>
            <p>OUTPUT: {((numResult != null) && ((numResult === true) ? 'True' : 'False'))}</p>
            <h3>Question 44: Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.</h3>
            <label>Enter First Number: </label>
            <input value={integer1} onChange={(e) => setInteger1(e.target.value)} /><br/>
            <label>Enter Second Number: </label>
            <input value={integer2} onChange={(e) => setInteger2(e.target.value)}/> <br/>
            <label>Enter Third Number: </label>
            <input value={integer3} onChange={(e) => setInteger3(e.target.value)} /><br/>
            <button onClick={onIntegerHandler}>Submit</button>
            <p>OUTPUT: {((integerResult != null) && ((integerResult === true) ? 'True' : 'False'))}</p>
            <h3>Question 45: Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.</h3>
            <label>Enter First Number: </label>
            <input value={number1} onChange={(e) => setNumber1(e.target.value)} /> <br/>
            <label>Enter Second Number: </label>
            <input value={number2} onChange={(e) => setNumber2(e.target.value)} /> <br/>
            <button onClick={onCheck15Handler}>Submit</button>
            <p>The result is {((check15Result != null) && ((check15Result === true) ? 'True' : 'False'))}</p>
        </div>
    )
}

export default PracticeQuestions5;