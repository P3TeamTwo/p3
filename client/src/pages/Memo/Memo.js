import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import API from '../../utils/API'
import Memos from './Memos'
import '../Graph/Graph.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({

    backdateButton: {
        margin: "10px auto 0 auto",
        width: '100%',
        borderRadius: '15px',
        backgroundColor: '#d8ac9c',
        color: 'black',
        fontSize: '20px',
        display: 'block',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'

    }
})

const Journal = ({date}) => {

    const [ISODate, setISODate] = useState('')

    useEffect(() => {
        setISODate(backDate)
    }, [ISODate])

    var backDate = date + `T00:00:00.000Z`;
    console.log(ISODate)

    const classes = useStyle();

        const history = useHistory();
        const directToDaily = () => {

            let path = '/Daily'
            history.push({
                pathname: path,
                state: ISODate
            })
        }

    const userId = localStorage.getItem('userId')
    const [memos, setMemos] = useState([])

    const deleteEntry = () => {
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
                console.log(date)
                return memoCut === date
            })
            setMemos(filteredMemos)
        }
        loadMemos()
    }, [date])

    return (
        <>
            { memos.length > 0 ? <Memos memos={memos} deleteEntry={deleteEntry} editEntry={editEntry} /> : <Button onClick={directToDaily} className={classes.backdateButton}>Add an entry for this day</Button>}  
        </>
    )
}

export default Journal