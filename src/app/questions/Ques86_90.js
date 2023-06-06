import React, {useState} from 'react';
import TypesOfAngle from '../screens/TypesOfAngle';
import { quesData } from '../services/quesData';
import SimilarArray from '../screens/SimilarArray';
import TwoIntegersDivisor from '../screens/TwoIntegersDivisor';
import ReplaceSigns from '../screens/ReplaceSigns';
import GreatestArrayElement from '../screens/GreatestArrayElement';

const Ques86_90 = () => {

  const [angleValue, setAngleValue] = useState('');
  const [angleResult, setAngleResult] = useState('');
  const [divideValue, setDivideValue] = useState('');
  const [divideIntegersResult, setDivideIntegersResult] = useState(null);
  const [replaceSignValue, setReplaceSignValue] = useState('');
  const [replaceSignResult, setReplaceSignResult] = useState(null);
  const [greatestArrayElement, setGreatestArrayElement] = useState('');
  const [greatestArrayElementResult, setGreatestArrayElementResult] = useState('');

  const findAngleHandler = () => {
    let value = angleValue.trim();
    let angle = Number(value);
    if(!value) {
      alert('Please enter angle.');
    } else if((angle < 0) || (angle > 180)) {
      alert('Value must be set between 0 to 180');
    } else if(angle >= 0 && angle < 90) {
      setAngleResult('Acute angle');
    } else if (angle === 90) {
      setAngleResult('Right angle');
    } else if ((angle > 90) && (angle < 180)) {
      setAngleResult('Obtuse angle');
    } else if (angle === 180){
      setAngleResult('Straight line');
    }
  }

  const checkDivideHandler = () => {
    let value = divideValue.split(',');
    let checkArray = value.filter((element) => element !== ' ');
    if(checkArray.length < 3 || checkArray.length > 3) {
      alert('Please fill the number, number length must be 3');
    } else if(checkArray.length === 3) {
        if((checkArray[0] % checkArray[2] === 0 && checkArray[1] % checkArray[2] === 0) || (checkArray[0] % checkArray[2] !== 0 && checkArray[1] % checkArray[2] !== 0)) {
          setDivideIntegersResult(true);
        } else {
          setDivideIntegersResult(false);
        }
    }
  }

  const replaceSignHandler = () => {
    let value = replaceSignValue.split(',');
    let checkArray = value.filter((element) => element !== ' ');
    let x = Number(checkArray[0]);
    let y = Number(checkArray[1]);
    let result = Number(checkArray[2]);
    if(checkArray.length < 3 || checkArray.length > 3) {
      alert('Please fill the number, number length must be 3');
    } else if(checkArray.length === 3) {
        if((x + y === result) || (x * y === result) || (x / y === result) || (x - y === result)) {
          setReplaceSignResult(true);
        } else {
          setReplaceSignResult(false);
        }
    }
  }

  const greatestArrayElementHandler = () => {
    // Need to continue later on
  }
  
  return (
    <div className='questionContainer'>
      <TypesOfAngle
        question={quesData[40]}
        angleValue={angleValue}
        setAngleValue={(val) => setAngleValue(val)}
        findAngleHandler={findAngleHandler}
        angleResult={angleResult}
      />
      <SimilarArray
        question={quesData[41]}
        // Need to continue later on...
      />
      <TwoIntegersDivisor
        question={quesData[42]}
        divideValue={divideValue}
        setDivideValue={(val) => setDivideValue(val)}
        checkDivideHandler={checkDivideHandler}
        divideIntegersResult={divideIntegersResult}
      />
      <ReplaceSigns
        question={quesData[43]}
        replaceSignValue={replaceSignValue}
        setReplaceSignValue={(val) => setReplaceSignValue(val)}
        replaceSignHandler={replaceSignHandler}
        replaceSignResult={replaceSignResult}
      />
      <GreatestArrayElement
        question={quesData[44]}
        greatestArrayElement={greatestArrayElement}
        setGreatestArrayElement={(val) => setGreatestArrayElement(val)}
        greatestArrayElementHandler={greatestArrayElementHandler}
        greatestArrayElementResult={greatestArrayElementResult}
      />
    </div>
  )
}

export default Ques86_90;
