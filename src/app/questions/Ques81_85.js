import React, { useState } from 'react';
import AddTwoPositiveIntegers from '../screens/AddTwoPositiveIntegers';
import { quesData } from '../services/quesData';

const Ques81_85 = () => {
    const [positiveIntegersValue, setPositiveIntegersValue] = useState('');
    const [positiveIntegersAddResult, setPositiveIntegersAddResult] = useState('');

    const onAddPositiveIntegersHandler = () => {
        let value = positiveIntegersValue.trim();
        if(!value || value.length < 3) {
            alert('Enter the value');
            return
        }
        let splitValue = value.split(',');
        for(let i = 0; i < splitValue.length; i++) {
            if(splitValue[i] === '' || isNaN(splitValue[i]) ) {
                alert('Value must be a number.');
                return
            }
        }
        let parseIntValue = splitValue.map((item) => parseInt(item));
        if(value.includes('-')) {
            alert('Negative numbers are not allowed.')
        } else if((parseIntValue.length < 2) || (parseIntValue.length > 2)) {
            alert('Value length must be 2.');
        } else {
            let sum = 0;
            parseIntValue.forEach((num) => sum = sum + num);
            setPositiveIntegersAddResult(sum);
        }
    }

    return(
        <div className='questionContainer'>
            <AddTwoPositiveIntegers
                question={quesData[35]}
                positiveIntegersValue={positiveIntegersValue}
                setPositiveIntegersValue={(val) => setPositiveIntegersValue(val)}
                onAddPositiveIntegersHandler={onAddPositiveIntegersHandler}
                positiveIntegersAddResult={positiveIntegersAddResult}
            />
        </div>
    )
}

export default Ques81_85;
