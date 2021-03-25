import React, { useState, useEffect } from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles } from '@material-ui/core';
//Import api routes to db
import API from '../../utils/API'
// Import question components
import MoodSlider from '../../components/QComponents/MoodSlider';
import Q1_1 from '../../components/QComponents/Q1_1';
import Q1_2 from '../../components/QComponents/Q1_2';
import Q1_3 from '../../components/QComponents/Q1_3';
import Q1_4 from '../../components/QComponents/Q1_4';


import Q2 from '../../components/QComponents/Q2';
import Q3 from '../../components/QComponents/Q3';
import Q4 from '../../components/QComponents/Q4';
// import Results from '../../components/Results';

const DailyReflection = () => {

  // State that checks what component to render
  const [moodVisible, setMoodVisible] = useState(true)
  const [q1_1Visible, setQ1_1Visible] = useState(false)
  const [q1_2Visible, setQ1_2Visible] = useState(false)
  const [q1_3Visible, setQ1_3Visible] = useState(false)
  const [q1_4Visible, setQ1_4Visible] = useState(false)

  const [q2Visible, setQ2Visible] = useState(false)
  const [q3Visible, setQ3Visible] = useState(false)
  const [q4Visible, setQ4Visible] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  // Getting User
  const userId = localStorage.getItem("userId");

  // State that stores value from answer
  const [emotion, setEmotion] = useState('2');
  const [q1_1, setQ1_1] = useState('')
  const [q1_2, setQ1_2] = useState('')
  const [q1_3, setQ1_3] = useState('')
  const [q1_4, setQ1_4] = useState('')

  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')

  // State that stores the points
  const [emotionPoints, setEmotionPoints] = useState(30)
  // const [q1Points, setQ1Points] = useState(0)
  // const [q2Points, setQ2Points] = useState(0)
  // const [q3Points, setQ3Points] = useState(0)
  // const [q4Points, setQ4Points] = useState(0)
  // const [showResults, setShowResults] = useState(false);
  // const [finalScore, setFinalScore] = useState(0);
 
  // Set points for current mood
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
        return setEmotion('2') + setEmotionPoints(30);
    }
};

// Setting the score total to start at 0
let total= 0;

//Save complete response to the databases
function storeResponses() {
  // total = emotionPoints + q1Points + q2Points + q3Points + q4Points

  // setQuizComplete(false)
  // setShowResults(true)
  // setFinalScore(total)
  
  API.saveJournal({ 
    postedBy: userId,
    mood: emotion, moodPoints: emotionPoints,
    q1_1: q1_1, 
    q1_2: q1_2, 
    q1_3: q1_3, 
    q1_4: q1_4, 

    // q1Points: q1Points,
    q2: q2, 
    // q2Points: q2Points,
    q3: q3, 
    // q3Points: q3Points,
    q4: q4, 
    // q4Points: q4Points,
    // finalScore: total
  })
  // console.log("ill save your answers now")
  // console.log(total)
}


// Run switch case once emotion has been set
useEffect(() => {
  renderMoodPoints()
}, [emotion]);


  // Function to handle what happens when the submit button is clicked
  function handleSubmit (e, getEmotion, getQ1_1, getQ1_2, getQ1_3, getQ1_4, getQ2, getQ3, getQ4) {
    // Do not submit until checks have completed
    e.preventDefault()

    if (moodVisible === true) {
      
      setEmotion(getEmotion)

      setMoodVisible(false);
      setQ1_1Visible(true)
      
    } else if (q1_1Visible === true)  {
      
      setQ1_1(getQ1_1)

      setQ1_1Visible(false)
      setQ1_2Visible(true)

    } else if (q1_2Visible === true)  {

      setQ1_2(getQ1_2)

      setQ1_2Visible(false)
      setQ1_3Visible(true)

    } else if (q1_3Visible === true)  {
      
      setQ1_3(getQ1_3)

      setQ1_3Visible(false)
      setQ1_4Visible(true)

    } else if (q1_4Visible === true) {
    
      setQ1_4(getQ1_4)
      // setQ1Points(parseInt(getQ1Points))

      setQ1_4Visible(false)
      setQ2Visible(true)

    } else if (q2Visible === true) {

      setQ2(getQ2)
      // setQ2Points(parseInt(getQ2Points))

      setQ2Visible(false)
      setQ3Visible(true)

    } else if (q3Visible === true) {

      setQ3(getQ3)
      // setQ3Points(parseInt(getQ3Points))

      setQ3Visible(false)
      setQ4Visible(true)

    } else if (q4Visible === true) {

      setQ4(getQ4)
      // setQ4Points(parseInt(getQ4Points))

      setQ4Visible(false)
      setQuizComplete(true)

    }
  };

  // if (quizComplete) {
  //   tallyScore(emotionPoints, q1Points, q2Points, q3Points, q4Points)
  // }

  // function tallyScore(slider, q1p, q2p, q3p, q4p) {
  //   let totalPoints = slider + q1p + q2p + q3p + q4p 
  //   console.log('user total points is: ', totalPoints)
  // }

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
                {/* dynamically render components */}
                {moodVisible === true ? <MoodSlider handleSubmit={handleSubmit}/> :

                q1_1Visible === true ? <Q1_1 handleSubmit={handleSubmit}/> :
                q1_2Visible === true ? <Q1_2 handleSubmit={handleSubmit}/> :
                q1_3Visible === true ? <Q1_3 handleSubmit={handleSubmit}/> :
                q1_4Visible === true ? <Q1_4 handleSubmit={handleSubmit}/> : 

                q2Visible === true ? <Q2 handleSubmit={handleSubmit}/> : 
                q3Visible === true ? <Q3 handleSubmit={handleSubmit}/> :
                q4Visible === true ? <Q4 handleSubmit={handleSubmit}/> : 
                quizComplete === true ? <button onClick={storeResponses}>end quiz</button> : null}
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
};
export default DailyReflection;