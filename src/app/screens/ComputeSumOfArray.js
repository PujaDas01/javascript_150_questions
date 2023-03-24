import React from 'react';
import PureButton from '../component/PureButton';
import PureInput from '../component/PureInput';
import QuestionLayout from '../component/QuestionLayout';

const ComputeSumOfArray = (props) => {   
  return (
    <QuestionLayout question={props.question.quesNo + '. ' + props.question.ques}>
        
        {props.setInsertArrayValue ? (
            <>
                <PureInput
                    placeholder='Enter number'
                    labelText='Enter Number'
                    inputId='insertArray'
                    value={props.insertArrayValue}
                    onChange={(e) => props?.setInsertArrayValue(e.target.value)}
                />
                <PureButton
                    buttonText='Submit Numbers'
                    onClick={props.onsubmitNumHandler}
                />
                <h2 style={{paddingTop:'10px'}}>{props.takeArrayValue}</h2>
                <PureButton
                    buttonText='Add'
                    onClick={props.onArraySumHandler}
                />
                <p className='resultText'>Output: {props.arraySumResult}</p>
            </>
        ) : (
                <>
                    <PureInput
                        labelText='Enter Numbers'
                        placeholder='Enter Number'
                        inputId='numberEntered'
                        value={props.numberEntered}
                        onChange={(e) => props.setNumberEntered(e.target.value)}
                    />
                    <h3 style={{paddingTop:'10px'}}>Your entered value is: {props.numberArray.toString()}</h3>
                    <PureButton
                        buttonText='Submit'
                        onClick={props.onArrayHandler}
                    />
                    <p className='resultText'>Output: {props.arrayResult}</p>
                </>
        )}
    </QuestionLayout>
  )
}

export default ComputeSumOfArray;
