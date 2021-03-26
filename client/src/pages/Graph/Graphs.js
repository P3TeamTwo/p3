import React, { useEffect, useState } from 'react';

//Importing line graph from
import HoursOfSleep from '../../components/Graphs/HoursOfSleep'
import CoffeeVsSleep from '../../components/Graphs/CoffeeVsSleep'
import ScreenVsSleep from '../../components/Graphs/ScreenVsSleep'
import DoughnutScreenTime from '../../components/Graphs/DoughnutScreenTime'

//Import api routes to db
import API from '../../utils/API'

function Graphs() {

    // Getting User logged in
    const userId = localStorage.getItem("userId");

    //Setting state to store the journl entries
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

    console.log(entries && entries[0])
    return (
        <div className="graphContainer">
            {/* once entries has value and linegraph can access values then execute */}
            {entries && <HoursOfSleep 
            // set the prop dates as a map of the entries, taking the date entered and the data poitns from q1_
            dates={entries.map(entry => ({date: entry.created_at, point: entry.q1_1}))}
            />}
            
            {entries && <CoffeeVsSleep 
            datesAndSleep={entries.map(entry => ({date: entry.created_at, point: entry.q1_1}))}
            datesAndCoffee={entries.map(entry => ({date: entry.created_at, point: entry.q1_3}))}
            />}

            <ScreenVsSleep />
            <DoughnutScreenTime />
        </div>
    )
}

export default Graphs;
