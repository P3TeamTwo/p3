import React, { useState } from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Button } from '@material-ui/core';
import questions from "../../Questions.json"




const RadioQuestion = ({ radioValue, handleClick}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionTotal = 5


    // Function to invoke the next question
    function nextQuestion() {
        console.log("Radio question submit has been clicked")
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionTotal) {
            setCurrentQuestion(nextQuestion);
        } else {
            console.log("End of Questions - show dashboard")
        }
    }

    return (
        <>
            <b>Radio buttons</b>
            <FormControl component="fieldset">
                <FormLabel component="legend">{questions[currentQuestion].questionText}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={radioValue} onChange={handleClick}>
                    {questions[currentQuestion].answerOptions.map((answerOption) => {
                        console.log(answerOption)
                        return (
                            <FormControlLabel key={questions.id} value={answerOption} control={<Radio />} label={answerOption} />
                        )
                    })}
                </RadioGroup>

                {/* <Button variant="outlined" onClick={nextQuestion}>SUBMIT</Button> */}
            </FormControl>
        </>
    )
}

export default RadioQuestion;