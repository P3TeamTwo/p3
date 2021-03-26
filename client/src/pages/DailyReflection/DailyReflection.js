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
import Q2_1 from '../../components/QComponents/Q2_1';
import Q2_2 from '../../components/QComponents/Q2_2';
import Q2_3 from '../../components/QComponents/Q2_3';
import Q3_1 from '../../components/QComponents/Q3_1';
import Q3_2 from '../../components/QComponents/Q3_2';
import Q3_3 from '../../components/QComponents/Q3_3';
import Q4_1 from '../../components/QComponents/Q4_1';
import Q4_2 from '../../components/QComponents/Q4_2';
import Q4_3 from '../../components/QComponents/Q4_3';
<<<<<<< HEAD
import Q4_4 from '../../components/QComponents/Q4_4';
import LongForm from '../../components/QComponents/LongForm'

=======
>>>>>>> main

// import Results from '../../components/Results';

const DailyReflection = () => {

  // State that checks what component to render
  const [moodVisible, setMoodVisible] = useState(true)
  const [q1_1Visible, setQ1_1Visible] = useState(false)
  const [q1_2Visible, setQ1_2Visible] = useState(false)
  const [q1_3Visible, setQ1_3Visible] = useState(false)
  const [q2_1Visible, setQ2_1Visible] = useState(false)
  const [q2_2Visible, setQ2_2Visible] = useState(false)
  const [q2_3Visible, setQ2_3Visible] = useState(false)
  const [q3_1Visible, setQ3_1Visible] = useState(false)
  const [q3_2Visible, setQ3_2Visible] = useState(false)
  const [q3_3Visible, setQ3_3Visible] = useState(false)
  const [q4_1Visible, setQ4_1Visible] = useState(false)
  const [q4_2Visible, setQ4_2Visible] = useState(false)
  const [q4_3Visible, setQ4_3Visible] = useState(false)

  const [longFormVisible, setLongFormVisible] = useState(false)

  const [quizComplete, setQuizComplete] = useState(false)

  // Getting User
  const userId = localStorage.getItem("userId");

  // State that stores value from answer
  const [emotion, setEmotion] = useState('2');
  const [q1_1, setQ1_1] = useState('')
  const [q1_2, setQ1_2] = useState('')
  const [q1_3, setQ1_3] = useState('')
  const [q2_1, setQ2_1] = useState('')
  const [q2_2, setQ2_2] = useState('')
  const [q2_3, setQ2_3] = useState('')
  const [q3_1, setQ3_1] = useState('')
  const [q3_2, setQ3_2] = useState('')
  const [q3_3, setQ3_3] = useState('')
  const [q4_1, setQ4_1] = useState('')
  const [q4_2, setQ4_2] = useState('')
  const [q4_3, setQ4_3] = useState('')

  const [longForm, setLongForm] = useState('')

  // State that stores the points
  const [emotionPoints, setEmotionPoints] = useState(30)


  // Set points for current mood
  function renderMoodPoints() {
    switch (emotion) {
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


<<<<<<< HEAD
  //Save complete response to the databases
  function storeResponses() {

    API.saveJournal({
      postedBy: userId,
      mood: emotion, moodPoints: emotionPoints,
      q1_1: q1_1,
      q1_2: q1_2,
      q1_3: q1_3,
      q1_4: q1_4,

      q2_1: q2_1,
      q2_2: q2_2,
      q2_3: q2_3,
      q2_4: q2_4,

      q3_1: q3_1,
      q3_2: q3_2,
      q3_3: q3_3,
      q3_4: q3_4,
=======
//Save complete response to the databases
function storeResponses() {

  API.saveJournal({
    postedBy: userId,
    mood: emotion, moodPoints: emotionPoints,
    q1_1: q1_1,
    q1_2: q1_2,
    q1_3: q1_3,

    q2_1: q2_1,
    q2_2: q2_2,
    q2_3: q2_3,

    q3_1: q3_1,
    q3_2: q3_2,
    q3_3: q3_3,

    q4_1: q4_1,
    q4_2: q4_2,
    q4_3: q4_3,
>>>>>>> main

      q4_1: q4_1,
      q4_2: q4_2,
      q4_3: q4_3,
      q4_4: q4_4,
      longForm: longForm
    });
  }


  // Run switch case once emotion has been set
  useEffect(() => {
    renderMoodPoints()
  }, [emotion]);


  // Function to handle what happens when the submit button is clicked
  function handleSubmit(e, getEmotion, getQ1_1, getQ1_2, getQ1_3, getQ2_1, getQ2_2, getQ2_3, getQ3_1, getQ3_2, getQ3_3, getQ4_1, getQ4_2, getQ4_3,) {
    // Do not submit until checks have completed
    e.preventDefault()

    if (moodVisible === true) {

      setEmotion(getEmotion)

      setMoodVisible(false);
      // setLongFormVisible(true)

      setQ1_1Visible(true)

    } else if (q1_1Visible === true) {

      setQ1_1(getQ1_1)

      setQ1_1Visible(false)
      setQ1_2Visible(true)

    } else if (q1_2Visible === true) {

      setQ1_2(getQ1_2)

      setQ1_2Visible(false)
      setQ1_3Visible(true)

    } else if (q1_3Visible === true) {

      setQ1_3(getQ1_3)

      setQ1_3Visible(false)
      setQ2_1Visible(true)

    } else if (q2_1Visible === true) {

      setQ2_1(getQ2_1)

      setQ2_1Visible(false)
      setQ2_2Visible(true)

    } else if (q2_2Visible === true) {

      setQ2_2(getQ2_2)

      setQ2_2Visible(false)
      setQ2_3Visible(true)

    } else if (q2_3Visible === true) {

      setQ2_3(getQ2_3)

      setQ2_3Visible(false)
      setQ3_1Visible(true)

    } else if (q3_1Visible === true) {

      setQ3_1(getQ3_1)

      setQ3_1Visible(false)
      setQ3_2Visible(true)

    } else if (q3_2Visible === true) {

      setQ3_2(getQ3_2)

      setQ3_2Visible(false)
      setQ3_3Visible(true)

    } else if (q3_3Visible === true) {

      setQ3_3(getQ3_3)

      setQ3_3Visible(false)
      setQ4_1Visible(true)

    } else if (q4_1Visible === true) {

      setQ4_1(getQ4_1)

      setQ4_1Visible(false)
      setQ4_2Visible(true)

    } else if (q4_2Visible === true) {

      setQ4_2(getQ4_2)

      setQ4_2Visible(false)
      setQ4_3Visible(true)

    } else if (q4_3Visible === true) {

      setQ4_3(getQ4_3)

      setQ4_3Visible(false)
      setLongFormVisible(true)

    }
  };

  const longFormSubmit = (e, getLongForm) => {
    e.preventDefault()
    setLongForm(getLongForm)
    console.log(getLongForm)
    setLongFormVisible(false)
    setQuizComplete(true)
  }

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
          <Grid className='gridPadding' item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {/* dynamically render components */}
              {moodVisible === true ? <MoodSlider handleSubmit={handleSubmit} /> :

                q1_1Visible === true ? <Q1_1 handleSubmit={handleSubmit} /> :
                  q1_2Visible === true ? <Q1_2 handleSubmit={handleSubmit} /> :
                    q1_3Visible === true ? <Q1_3 handleSubmit={handleSubmit} /> :

                      q2_1Visible === true ? <Q2_1 handleSubmit={handleSubmit} /> :
                        q2_2Visible === true ? <Q2_2 handleSubmit={handleSubmit} /> :
                          q2_3Visible === true ? <Q2_3 handleSubmit={handleSubmit} /> :

                            q3_1Visible === true ? <Q3_1 handleSubmit={handleSubmit} /> :
                              q3_2Visible === true ? <Q3_2 handleSubmit={handleSubmit} /> :
                                q3_3Visible === true ? <Q3_3 handleSubmit={handleSubmit} /> :

                                  q4_1Visible === true ? <Q4_1 handleSubmit={handleSubmit} /> :
                                    q4_2Visible === true ? <Q4_2 handleSubmit={handleSubmit} /> :
                                      q4_3Visible === true ? <Q4_3 handleSubmit={handleSubmit} /> :

                                        longFormVisible === true ? <LongForm handleSubmit={longFormSubmit} /> :

                                          quizComplete === true ? <button onClick={storeResponses}>end quiz</button> : null}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};
export default DailyReflection;