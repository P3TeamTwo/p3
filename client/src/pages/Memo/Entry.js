import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
// import Player from '../../components/QComponents/longform/Recorder/Player'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Player from "../../components/QComponents/longform/Recorder/Player";
import {Button, TextField} from '@material-ui/core'


const Entry = ({ memo, deleteEntry, editEntry }) => {

    const [editEntryMode, setEditEntry] = useState(false)
    const [userResponse, setUserResponse] = useState();
    const [textField, setTextField] = useState()

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }    

    const editMode = (longFormData) => {
        // console.log("editing this post containing: " + longFormData)
        setEditEntry(true)
        
    }

    const submitEdit = (longFormData) => {
        editEntry(longFormData)
    }

    let createdAt = Date.now(memo.created_at);
    console.log(createdAt, memo.created_at)
    sessionStorage.removeItem('AI_sentBuffer');
    sessionStorage.removeItem('AI_buffer');
    const audioURL = `https://voice-note.s3.ca-central-1.amazonaws.com/` + `${memo.created_at}-${memo.postedBy}` + `/undefined`;
    return (
        <Card variant="outlined" style={{ marginBottom: '2%', padding: '1%' }}>
            <CardHeader />
            <h4 style={{ paddingBottom: 20 }}>{memo.longFormQuestion}</h4>
            
            {editEntryMode ? <form>
                 <TextField value={textField} placeholder={memo.longForm} onChange={(e) => handleChange(e)} />
                </form>
            : 
            <p>{memo.longForm}</p>}
           
            {memo.voiceMemo && < Player url={audioURL}></Player>}
            {editEntryMode ? <Button onClick={(e) => {if (!userResponse) {
                     return
                    } else {
                        submitEdit(userResponse)
                     }}}>Submit </Button>  : <Button onClick={() => editMode(memo.longForm)}>Edit</Button>}
            {/* <Button onClick={() => editMode(memo.longForm)}>Edit</Button> */}
            <Button style={{backgroundColor: "red", color: "white"}}onClick={() => deleteEntry()}>Delete</Button>
            
            
            
        </Card>
    )
}

export default Entry
