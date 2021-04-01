import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import PropTypes from 'prop-types';

import { Container, Tab, Tabs, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Player from '../../components/QComponents/longform/Recorder/Player'
// import WordMap from './WordMap'
import Memos from './Memos'
import '../Graph/Graph.css'

const Journal = ({date}) => {

    const userId = localStorage.getItem('userId')
    const data = [];
    const [memos, setMemos] = useState([])
    const [created_at, setCreated_at] = useState()
    const [voiceMemo, setVoiceMemo] = useState()
    const [longForm, setLongForm] = useState()

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
    
    console.log(memos);

    return (
        <>

            { memos.length > 0 ? <Memos memos={memos} /> : 'No Saved Memos'}
            <Player style={{ position: 'absolute' }} />

    // {/* <Memos /> */}
        </>
    )
}

export default Journal

