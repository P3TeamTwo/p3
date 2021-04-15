import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

//importing elements
import HoursOfSleep from '../../components/Graphs/Sleep/HoursOfSleep'
import CoffeeVsSleep from '../../components/Graphs/Sleep/CoffeeVsSleep'
import SleepvsExercise from '../../components/Graphs/Sleep/SleepvsExercise'
import MinutesOfExercise from '../../components/Graphs/Exercise/MinutesOfExercise';
import ExerciseOverview from '../../components/Graphs/Exercise/ExerciseOverview';
import WaterVsExercise from '../../components/Graphs/Exercise/WaterVsExercise';
import ExerciseVsCalories from '../../components/Graphs/Exercise/ExerciseVsCalories.js';
import Veggies from '../../components/Graphs/Eating/Veggies';
import VeggiesVsWater from '../../components/Graphs/Eating/VeggiesVsWater';
import WaterVsSleep from '../../components/Graphs/Eating/WaterVsSleep';
import EatingOverview from '../../components/Graphs/Eating/EatingOveriew';

import TimeFrame from '../../components/Graphs/TimeFrame'

// import Social Display
import SocialDisplay from '../../components/SocialDisplay'

// Import Word Map
import WordMap from '../../components/WordMap'

//import overview from 
import SleepOverview from '../../components/Graphs/Sleep/SleepOverview'
// //Import api routes to db
import API from '../../utils/API'

