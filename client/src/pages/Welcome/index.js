import React from 'react'
import Button from '@material-ui/core/Button'
import './welcome.css'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        fontSize: '40px',
        color: 'black',
        padding: '5px 30px',
        borderRadius: '5',
        marginBottom: '20',
    }
})

function WelcomeHeader() {
    const classes = useStyle();

    return <h1 className={classes.root}>Welcome to MindShare</h1>
}

const Welcome = () => {
    return (
        <div className="Container">
            <WelcomeHeader/>
            <div className="container-main">
            
            <Button className="daily-reflection" variant="contained">Daily Reflection</Button>
            <Button size="xx-large" variant="contained">My Reflections</Button>
            </div>
            
        </div>
    )
}

export default Welcome
