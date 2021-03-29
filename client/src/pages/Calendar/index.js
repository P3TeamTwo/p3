import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import Calendar from '../../components/Calendar'
import './calendar.css'
import Memo from '../../pages/Memo/Memo'


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
        display: 'block',
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

function ButtonTop() {
    const classes = useStyle();

    const history = useHistory();

    const directToDaily = () => {
        let path = '/Graphs'
        history.push(path)
    }

    return <Button className={classes.buttonLeft} onClick={directToDaily}>View Data</Button>
}

function ButtonBottom() {
    const classes = useStyle();

    const history = useHistory();

    const directToWelcome = () => {
        let path = '/welcome'
        history.push(path)
    }

    return <Button className={classes.buttonRight} onClick={directToWelcome}>View Data</Button>
}



const CalendarPage = (mode) => {
    
    const [wordMap, setWordMap] = useState(false)

    const onDay = (mode) => {
        console.log('hi')
        if(mode === "dailyMode"){
            setWordMap(true)
        }
        else(
            setWordMap(false)
        )
    }

    return (
        <div className="Container">
            <Grid container>
                
                <Grid item xs={12}> 
                    <WelcomeHeader />
                </Grid>
                <Grid item xs={3}>
                    <div className="container-main">
                        <ButtonTop />                 
                    </div>
                </Grid>
                {wordMap&&<Memo style = {{position:'absolute'}}/>}      
                <Grid item xs={8}>
                    <Calendar  onDay = {onDay}/>
                </Grid>

            </Grid>
        </div>
        
    )
}

export default CalendarPage
