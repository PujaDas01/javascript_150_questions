import React, { useState } from "react";
import ConcatenateStrings from "../screens/ConcatenateStrings";
import { quesData } from "../services/quesData";

const Ques61_65 = () => {

    const [concatenateValue1, setConcatenateValue1] = useState('');
    const [concatenateValue2, setConcatenateValue2] = useState('');
    const [concatenateStringsResult, setConcatenateStringsResult] = useState('');

    const onConcatenateStringsHandler = () => {
        let value1 = concatenateValue1.trim();
        let value2 = concatenateValue2.trim();
        let extractedPart1 = value1.substring(1, value1.length);
        let extractedPart2 = value2.substring(1, value2.length);
        let concatenatedValues = extractedPart1 + extractedPart2;
        if((value1 === '') || (value2 === '')) {
            alert('Fill the input(s).');
        } else if((value1.length < 2) || (value2.length < 2)) {
            alert('Input length must be greater than 2.');
        } else {
            setConcatenateStringsResult(concatenatedValues);
        }
    }

    return(
        <div className="questionContainer">
            <ConcatenateStrings
                question={quesData[15]}
                concatenateValue1={concatenateValue1}
                setConcatenateValue1={(val) => setConcatenateValue1(val)}
                concatenateValue2={concatenateValue2}
                setConcatenateValue2={(val) => setConcatenateValue2(val)}
                onConcatenateStringsHandler={onConcatenateStringsHandler}
                concatenateStringsResult={concatenateStringsResult}
            />
        </div>
    )
}

export default Ques61_65;
