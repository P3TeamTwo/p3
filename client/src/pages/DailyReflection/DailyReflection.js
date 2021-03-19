import React, {useState} from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles, TextField, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Button } from '@material-ui/core';
// Import Navbar
// import Navbar from '../../components/Navbar';
// Import mood slider
import MoodSlider from '../../components/MoodSlider';
//Importing Radio button style quesetion format
// import RadioBtnQFormat from '../../components/RadioBtnQFormat'
//importing long form style question format 
// import LongForm from '../../components/LongFormQFormat'
//importing questions
import questions from "../../questions/Questions.json"

const DailyReflection = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const questionTotal = 5
  console.log(questions)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [radioValue, setRadioValue] = useState('');
  const [moodSlider, setMoodSlider] = useState(true);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  
  // Function that will kick off the questions
  function startQuestions() {
    console.log("Mood slider submit has been clicked")
    
  }
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
  const classes = useStyles();
  return (
    <div>
      {/* <Navbar/> */}
      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={3}>
          {/* COLUMN */}
          <Grid className='gridPadding' item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <b>Daily Reflection</b>
              <p>How are you feeling today?</p>
              {/* Importing the mood slider */}
              <MoodSlider
                // Start questions function will be called in mood slider
                handleClick={startQuestions}
              />
            </Paper>
            <Paper className={classes.paper}>
              <b>Radio buttons</b>
              {/* Importing the mood slider */}
              {/* <RadioBtnQFormat 
              handleClick={nextQuestion}
              /> */}


              <FormControl component="fieldset">
                <FormLabel component="legend">{questions[currentQuestion].questionText}</FormLabel>
                {/* removed value and onChange below */}
                <RadioGroup aria-label="gender" name="gender1" value={radioValue} onChange={handleChange}>
                  {questions[currentQuestion].answerOptions.map((answerOption) => {
                    console.log(answerOption)
                    return (
                    <FormControlLabel key={questions.id} value={answerOption} control={<Radio />} label={answerOption} />
                    )
                  })}
                </RadioGroup>

                <Button variant="outlined" onClick={nextQuestion}>SUBMIT</Button>
              </FormControl>
            </Paper>
          </Grid>
          {/* COLUMN */}
          {/* <Grid className='gridPadding' item xs={12} sm={6}>
            <Paper className={classes.paper}> */}
          {/* FORM */}
          {/* <LongForm />
            </Paper>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  )
}
export default DailyReflection;