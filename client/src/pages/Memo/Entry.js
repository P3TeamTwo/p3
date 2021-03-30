import React from 'react'
import Player from '../../components/QComponents/longform/Recorder/Player'

const Entry = ({memo}) => {
    return (
        <div>
            <p>{memo.created_at}</p>
            <h3>{memo.longForm}</h3>
            {(memo.voiceMemo) && <Player url = {memo.voiceMemo}/>}
        </div>
    )
}

export default Entry
 