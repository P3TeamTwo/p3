import React from 'react'
import {RiUserAddLine, RiUserStarLine} from 'react-icons/ri'
import {justifyContent} from '@material-ui/system';
import {Box, Backdrop} from '@material-ui/core';


const slidingLogIn = () => {
    return (
        <Box justifyContent = 'space-between'>
            <div style = {{display:'inline'}}>
            <RiUserAddLine size = {128} style = {{marginRight:'40vw'}}/>
            </div>
            <div style = {{display:'inline'}}>
            <RiUserStarLine size = {128}/>
            </div>
        </Box>
    )
}

export default slidingLogIn
