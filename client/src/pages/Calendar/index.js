import React from 'react'
import Button from '@material-ui/core/Button'
import './calendar.css'
import { useHistory } from 'react-router-dom'
import Calendar from '../../components/Calendar'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        fontSize: '40px',
        color: 'black',
        padding: '5px 30px',
        borderRadius: '5',
        marginBottom: '20',
    },
    buttonLeft: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#ccffbd',
        color: 'black',
        fontSize: '30px',
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        }
    },
    buttonRight: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        color: 'black',
        fontSize: '30px',
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#a4ebf3',
            color: 'white'
        }
    }
})

function WelcomeHeader() {
    const classes = useStyle();

    return <h1 className={classes.root}>Your Journal Entries</h1>
}


const CalendarPage = () => {
    return (
        <div className="Container">
            <WelcomeHeader />
            <div>
                <Calendar />
            </div>
            
        </div>
    )
}

export default CalendarPage
