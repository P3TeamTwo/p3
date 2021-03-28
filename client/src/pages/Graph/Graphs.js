// import React, { useEffect, useState } from 'react';

// //Importing line graph from
// import HoursOfSleep from '../../components/Graphs/HoursOfSleep'
// import CoffeeVsSleep from '../../components/Graphs/CoffeeVsSleep'
// import ScreenVsSleep from '../../components/Graphs/ScreenVsSleep'
// import ScreenTimeDoughnut from '../../components/Graphs/ScreenTimeDoughnut'

// //Import api routes to db
// import API from '../../utils/API'

// import './Graph.css'

// function Graphs() {

//     // Getting User logged in
//     const userId = localStorage.getItem("userId");

//     //Setting state to store the journl entries
//     const [entries, setEntries] = useState();

//     useEffect(() => {
//         //Get all journal data for the user logged in 
//         API.getJournal(userId)
//             .then(res => {
//                 setEntries(res.data)
//             }
//             )
//             .catch(err => console.log(err))

//     }, [])

// //     return (
//         <div className="graphContainer">
//             {/* once entries has value and linegraph can access values then execute */}
//             {entries && <HoursOfSleep
//                 // set the prop dates as a map of the entries, taking the date entered and the data poitns from q1_
//                 dates={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
//             />}

//             {/* Coffee vs sleep double axis line graph */}
//             {entries && <CoffeeVsSleep
//                 datesAndSleep={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
//                 datesAndCoffee={entries.map(entry => ({ date: entry.created_at, point: entry.q1_3 }))}
//             />}

//             {/* Screen time doughnut graph display */}
//             {entries && <ScreenTimeDoughnut
//                 screenTimeNights={entries.map(entry => ({ date: entry.created_at, point: entry.q1_2 }))}

//             />}


//             <ScreenVsSleep />
// //         </div>
//     )
// }

// export default Graphs;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// //Importing line graph from
import HoursOfSleep from '../../components/Graphs/HoursOfSleep'
import CoffeeVsSleep from '../../components/Graphs/CoffeeVsSleep'
import ScreenVsSleep from '../../components/Graphs/ScreenVsSleep'
import ScreenTimeDoughnut from '../../components/Graphs/ScreenTimeDoughnut'

// //Import api routes to db
import API from '../../utils/API'

import './Graph.css'

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

export default function VerticalTabs() {


    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    //Getting the user ID
    const userId = localStorage.getItem("userId");

    // Setting state to store the journl entries
    const [entries, setEntries] = useState();

    useEffect(() => {
        //Get all journal data for the user logged in 
        API.getJournal(userId)
            .then(res => {
                setEntries(res.data)
            }
            )
            .catch(err => console.log(err))

    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    console.log(entries)
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
                {/* once entries has value and linegraph can access values then execute */}
                {entries && <HoursOfSleep
                    // set the prop dates as a map of the entries, taking the date entered and the data poitns from q1_
                    dates={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                />}

                {/* Coffee vs sleep double axis line graph */}
                {entries && <CoffeeVsSleep
                    datesAndSleep={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                    datesAndCoffee={entries.map(entry => ({ date: entry.created_at, point: entry.q1_3 }))}
                />}

                {/* Screen time doughnut graph display */}
                {/* {entries && <ScreenTimeDoughnut
                screenTimeNights={entries.map(entry => ({ date: entry.created_at, point: entry.q1_2 }))}

            />} */}

                {/* <ScreenVsSleep /> */}
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
    );
}

