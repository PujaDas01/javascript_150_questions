import React, { useState } from "react";
import AlphabeticalOrder from "../screens/AlphabeticalOrder";
import ContainingPndT from "../screens/ContainingPndT";
import HoursAndMinutes from "../screens/HoursAndMinutes";
import StringSeparation from "../screens/StringSeparation";
import VowelCount from "../screens/VowelCount";
import { quesData } from "../services/quesData";

const Ques51_55 = () => {
    const [hrMinConversionValue, setHrMinConversionValue] = useState('');
    const [hrAndMinConversionResult, setHrAndMinConversionResult] = useState(null);
    const [alphabeticalOrderValue, setAlphabeticalOrderValue] = useState('');
    const [alphabeticalOrderResult, setAlphabeticalOrderResult] = useState('');
    const [stringSeparationValue, setStringSeparationValue] = useState('');
    const [stringSeparationResult, setStringSeparationResult] = useState(null);
    const [vowelCountValue, setVowelCountValue] = useState('');
    const [vowelCountResult, setVowelCountResult] = useState(0);
    const [checkAlphabetValue, setCheckAlphabetValue] = useState('');
    const [checkAlphabetResult, setCheckAlphabetResult] = useState(null);

    const onHrMinHandler = () => {
        let value = hrMinConversionValue.trim();
        let hour = Math.floor(value/60);
        let min = value % 60;
        let convertedValue = hour + ':' + min + ' OR ' + hour + ' hour(s) and ' + min + ' minute(s)';
        if(value === '') {
            alert('Fill the input.');
        } else {
            setHrAndMinConversionResult(convertedValue);
        }
    }

    const onOrderHandler = () => {
        let value = alphabeticalOrderValue.trim();
        let splitValue = value.split('').sort().join('');
        if(value === ''){
            alert('Fill the input.');
        } else if(value.length <= 1) {
            alert('Text length must be more than 1.');
        } else {
            setAlphabeticalOrderResult(splitValue);
        }
    }


    const onStringSeparationHandler = () => {
        let value = stringSeparationValue.trim();
        if(value === '') {
            alert('Fill the input.');
        } else {
            setStringSeparationResult(false);
            for(let i = 0; i < value.length - 4; i++) {
                if((value[i] === 'a' && value[i + 4] === 'b') || (value[i] === 'b' && value[i + 4] === 'a')) {
                    setStringSeparationResult(true);
                }
            }
        }
    }

    const onVowelCountHandler = () => {
        let value = vowelCountValue.trim();
        let lowerCaseValue = value.toLowerCase();
        let count = 0;

        if (value === '') {
            alert('Fill the input.');
        } else {
            for(let i = 0; i < lowerCaseValue.length; i++) {
                if((lowerCaseValue[i] === 'a') || (lowerCaseValue[i] === 'e') || (lowerCaseValue[i] === 'i') || (lowerCaseValue[i] === 'o') || (lowerCaseValue[i] === 'u')) {
                    count = count + 1;
                    setVowelCountResult(count);
                }
            }
        }
    }

    const onCheckEqualAlphabetHandler = () => {
        let value = checkAlphabetValue.trim().toLowerCase();
        console.log('value', value)
        let countP = 0;
        let countT = 0;
        for(let i = 0; i < value.length; i++) {
            if(value[i] === 'p') {
                countP = countP + 1;
            } else if((value[i] === 't')) {
                countT = countT + 1;
            }
        }
        if(value === '') {
            alert('Fill the input.');
        } else if((countP === 0) && (countT === 0)) {
            setCheckAlphabetResult(false);
        } else if(countP === countT) {
            setCheckAlphabetResult(true);
        } else {
            setCheckAlphabetResult(false);
        }
    }

    return(
        <div className="questionContainer">
            <HoursAndMinutes
                question={quesData[5]}
                hrMinConversionValue={hrMinConversionValue}
                setHrMinConversionValue={(val) => setHrMinConversionValue(val)}
                onHrMinHandler={onHrMinHandler}
                hrAndMinConversionResult={hrAndMinConversionResult}
            />
            <AlphabeticalOrder
                question={quesData[6]}
                alphabeticalOrderValue={alphabeticalOrderValue}
                setAlphabeticalOrderValue={(val) => setAlphabeticalOrderValue(val)}
                onOrderHandler={onOrderHandler}
                alphabeticalOrderResult={alphabeticalOrderResult}
            />
            <StringSeparation
                question={quesData[7]}
                stringSeparationValue={stringSeparationValue}
                setStringSeparationValue={(val) => setStringSeparationValue(val)}
                onStringSeparationHandler={onStringSeparationHandler}
                stringSeparationResult={stringSeparationResult}
            />
            <VowelCount
                question={quesData[8]}
                vowelCountValue={vowelCountValue}
                setVowelCountValue={(val) => setVowelCountValue(val)}
                onVowelCountHandler={onVowelCountHandler}
                vowelCountResult={vowelCountResult}
            />
            <ContainingPndT
                question={quesData[9]}
                checkAlphabetValue={checkAlphabetValue}
                setCheckAlphabetValue={(val) => setCheckAlphabetValue(val)}
                onCheckEqualAlphabetHandler={onCheckEqualAlphabetHandler}
                checkAlphabetResult={checkAlphabetResult}
            />
        </div>
    )
}

export default Ques51_55;