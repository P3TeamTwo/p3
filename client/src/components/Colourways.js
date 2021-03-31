import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'

// const changeBackgroundOne = () => {

//     useEffect(() => {
//         document.body.style.backgroundImage = 'url(../images/JenOrd.png)'
//         return () => {
            
//         }
//     })

const Colourways = () => {


        return (
            <div>
                <Button
                    id="1"
                    // backgroundImage="url(../images/JenOrd2.png)"
                    onClick={() => document.body.style.backgroundImage = 'url(../images/JenOrd2.png)'}
                >I'm a colour</Button>
                {/* <Button 
            id="2"
            backgroundImage="url(../images/JenOrd3.png)"
            onClick={changeBackground()}
            /> */}
            </div>
        )
    }


export default Colourways