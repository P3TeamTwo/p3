import React from 'react'
import Player from '../../components/QComponents/longform/Recorder/Player'

const Entry = ({memo}) => {
    return (
        <div>
            <p>{memo.created_at}</p>
            <h3 style = {{paddingBottom:20}}>{memo.longFormQuestion}</h3>
            <p>{memo.longForm}</p>
            {(memo.voiceMemo) && <Player url = {memo.voiceMemo}/>}
        </div>
    )
}

export default Entry
 