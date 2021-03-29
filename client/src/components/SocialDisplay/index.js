import React from 'react'
import { Button, Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import './social.css'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        fontSize: '40px',
        color: 'black',
        padding: '5px 30px',
        borderRadius: '5',
        marginBottom: '20',
    },
    contentHolder: {
        marginLeft: '0.5rem',
        marginRight: '0.5rem'
    },
    listContent: {
        display: 'auto',
        textAlign: 'center',
        paddingTop: "1rem"
    },
    questionTitle: {
        marginTop: '1rem',
        marginBottom: '1rem'
        
    },
    buttonConnect: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#96C3DA',
        color: 'black',
        width: '75%',
        fontSize: '30px',
        marginBottom: '1rem',
        "&:hover": {
            backgroundColor: '#416894',
            color: 'white'
        }
    },
    buttonGift: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#ccffbd',
        width: '75%',
        color: 'black',
        fontSize: '30px',
        marginBottom: '1rem',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        }
    },
    buttonPlan: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#9ddfd3',
        width: '75%',
        color: 'black',
        fontSize: '30px',
        marginBottom: '1rem',
        "&:hover": {
            backgroundColor: '#1687a7',
            color: 'white'
        }
    }
})



const SocialDisplay = ({ entries }) => {
    console.log(entries)

    const classes = useStyle()

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={4}>
                <Paper className={classes.contentHolder}>
                    <div className={classes.listContent}>
                    <h2 className={classes.questionTitle}>People you connected with:</h2>
                    {entries.map(entry => {
                        return (
                            <Button className={classes.buttonConnect}>{entry.q4_1}</Button>
                        )
                    })}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Paper className={classes.contentHolder}>
                    <div className={classes.listContent}>
                    <h2 className={classes.questionTitle}>Gestures of Appreciation:</h2>
                        {entries.map(entry => {
                            return (
                                <Button className={classes.buttonGift}>{entry.q4_2}</Button>
                            )
                        })}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Paper className={classes.contentHolder}>
                    <div className={classes.listContent}>
                    <h2 className={classes.questionTitle}>Recent Plans:</h2>
                        {entries.map(entry => {
                            return (
                                <Button className={classes.buttonPlan}>{entry.q4_3}</Button>
                            )
                        })}
                    </div>
                </Paper>
            </Grid>



        </Grid>
         
        
    )
}

export default SocialDisplay
