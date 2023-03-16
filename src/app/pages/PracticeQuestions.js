import React, { useState, useEffect, useCallback } from "react";
import { timeFormat } from "../services/timeService";
import { dateFormat } from "../services/dateService";

const PracticeQuestions = () => {
    
    const [time, setTime] = useState('');
    const [date] = useState(dateFormat());
    const [count, setCount] = useState(0);
    const [area, setArea] = useState(0);
    const [rotateText, setRotateText] = useState('w3resource');
    const [yearInput, setYearInput] = useState('');
    const [isLeapYear, setIsLeapYear] = useState(null);
    const [hidden, setHidden] = useState(true);
    const [sundayYear, setSundayYear] = useState([]);
    const [userNum, setUserNum] = useState('');
    const [guessNum, setGuessNum] = useState('');

        const textRotationCallback = useCallback(() => {
            let getLastLetter = rotateText[rotateText.length - 1];
            let removingLetterText = rotateText.substring(0, rotateText.length - 1);
            let addLastLetterAtBeginning = getLastLetter.concat(removingLetterText);
            return addLastLetterAtBeginning;
        }, [rotateText])

        useEffect(() => {
            let rotation = setInterval(() => {
                setRotateText((state) => textRotationCallback());
            }, 900)
            return(() => {
                clearInterval(rotation);
            })
        }, [textRotationCallback])

        useEffect(() => {
            checkSundayInYear()
        },[])

        useEffect(() => {
            const countIncrease = setInterval(() => {
                setCount((state) => {
                    return(state >= 10 ? 0 : (state + 1))
                });
            }, 1000)
            return(() => {
                clearInterval(countIncrease);
            })
        }, [])

        useEffect(() => {
            const timeInterval = setInterval(() => {
                setTime((state) => timeFormat());
            }, 1000);
            return(() => {
                clearInterval(timeInterval);
            })
        }, [])

        const currentPageHandler = () => {
            window.print();
        }

        const calculateAreaOfTriangle = () => {
            let side1 = 5;
            let side2 = 6;
            let side3 = 7;
            let perimeter = (side1 + side2 + side3) / 2;
            let areaCalculation = Math.sqrt(perimeter*((perimeter-side1)*(perimeter*(perimeter-side2))*perimeter*(perimeter-side3)));
            return areaCalculation;
        }

        const getArea = () => {
            let areaCalculatedResult = calculateAreaOfTriangle();
            setArea(areaCalculatedResult);
        }

        const submitHandler = () => {
            if(yearInput % 4 === 0) {
                setIsLeapYear(true);
                console.log('Leap Year');
            } else if ((yearInput % 100 === 0) && (yearInput % 400 === 0)) {
                setIsLeapYear(true);
            } else {
                setIsLeapYear(false);
                console.log('Not a Leap Year');
            }
            setYearInput('');
        }

        const secretTextHandler = () => {
            if(hidden) {
                setHidden(false);
                console.log('show');
            } else {
                setHidden(true);
                console.log('hide');
            }
            console.log('end');
        }

        function checkSundayInYear() {
            let yearResult = [];
            for(let year = 2014; year <= 2050; year++) {
                let date = new Date(year, 0, 1);
                if(date.getDay() === 0) {
                    yearResult.push(`1st January is being a Sunday of ${year}.`);
                } else {
                    console.log(`${year} of 1st January is doesn't fall on sunday.`);
                }
            }
            setSundayYear(yearResult);
        }

        const enteredNumberHandler = () => {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
            if(userNum.trim() > 10) {
                alert('Enter a number between 1 to 10.')
            } else if(userNum.trim() === '') {
                alert('Insert a number.');
            } else if((userNum === guessNum) || (userNum <= 10)) {
                setGuessNum(randomNumber);
                console.log('Good work');
            } else {
                console.log(`Not matched, your number was ${userNum}, and the guessed number is ${guessNum}`);
            }
        }

    return(
        <div style={{backgroundColor: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}}>
            <h2 style={{color: 'red', textAlign: 'center', textDecoration: 'underline', paddingBottom: '20px'}}>Practice logical questions of javascript</h2>
            <h1 style={{color: 'green'}}>First Page</h1>
            <h3>Question 1: Write a JavaScript program to display the current day and time in the following format.</h3>
            <p>{time}</p>
            <h3>Question 2: Write a JavaScript program to print the contents of the current window.</h3>
            <button onClick={currentPageHandler}>Print the page</button>
            <h3>Question 3: Write a JavaScript program to get the current date.Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy</h3>
            <p>The current date is {date}</p>
            <h3>Extra Question: To increase a number in every second and set the number back to 0, when the number is more than 10 or equal to 10.</h3>
            <p>The count is {count}</p>
            <h3>Question 4: Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. </h3>
            <p>The area of a triangle is : {area}</p>
            <button onClick={getArea}>Click to get the area result</button>
            <h3>Question 5: Write a JS program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.</h3>
            <p style={{textAlign: 'center', color: 'green', fontWeight: '600'}}>{rotateText}</p>
            <h3>Question 6: Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.</h3>
            <input type='number' placeholder="Insert a year" onChange={(e) => setYearInput(e.target.value)} value={yearInput} />
            <button onClick={submitHandler}>Check</button>
            <p>{(isLeapYear === true && 'This is a leap year')} {(isLeapYear === false && 'This is not a leap year')}</p>
            <h3>Extra Question: Make a show and hidden message on clicking a button.</h3>
            <p hidden={hidden} style={{color: 'green', fontWeight: '700'}}>Secret Message</p>
            <button onClick={secretTextHandler}>{hidden ? 'Click to view a secret message' : 'Click to vanish secret message'}</button>
            <h3>Question 7: Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.</h3>
            {sundayYear.map((yearText, i) => {
                return(
                    <div key={i}>
                        <p>{yearText}</p>
                    </div>
                )
            })}
            <h3>Question 8: Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".</h3>
            <label>Enter a number between 1 to 10.</label><br/>
            <input style={{width: '16%'}} type='number' placeholder="Select a number" onChange={(e) => setUserNum(e.target.value)} value={userNum} min='1' max='10'/>
            <button onClick={enteredNumberHandler}>SUBMIT</button>
            <p>The Guess number is: {guessNum}</p>
            <p style={{fontWeight: '600', color: 'blueviolet'}}>{(userNum) && (guessNum) && (userNum === guessNum ? `Good work 👍` : `Not matched, your number is ${userNum}`)}</p>
        </div>
    )
}

export default PracticeQuestions;