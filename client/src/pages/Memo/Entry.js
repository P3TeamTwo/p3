import React from 'react'
// import Player from '../../components/QComponents/longform/Recorder/Player'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Player from "../../components/QComponents/longform/Recorder/Player";


const Entry = ({ memo}) => {
 
    sessionStorage.removeItem('AI_sentBuffer');
    sessionStorage.removeItem('AI_buffer');
const audioURL = `https://voice-note.s3.ca-central-1.amazonaws.com/`+`${memo.created_at}-${memo.postedBy}`+`/undefined`;
console.log(audioURL);
return (
        <Card variant="outlined" style={{ marginBottom: '2%', padding: '1%' }}>
            <CardHeader />
            <h4 style={{ paddingBottom: 20 }}>{memo.longFormQuestion}</h4>
            <p>{memo.longForm}</p>
            {memo.voiceMemo && < Player url={audioURL}></Player>}
        </Card>
    )
}

export default Entry
