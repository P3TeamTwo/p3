import React from 'react'
import {  MdBook } from 'react-icons/md';
import { Button } from '@material-ui/core'


const Results = ({ onClick }) => {
    return (
        <div>
            <div>
                <MdBook className='material-icons'/>
                <h3>Journal Complete</h3>
                <Button onClick={onClick}>Submit Entry</Button>
            </div>
            
        </div>
    )
}

export default Results
