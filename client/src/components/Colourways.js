import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

// import Button from '@material-ui/core/Button'
import JenOrd from '../images/JenOrd.png'
import JenOrd2 from '../images/JenOrd2.png'
import JenOrd3 from '../images/JenOrd3.png'
import JenOrd4 from '../images/JenOrd4.png'
import JenOrd5 from '../images/JenOrd5.png'
import JenOrd6 from '../images/JenOrd6.png'
import JenOrd7 from '../images/JenOrd7.png'
import JenOrd8 from '../images/JenOrd8.png'


const Colourways = () => {

    const useStyles = makeStyles((theme) => ({
        button: {
            color: "black",
            fontSize: "40px",
            // height: "50px",
            // width: "50px",
            border: "solid 0.5 black"
        }

    }));

    console.log(document.body.style)
    const classes = useStyles();

    return (
        <div>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd})`}
                >cream</button>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd2})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd2})`}
                >Turq</button>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd3})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd3})`}
                >Green</button>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd4})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd4})`}
                >Pink</button>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd5})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd5})`}
                >Red</button>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd6})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd6})`}
                >Orange</button>
            <button
                className={classes.button}
                style={{backgroundImage: `url(${JenOrd7})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd7})`}
                >Black</button>
            <button
                className={classes.button} 
                style={{backgroundImage: `url(${JenOrd8})`}}
                onClick={() => document.body.style.backgroundImage = `url(${JenOrd8})`}
            >Blue</button>

        </div>
    )
}


export default Colourways