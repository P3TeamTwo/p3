import Button from '@material-ui/core/Button'
import './welcome.css'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

// //Import api routes to db
import API from '../../utils/API'
import React, { useEffect, useState } from 'react';


//import colourway buttons
import Colourways from '../../components/Colourways';
import Navbar from '../../components/Navbar'
import { GiConsoleController } from 'react-icons/gi';

const useStyle = makeStyles({

    buttonLeft: {
        padding: '50px 60px 50px 60px',
        borderRadius: '15px',
        backgroundColor: '#c8f4de',
        fontSize: '140%',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'
    },

    buttonRight: {
        padding: '50px 60px 50px 60px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        fontSize: '140%',
        "&:hover": {
            backgroundColor: '#a4ebf3',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'
    },
    toolbar: {
        backgroundColor: '#f5f5f5'
    }
})

function ButtonRight() {
    const classes = useStyle();
    const history = useHistory();

    const directToCalendar = () => {
        let path = '/calendar'
        history.push(path)
    }

    return <Button className={classes.buttonRight} onClick={directToCalendar}>My Reflections</Button>
}



const Welcome = () => {
   //Getting the user ID
   const userId = localStorage.getItem("userId");
    // Setting state to store the journl entries
    const [entries, setEntries] = useState();

    useEffect(() => {
        //Get all journal data for the user logged in 
        function fetchData() {

            API.getJournal(userId)
                .then(res => {
                    setEntries(res.data)
                }
                )
                .catch(err => console.log(err))
        }
        fetchData()

    }, [userId])
    console.log(entries)
    
    function ButtonLeft() {
        const classes = useStyle();
        const history = useHistory();
    
        const directToDaily = () => {
            let path = '/Daily'
            history.push(path)
        }
    
        return <Button className={classes.buttonLeft} onClick={todaysEntries}>Enter Journal</Button>
    }

//Check for entry matching todays date from array
function todaysEntries(){
    entries.forEach(item => {
        //Getting and formatting todays date
        let today = new Date()
        let ISOdate = today.toISOString()
        let formattedDate = ISOdate.split("T")[0]

        //Reformatting the date saved in the db as created_at
        let mongoDate = item.created_at.split("T")[0]
        if(mongoDate === formattedDate){
            console.log("you made an entry today")
        } else {
            directToDaily()
        }
    })
}



    return (
        // inline styling ensuring that the container div fills the whole screen
        <div className="welcomeContainer">
            <Navbar />
            <div className="mainContainer">
                <h1 className="welcomeHeader">Welcome to MindShare</h1>

                <h2 className="intro">MindShare is about noticing trends in your feelings and behaviors to allow you to make healthy choices for you and your wellbeing.</h2>
                {/* holds the functionality for typrewriter */}
                <div className="typewriter">
                    {/* Defines the text to be typewritered out  */}
                    <h3 className="talkLine" style={{fontSize: "1.25em"}}>Welcome to your safe space, lets talk!</h3>
                </div>
                {/* Container for buttons */}
                <Grid container direction="row" spacing={3} alignItems="center" justify="center">
                    <Grid item>
                        <ButtonLeft />
                    </Grid>
                    <Grid item>
                        <ButtonRight />
                    </Grid>
                </Grid>
            </div>
            <Colourways />

        </div>
    )
}

export default Welcome
