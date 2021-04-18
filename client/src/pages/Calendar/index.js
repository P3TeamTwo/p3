import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import Calendar from '../../components/Calendar'
import './calendar.css'
import Memo from '../../pages/Memo/Memo'
import Navbar from '../../components/Navbar'
import API from '../../utils/API';



import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({

    buttonLeft: {
        // padding: '5px 5px ',
        margin: "10px auto 0 auto",
        width: '100%',
        borderRadius: '15px',
        backgroundColor: '#bad7df',
        color: 'black',
        fontSize: '20px',
        display: 'block',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'

    }
})


function ButtonTop() {
    const classes = useStyle();
    const history = useHistory();

    const directToDaily = () => {
        let path = '/Graphs'
        history.push(path)
    }

    return <Button className={classes.buttonLeft} onClick={directToDaily}>View Data</Button>
}

const CalendarPage = (mode) => {

    const [calDate, setCalDate] = useState({
        mode: ""
    })

    useEffect(() => {
        makeEvent()
    })



    const onDay = (details) => {

        let month = details.month + 1;
        if (month < 10) {
            month = `0${month}`
        }
        let day = details.day ;
        if (day < 10) {
            day = `0${day}`
        }

        const date = `${details.year}-${month}-${day}`
        setCalDate({
            "mode": details.mode,
            "date": date
        });
    }

    const userId = localStorage.getItem("userId");
    const [moods, setMoods] = useState();
    const events = [];
    const makeEvent = () => {
        API.getJournal(userId)
            .then((res) => {
                res.data.map((reflection) => {
                    if (reflection.moodState === 'Very Unhappy') {
                        const event = {
                            id: reflection._id,
                            color: "#1a508b",
                            from: reflection.created_at,
                            to: reflection.created_at,

                            title: reflection.moodState,

                            src: reflection.voiceMemo,
                            longForm: reflection.longForm
                        }
                        events.push(event)
                    } else if (reflection.moodState === 'Unhappy') {
                        const event = {
                            id: reflection._id,
                            color: "#a6dcef",
                            from: reflection.created_at,
                            to: reflection.created_at,

                            title: reflection.moodState,

                            src: reflection.voiceMemo,
                            longForm: reflection.longForm
                        }
                        events.push(event)
                    } else if (reflection.moodState === 'Ok') {
                        const event = {
                            id: reflection._id,
                            color: "#957dad",
                            from: reflection.created_at,
                            to: reflection.created_at,

                            title: reflection.moodState,

                            src: reflection.voiceMemo,
                            longForm: reflection.longForm
                        }
                        events.push(event)
                    } else if (reflection.moodState === 'Happy') {
                        const event = {
                            id: reflection._id,
                            color: "#a7d7c5",
                            from: reflection.created_at,
                            to: reflection.created_at,

                            title: reflection.moodState,

                            src: reflection.voiceMemo,
                            longForm: reflection.longForm
                        }
                        events.push(event)
                    } else if (reflection.moodState === 'Very Happy') {
                        const event = {
                            id: reflection._id,
                            color: "#ffaaa5",
                            from: reflection.created_at,
                            to: reflection.created_at,

                            title: reflection.moodState,

                            src: reflection.voiceMemo,
                            longForm: reflection.longForm
                        }
                        events.push(event)
                    }
                    
                })
                setMoods(events)
            })
    }



    return (
        <div className="calendarContainer">
            <Navbar />
            <div className="Container">

                <Grid container   justify="center">

                    <Grid item xs={12}>
                    <h1 style={{marginTop: "-15px"}}> Your Journal Entries</h1>                   
                     </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <Calendar onDay={onDay} moods={moods} />
                        {/* when mode of cal is in daily mode > memo > entry then displays each card */}
                        {(calDate.mode === "dailyMode") && <Memo style={{ marginLeft: 50, marginRight: 50 }} date={calDate.date} />}
                        <ButtonTop />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default CalendarPage;
