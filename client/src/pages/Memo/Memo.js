import React, { useState, useEffect } from 'react'
import API from '../../utils/API'

// import WordMap from './WordMap'
import Memos from './Memos'
import '../Graph/Graph.css'




const Journal = ({date}) => {

    const userId = localStorage.getItem('userId')
    const [memos, setMemos] = useState([])

    const deleteEntry = () => {
        console.log(memos[0]._id)
        API.deleteJournal(memos[0]._id)
    }

    useEffect(() => {
        const loadMemos = async () => {
            const memosFromServer = await API.getJournal(userId)
            let journal = memosFromServer.data
            const filteredMemos = journal.filter(memo => {
                let memoDate = memo.created_at
                let memoCut = memoDate.slice(0, 10)
                memo.created_at = memoCut
                console.log(date)
                return memoCut === date
            })
            setMemos(filteredMemos)
        }
        loadMemos()
    }, [date])
    
    return (
        <>

            { memos.length > 0 ? <Memos memos={memos} deleteEntry={deleteEntry} /> : 'No Saved Memos'}
        </>
    )
}

export default Journal

