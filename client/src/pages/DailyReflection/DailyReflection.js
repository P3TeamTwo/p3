import React, { useState, useEffect } from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles } from '@material-ui/core';

// Import question components
import MoodSlider from '../../components/QComponents/MoodSlider';
import Q1 from '../../components/QComponents/Q1';
import Q2 from '../../components/QComponents/Q2';
import Q3 from '../../components/QComponents/Q3';
import Q4 from '../../components/QComponents/Q4';

// Importing the api for db
// import API from '../../utils/API';

const DailyReflection = () => {

  // State that checks what component to render
  const [moodVisible, setMoodVisible] = useState(true)
  const [q1Visible, setQ1Visible] = useState(false)
  const [q2Visible, setQ2Visible] = useState(false)
  const [q3Visible, setQ3Visible] = useState(false)
  const [q4Visible, setQ4Visible] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  // State that stores value from answer and answer points
  const [emotion, setEmotion] = useState('2');
  const [emotionPoints, setEmotionPoints] = useState(0)
  const [q1, setQ1] = useState('')
  const [q1Points, setQ1Points] = useState(0)
  const [q2, setQ2] = useState('')
  const [q2Points, setQ2Points] = useState(0)
  const [q3, setQ3] = useState('')
  const [q3Points, setQ3Points] = useState(0)
  const [q4, setQ4] = useState('')
  const [q4Points, setQ4Points] = useState(0)
  
  // Switch case function to set points based on what emotion value is
  function renderMoodPoints() {
    switch(emotion) {
        case '0':
        return setEmotionPoints(10);
        case '1': 
        return setEmotionPoints(20);
        case '2': 
        return setEmotionPoints(30);
        case '3':
        return setEmotionPoints(40);
        case '4':
        return setEmotionPoints(50);
        default:
        return setEmotionPoints(30);
    }
};

// Switch case function to set points based on what q1 value is
function renderQ1Points() {
  switch(q1) {
      case 'true':
      return setQ1Points(100);
      case 'false': 
      return setQ1Points(50);
      default:
      return setEmotionPoints(0);
  }
};

// Use effect to run the switch case function once emotion has been set
useEffect(() => {
        
  renderMoodPoints()
}, [emotion]);

// Use effect to run the switch case function once q1 has been set
useEffect(() => {
        
  renderQ1Points()
}, [q1]);


  // Function to handle what happens when the submit button is clicked
    function handleSubmit (e, getEmotion, getQ1) {
    
    // Do not submit until checks have completed
    e.preventDefault()

    if (moodVisible === true) {
      
      setEmotion(getEmotion)
      // API.save(getEmotion) example of how to save into db potentially

      setMoodVisible(false);
      setQ1Visible(true)

    } else if (q1Visible === true) {

      setQ1(getQ1)

      setQ1Visible(false)
      setQ2Visible(true)

    } else if (q2Visible === true) {

      setQ2Visible(false)
      setQ3Visible(true)

    } else if (q3Visible === true) {

      setQ3Visible(false)
      setQ4Visible(true)

    } else if (q4Visible === true) {
      setQ4Visible(false)
      setQuizComplete(true)
    }
  };
  
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

  const classes = useStyles();
  return (
    <div>

      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={3}>
          <Grid className='gridPadding'  item xs={12} sm={6}>
            <Paper className={classes.paper}>

                {/* Multi ternary operator to render each component */}
                {moodVisible === true ? <MoodSlider handleSubmit={handleSubmit}/> :
                q1Visible === true ? <Q1 handleSubmit={handleSubmit}/> : 
                q2Visible === true ? <Q2 handleSubmit={handleSubmit}/> : 
                q3Visible === true ? <Q3 handleSubmit={handleSubmit}/> :
                q4Visible === true ? <Q4 handleSubmit={handleSubmit}/> : 
                quizComplete === true ? <p>completed quiz</p> : null}

              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default DailyReflection;
