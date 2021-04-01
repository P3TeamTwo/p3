import React from 'react'
// import Player from '../../components/QComponents/longform/Recorder/Player'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


const Entry = ({memo}) => {
    return (
        <Card variant="outlined" style = {{marginBottom:'2%', padding:'1%'}}>
            <CardHeader/>
            <h4 style = {{paddingBottom:20}}>{memo.longFormQuestion}</h4>
            <p>{memo.longForm}</p>
        </Card>
    )
}

export default Entry
 