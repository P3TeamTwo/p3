import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
// import Player from '../../components/QComponents/longform/Recorder/Player'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Player from "../../components/QComponents/longform/Recorder/Player";
import {Button, TextField} from '@material-ui/core'


const Entry = ({ memo, deleteEntry }) => {

    const [editEntry, setEditEntry] = useState(false)
    const [userResponse, setUserResponse] = useState();
    const [textField, setTextField] = useState()

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }    

    const editMode = (longFormData) => {
        console.log("editing this post containing: " + longFormData)
        setEditEntry(true)
    }

    sessionStorage.removeItem('AI_sentBuffer');
    sessionStorage.removeItem('AI_buffer');
    const audioURL = `https://voice-note.s3.ca-central-1.amazonaws.com/` + `${memo.created_at}-${memo.postedBy}` + `/undefined`;
    console.log(memo)
    console.log(audioURL);
    return (
        <Card variant="outlined" style={{ marginBottom: '2%', padding: '1%' }}>
            <CardHeader />
            <h4 style={{ paddingBottom: 20 }}>{memo.longFormQuestion}</h4>
            
            {editEntry ? <form>
                 <TextField value={textField} placeholder={memo.longForm} onChange={(e) => handleChange(e)} />
                </form>
            : 
            <p>{memo.longForm}</p>}
           
            {memo.voiceMemo && < Player url={audioURL}></Player>}
            {editEntry ? <Button onClick={(e) => {if (!userResponse) {
                     return
                    } else {
                        console.log(userResponse + " -> sending this to api")
                     }}}>Submit </Button>  : <Button onClick={() => editMode(memo.longForm)}>Edit</Button>}
            {/* <Button onClick={() => editMode(memo.longForm)}>Edit</Button> */}
            <Button style={{backgroundColor: "red", color: "white"}}onClick={() => deleteEntry()}>Delete</Button>
            
            
            
        </Card>
    )
}

export default Entry