import './Graph.css'
import logo from '../../images/MINDSHARE.png'

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
        backgroundColor: "rgba(255,255,255, 0)"

    },
    logoutButton: {
        marginLeft: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        width: '10%',
        backgroundColor: '#3f51b5',
        color: 'white',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: '#d0e8f2',
            color: 'black'
        }
    },
    homeLogo: {
        marginRight: "auto",
        maxWidth: '4%',
        height: '5%',
        paddingLeft: '0.3rem',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
        }
    }


}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const coffeeTimes = {
        none: 0,
        min: 0,
        mid: 0,
        max: 0
    };
    const screenTime = {
        yes: 0,
        no: 0
    };
    const exerciseTime = {
        noExercise: 0,
        thirty: 0,
        hour: 0,
        more: 0
    };
    const calories = {
        none: 0,
        min: 0,
        midOne: 0,
        midTwo: 0,
        max: 0
    };
    const active = {
        cardio: 0,
        weights: 0,
        rest: 0,
        zero: 0
    };
    const veg = {
        none: 0,
        one: 0,
        two: 0,
        three: 0
    };
    const meals = {
        never: 0,
        half: 0,
        night: 0
    };
    const water = {
        none: 0,
        min: 0,
        mid: 0,
        max: 0
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    //Getting the user ID
    const userId = localStorage.getItem("userId");

    // Setting state to store the journl entries
    const [entries, setEntries] = useState();
    const [storeAllEntries, setStoreAllEntries] = useState();
    // console.log("this is under const entries", entries)
    // console.log("this is under const storeAllEntries", storeAllEntries)

    useEffect(() => {
        //Get all journal data for the user logged in 
        function fetchData() {

            API.getJournal(userId)
                .then(res => {
                    console.log(res.data)
                    const storage = res.data.sort(function (a, b) {
                        return (a.created_at < b.created_at) ? -1 : (a.created_at > b.created_at) ? 1 : 0;
                    })
                    setEntries(storage)
                    setStoreAllEntries(storage)
                }
                )
                .catch(err => console.log(err))
        }
        fetchData()
    }, [userId])

    function sevenDaysData() {
        //Get the date that is seven days ago from now
        const sevenDaysAgoDate = new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))
        //Set that date to be ISO format
        var sevenDaysAgoISO = sevenDaysAgoDate.toISOString()
        //Filter from all entries the ones that fall within the seven day window 
        const lastSevenDays = entries.filter(entry => entry.created_at > sevenDaysAgoISO); 
        //Resetting the entries array to display only these
        setEntries(lastSevenDays)
    }


     const thirtyDaysData = async () => {
        const reset = await setEntries(storeAllEntries)
        // console.log("reset", reset)
        //Get the date that is thirty days ago from now
        const thirtyDaysAgoDate = new Date((new Date().getTime() - (30 * 24 * 60 * 60 * 1000)))
        //Set that date to be ISO format
        var thirtyDaysAgoISO = thirtyDaysAgoDate.toISOString()
        //Filter from all entries the ones that fall within the thirty day window 
        const lastThirtyDays = entries.filter(entry => entry.created_at > thirtyDaysAgoISO); 
        //Resetting the entries array to display only these
        setEntries(lastThirtyDays)    
    }


    function allDaysData(){
        API.getJournal(userId)
        .then(res => {
            const storage = res.data.sort(function (a, b) {
                return (a.created_at < b.created_at) ? -1 : (a.created_at > b.created_at) ? 1 : 0;
            })
            setEntries(storage)
        }
        )
        .catch(err => console.log(err))
        // console.log(entries)
    }



    let history = useHistory();

    function directHome() {
        history.push('/welcome')
    }

    const signOut = (e) => {
        e.preventDefault()

        axios({
            method: 'get',
            url: 'api/user/logout',
        })

            .then((response) => {
                localStorage.clear()
                history.push(response.data)
            })

    }

    const Nav = () => (
        <Grid container justify={"center"} className='navGrid'>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >

                <Tab label="Sleep" {...a11yProps(0)} />
                <Tab label="Exercise" {...a11yProps(1)} />
                <Tab label="Eating" {...a11yProps(2)} />
                <Tab label="social" {...a11yProps(3)} />
                <Tab label="Word Map" {...a11yProps(4)} />
                <Button className={classes.logoutButton} onClick={signOut}>Logout</Button>

            </Tabs>
        </Grid>
    )

    return (
        <div className={classes.root}>

            <AppBar position="static" color="default" >
                <Toolbar>
                    <img className={classes.homeLogo} src={logo} onClick={directHome} alt='logo' />
                    <Nav />
                </Toolbar>
            </AppBar>

            <TabPanel value={value} index={0}>
            <TimeFrame 
            sevenDay={sevenDaysData}
            thirtyDay={thirtyDaysData}
            allDays={allDaysData}/>

                {entries && <SleepOverview
                    sumOfSleep={entries.reduce((totalSleep, entry) => totalSleep = totalSleep + entry.q1_1, 0)}
                    totalNights={entries.length}
                    coffeeConsumption={coffeeTimes}
                    entries={entries}
                    coffeeTimes={coffeeTimes}
                    screenTime={screenTime}
                />}
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} lg={6}>
                        {entries && <HoursOfSleep
                            // set the prop dates as a map of the entries, taking the date entered and the data poitns from q1_
                            dates={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                        />}
                    </Grid>
                    <Grid item xs={12} lg={6}>

                        {/* Coffee vs sleep double axis line graph */}
                        {entries && <CoffeeVsSleep
                            datesAndSleep={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                            datesAndCoffee={entries.map(entry => ({ date: entry.created_at, point: entry.q1_3 }))}
                        />}
                    </Grid>
                    <Grid item xs={12}>
                        {/* Screen time doughnut graph display */}
                        {entries && <SleepvsExercise
                            datesAndSleep={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                            datesAndExercise={entries.map(entry => ({ date: entry.created_at, point: entry.q3_3 }))}

                        />}
                    </Grid>
                </Grid>
            </TabPanel>



            <TabPanel value={value} index={1}>

                {entries && <ExerciseOverview
                    entries={entries}
                    exerciseTime={exerciseTime}
                    calories={calories}
                    active={active}
                />}
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} lg={6}>
                        {entries && <MinutesOfExercise
                            dates={entries.map(entry => ({ date: entry.created_at, point: entry.q3_3 }))}
                        />}
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {entries && <ExerciseVsCalories
                            datesAndExercise={entries.map(entry => ({ date: entry.created_at, point: entry.q3_3 }))}
                            datesAndCalories={entries.map(entry => ({ date: entry.created_at, point: entry.q3_2 }))}
                        />}
                    </Grid>
                    <Grid item xs={12}>
                        {entries && <WaterVsExercise
                            datesAndWater={entries.map(entry => ({ date: entry.created_at, point: entry.q2_3 }))}
                            datesAndExercise={entries.map(entry => ({ date: entry.created_at, point: entry.q3_3 }))}
                        />}

                    </Grid>
                </Grid>

                {/* Water vs exercise double axis line graph */}


            </TabPanel>
            <TabPanel value={value} index={2}>
                {entries && <EatingOverview
                    entries={entries}
                    veg={veg}
                    meals={meals}
                    water={water}
                />}

                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} lg={6}>
                        {entries && <Veggies
                            // set the prop dates as a map of the entries, taking the date entered and the data poitns from q1_
                            dates={entries.map(entry => ({ date: entry.created_at, point: entry.q2_1 }))}
                        />}
                    </Grid>
                    <Grid item xs={12} lg={6}>

                        {entries && <VeggiesVsWater
                            datesAndVegies={entries.map(entry => ({ date: entry.created_at, point: entry.q2_1 }))}
                            datesAndWater={entries.map(entry => ({ date: entry.created_at, point: entry.q2_3 }))}
                        />}
                    </Grid>
                    <Grid item xs={12}>

                        {entries && <WaterVsSleep
                            datesAndWater={entries.map(entry => ({ date: entry.created_at, point: entry.q2_3 }))}
                            datesAndSleep={entries.map(entry => ({ date: entry.created_at, point: entry.q1_1 }))}
                        />}
                    </Grid>
                </Grid>

            </TabPanel>

            {/* Social */}
            <TabPanel value={value} index={3}>
                <SocialDisplay entries={entries} />
            </TabPanel>

            {/* Word Map */}
            <TabPanel value={value} index={4}>
                <WordMap />
            </TabPanel>

        </div>
    );
}
