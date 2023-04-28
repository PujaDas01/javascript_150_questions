import React, {useState} from 'react';
import TypesOfAngle from '../screens/TypesOfAngle';
import { quesData } from '../services/quesData';

const Ques86_90 = () => {

  const [angleValue, setAngleValue] = useState('');
  const [angleResult, setAngleResult] = useState('');

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
  return (
    <div className='questionContainer'>
      <TypesOfAngle
        question={quesData[40]}
        angleValue={angleValue}
        setAngleValue={(val) => setAngleValue(val)}
        findAngleHandler={findAngleHandler}
        angleResult={angleResult}
      />
    </div>
  )
}

export default Ques86_90;
