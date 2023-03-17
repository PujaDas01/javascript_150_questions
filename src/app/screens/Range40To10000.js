import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const Range40To10000 = (props) => {
    return(
        <>
            <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
                <PureInput 
                    placeholder='Enter Range Number'
                    inputId='range'
                    labelText='Check the range:'
                    value={props.range}
                    onChange={(e) => props.setRange(e.target.value)}
                    // inputStyle={{border: '2px solid red', color: 'blue'}} demo
                    // labelStyle={{borderBottom: '2px solid red', color: 'blue'}} demo
                />
                <PureInput 
                    placeholder='First Number'
                    inputId='range1'
                    labelText='Range 1'
                    value={props.rangeValue1}
                    onChange={(e) => props.setRangeValue1(e.target.value)}
                />
                <PureInput 
                    placeholder='Second Number'
                    inputId='range2'
                    labelText='Range 2'
                    value={props.rangeValue2}
                    onChange={(e) => props.setRangeValue2(e.target.value)}
                />
                <PureButton 
                    buttonText='Check'
                    onClick={props.onRangeHandler}
                />
                <p className="resultText">Output: {(props.rangeResult != null) && (props.rangeResult === true ? 'True' : 'False')}</p>
            </QuestionLayout>
        </>
    )
}

export default Range40To10000;
