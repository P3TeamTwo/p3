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

    const colourOptions = [JenOrd, JenOrd2, JenOrd3, JenOrd4, JenOrd5, JenOrd6, JenOrd7, JenOrd8]

    const useStyles = makeStyles((theme) => ({
        button: {
            color: "black",
            fontSize: "40px",
            border: "solid 0.2px grey",
            borderRadius: "10px",
            boxShadow: '0 9px 30px -5px #a6aa9c',
            height: "50px",
            width: "50px",
            margin: "10px",

        },
        colourwaysBtns: {
            textAlign: "center",
            marginTop: "100px",
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.colourwaysBtns}>
            <p>Choose your journal colour</p>

            {colourOptions.map(option => {
                return (<button
                    key={option}
                    className={classes.button}
                    style={{ backgroundImage: `url(${option})` }}
                    onClick={() => document.body.style.backgroundImage = `url(${option})`}
                ></button>
                )
            })}
        </div>


    )
}


export default Colourways