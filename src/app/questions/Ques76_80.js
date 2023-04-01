import React, { useState } from 'react'
import FirstLastArrayElement from '../screens/FirstLastArrayElement';
import { quesData } from '../services/quesData';

const Ques76_80 = () => {

    const [firstLastArrayValue, setFirstLastArrayValue] = useState('');
    const [firstLastArrayResult, setFirstLastArrayResult] = useState([]);

    const onFirstLastArrayValueHandler = () => {
        let value = firstLastArrayValue.trim();
        let splitArr = value.split(',');
        let filterArr = splitArr.filter((val) => val !== '');
        if(!value) {
            alert('Fill the input.');
        } else if(filterArr.length < 1) {
            alert('Enter a proper value.');
        } else if (filterArr.length >= 1) {
            let newArray = [splitArr[0], splitArr[splitArr.length-1]];
            setFirstLastArrayResult(newArray);
        }
    }

  return (
    <div className='questionContainer'>
        <FirstLastArrayElement
            question={quesData[30]}
            firstLastArrayValue={firstLastArrayValue}
            setFirstLastArrayValue={(val) => setFirstLastArrayValue(val)}
            onFirstLastArrayValueHandler={onFirstLastArrayValueHandler}
            firstLastArrayResult={firstLastArrayResult}
        />
    </div>
  )
}

export default Ques76_80;
