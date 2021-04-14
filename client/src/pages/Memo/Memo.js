import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import API from '../../utils/API'

// import WordMap from './WordMap'
import Memos from './Memos'
import '../Graph/Graph.css'

const Journal = ({date}) => {
    
        const history = useHistory();
    
        const directToDaily = () => {
            let path = '/Daily'
            history.push(path)
        }

        
    
    const userId = localStorage.getItem('userId')
    const [memos, setMemos] = useState([])

    

    const deleteEntry = () => {
        console.log(memos[0]._id)
        API.deleteJournal(memos[0]._id).then(() => {
            window.location.reload();
        })
    }

    const editEntry = (newInput) => {
        console.log("editing this post containing: " + newInput)
        API.updateJournal(memos[0]._id, {longForm: newInput})
        .then(() => {
            window.location.reload()
        })
    }

    useEffect(() => {
        const loadMemos = async () => {
            const memosFromServer = await API.getJournal(userId)
            let journal = memosFromServer.data
            const filteredMemos = journal.filter(memo => {
                let memoDate = memo.created_at
                let memoCut = memoDate.slice(0, 10)
                memo.created_at = memoCut
                return memoCut === date
            })
            setMemos(filteredMemos)
        }
        loadMemos()
    }, [date])

    
    return (
        <>
            { memos.length > 0 ? <Memos memos={memos} deleteEntry={deleteEntry} editEntry={editEntry} /> : <historyEntry onClick={directToDaily}>test</historyEntry>}  

        </>
    )
}

export default Journal

