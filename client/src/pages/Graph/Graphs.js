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


import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

//importing elements
import HoursOfSleep from '../../components/Graphs/HoursOfSleep'
import CoffeeVsSleep from '../../components/Graphs/CoffeeVsSleep'
import SleepvsExercise from '../../components/Graphs/SleepvsExercise'
import ScreenTimeDoughnut from '../../components/Graphs/ScreenTimeDoughnut'

//import overview from 
import SleepOverview from '../../components/Graphs/SleepOverview'
// //Import api routes to db
import API from '../../utils/API'

import './Graph.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'} variant={'body2'}>{children}</Typography>
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
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [coffeeTimes, setCoffeeTimes] = useState({
        noCoffee: 0,
        morning: 0,
        afternoon: 0,
        evening: 0
    })
    const [screenTime, setScreenTime] = useState({
        true: 0,
        false: 0
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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



    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Sleep" {...a11yProps(0)} />
                    <Tab label="Exercise" {...a11yProps(1)} />
                    <Tab label="Eating Habits" {...a11yProps(2)} />
                    <Tab label="social" {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                    {/* Average hours of sleep per nighth  */}
                    {/* sum of all input / number of inputs  */}
                    {entries && <SleepOverview
                        sumOfSleep={entries.reduce((totalSleep, entry) => totalSleep = totalSleep + entry.q1_1, 0)}
                        totalNights={entries.length}
                        coffeeConsumption={coffeeTimes}
                        entries={entries}
                        coffeeTimes={coffeeTimes}
                        screenTime={screenTime}
                    />}
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
                    {entries && <SleepvsExercise
                        datesAndSleep={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                        datesAndExercise={entries.map(entry => ({ date: entry.created_at, point: entry.q3_3 }))}

                    />}


            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
      </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
      </TabPanel>

        </div>
    );
}
