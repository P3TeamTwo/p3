import React, { useEffect } from 'react'
// import Button from '@material-ui/core/Button'
import JenOrd2 from '../images/JenOrd2.png'


const Colourways = () => {

    // const [activeColourwayId, setActiveColourwayId] = useState(0)


    var colourOptionOne = {
        document.body.stylebackgroundImage =  `url + (${JenOrd2 })`
    }

    return (
        <div>
            <button
                id="1"
                // onClick={() => document.body.style.backgroundImage = {JenOrd2}}
                onClick={() => document.body.style.backgroundColor = "red"}
                // onClick={() => console.log("test")}
            >I'm a colour</button>

        </div>
    )
}


export default Colourways