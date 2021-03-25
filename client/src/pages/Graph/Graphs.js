import React, { useEffect, useState } from 'react';

//Importing line graph from
import LineGraph from '../../components/Graphs/LineGraph'
import DblAxisLine from '../../components/Graphs/DblAxisLine'
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
            {entries && <LineGraph 
            dates={entries.map(entry => ({date: entry.created_at, point: entry.moodPoints}))}/>
            }
            <DblAxisLine />
            <ScreenVsSleep />
            <DoughnutScreenTime />
        </div>
    )
}

export default Graphs;

