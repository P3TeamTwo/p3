import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import PropTypes from 'prop-types';

import { Container, Tab, Tabs, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Player from '../../components/QComponents/longform/Recorder/Player'
import WordMap from './WordMap'
import Memos from './Memos'
import '../Graph/Graph.css'


function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const Journal = () => {

    const userId = localStorage.getItem('userId')
    const data = [];
    const [memos, setMemos] = useState([])
    const [created_at, setCreated_at] = useState()
    const [voiceMemo, setVoiceMemo] = useState()
    const [longForm, setLongForm] = useState()
    const classes = useStyles();
    const [value, setValue] = useState(0);

    useEffect(() => {
        const loadMemos = async () => {
            const memosFromServer = await API.getJournal(userId)
            setMemos(memosFromServer.data)
        }
        loadMemos()
    }, [])
    console.log(memos);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Sleep" {...a11yProps(0)} />
                <Tab label="Exercise" {...a11yProps(1)} />
                <Tab label="Eating Habits" {...a11yProps(2)} />
                <Tab label="Social" {...a11yProps(3)} />

            </Tabs>
            <TabPanel value={value} index={0} >
                <WordMap />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two - insert graph code here for exercise
        </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three - insert graph code here for eating habits
        </TabPanel>
            <TabPanel value={value} index={3}>
                Item four - insert graph code here for social
        </TabPanel>

        </div>

    //         {/* <Player /> */ }
    // {/* { memos.length > 0 ? <Memos memos={memos} /> : 'No Saved Memos'} */ }

    // {/* <Memos /> */ }
    )
}

export default Journal

