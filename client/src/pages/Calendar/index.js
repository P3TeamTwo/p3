import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import Calendar from '../../components/Calendar'
import './calendar.css'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        fontSize: '40px',
        color: 'black',
        marginBottom: '10px;',
    },
    buttonLeft: {
        padding: '5px 5px ',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        borderRadius: '15px',
        backgroundColor: '#c8f4de',
        color: 'black',
        fontSize: '30px',
        display: 'block',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow:  '0 9px 30px -5px #a6aa9c' 

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

const CalendarPage = () => {
    return (
        <div className="Container">
            <Grid container>
                
                <Grid item xs={12}> 
                    <WelcomeHeader />
                </Grid>
                <Grid item xs={3}>
                    {/* <div className="container-main"> */}
                    {/* </div> */}
                      
                </Grid>
                <Grid item xs={12}>
                    <Calendar />
                </Grid>

            </Grid>
                        <ButtonTop />                 
        </div>
        
    )
}

export default CalendarPage
