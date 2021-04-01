import React, { useState, useEffect } from 'react'
import API from '../../utils/API'

// import WordMap from './WordMap'
import Memos from './Memos'
import '../Graph/Graph.css'

const Journal = ({date}) => {

    const userId = localStorage.getItem('userId')
    const [memos, setMemos] = useState([])

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
            console.log(filteredMemos)
            setMemos(filteredMemos)
        }
        loadMemos()
    }, [date])
    

    return (
        <>

            { memos.length > 0 ? <Memos memos={memos} /> : 'No Saved Memos'}
        </>
    )
}

export default Journal

