import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import PropTypes from 'prop-types';

import { Container, Tab, Tabs, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Player from '../../components/QComponents/longform/Recorder/Player'
import WordMap from './WordMap'
import Memos from './Memos'
import '../Graph/Graph.css'

const Journal = () => {

    const userId = localStorage.getItem('userId')
    const data = [];
    const [memos, setMemos] = useState([])
    const [created_at, setCreated_at] = useState()
    const [voiceMemo, setVoiceMemo] = useState()
    const [longForm, setLongForm] = useState()

    useEffect(() => {
        const loadMemos = async () => {
            const memosFromServer = await API.getJournal(userId)
            setMemos(memosFromServer.data)
        }
        loadMemos()
    }, [])
    console.log(memos);

    return (
         <Player style = {{position:'absolute'}}/> 

    // {/* { memos.length > 0 ? <Memos memos={memos} /> : 'No Saved Memos'} */ }

    // {/* <Memos /> */ }
    )
}

export default Journal

