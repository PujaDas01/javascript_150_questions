import React, {useState} from "react";
import Divide from "../screens/Divide";
import { quesData } from "../services/quesData";

const Ques56_60 = () => {
    const [divisionFirstValue, setDivisionFirstValue] = useState('');
    const [divisionSecondValue, setDivisionSecondValue] = useState('');
    const [divisionOutput, setDivisionOutput] = useState('');

    const onDivisionHandler = () => {
        let value1 = divisionFirstValue.trim();
        let value2 = divisionSecondValue.trim();
        let val1 = Number(value1);
        let val2 = Number(value2);
        let divideValue = val1/val2;
        let fixedValue = divideValue.toFixed();
        let splitValue = fixedValue.split('').join(', ');
        if((value1 === '') || (value2 === '')) {
            alert('Fill the input(s).');
        } else if(val1 < val2) {
            alert('First input must be greater than second input.');
        } else {
            setDivisionOutput(splitValue);
        }
    }
    
    return(
        <div className="questionContainer">
            <Divide
                question={quesData[10]}
                divisionFirstValue={divisionFirstValue}
                setDivisionFirstValue={(val) => setDivisionFirstValue(val)}
                divisionSecondValue={divisionSecondValue}
                setDivisionSecondValue={(val) => setDivisionSecondValue(val)}
                onDivisionHandler={onDivisionHandler}
                divisionOutput={divisionOutput}
            />
        </div>
    )
}

export default Ques56_60;