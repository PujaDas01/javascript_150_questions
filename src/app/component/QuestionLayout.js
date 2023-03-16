import React from "react";

const QuestionLayout = (props) => {
    return(
        <div className="questionWrapper">
            <h3 className="question">{props.question}</h3>
            {props.children}
        </div>
    )
}

export default QuestionLayout;