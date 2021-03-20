import React from 'react'
import { RiUserAddLine, RiUserStarLine } from 'react-icons/ri'
import { Box, Backdrop } from '@material-ui/core';


const slidingLogIn = (props) => {
    const styles = {
        box: {
          background: "red",
          '&:hover': {
            background: "#f00",
          }
        }
      };
    
    return (
     <div className="row" style = {{paddingTop:'6vh'}}>
         <div className="col-md-6" style = {styles.box}>
         <RiUserAddLine size={100} style={{  }} />
          <p>Sign Up</p>
         </div>
         <div className="col-md-6">
         <RiUserStarLine size={100} style={{  }} />
          <p>Sign Up</p>
         </div>
     </div>
        // <div style={{ paddingTop: '8vw'}}>
        //     <div style={{ marginRight: '20vw',  display: 'inline',marginTop: '10vh', width:'20vw', height:'30vh' }}>
        //         
        //     </div>
        //     <div style={{ marginLeft: '20vw', display: 'inline', width:'20vw', height:'30vh' }}>
        //         <RiUserStarLine size={100} />
        //         <p>Sign In</p>
        //     </div>
        // </div>
    )
}

export default slidingLogIn
