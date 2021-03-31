import React from 'react';
import Calendar from 'react-awesome-calendar';
import styles from '../components/calendar.css';
import API from '../utils/API';

const userId = localStorage.getItem("userId");



const events = []

const makeEvent = () => {
    API.getJournal(userId)
        .then((res) => {
            console.log(res);
            res.data.map((reflection) => {
                if (reflection.moodState === 'Very Unhappy') {
                    const event = {
                        id: reflection._id,
                        color: "#162447",
                        from: reflection.created_at,
                        to: reflection.created_at,

                        title: reflection.moodState,

                        src: reflection.voiceMemo,
                        longForm: reflection.longForm
                    }
                    events.push(event)
                } else if (reflection.moodState === 'Unhappy') {
                    const event = {
                        id: reflection._id,
                        color: "#a6dcef",
                        from: reflection.created_at,
                        to: reflection.created_at,

                        title: reflection.moodState,

                        src: reflection.voiceMemo,
                        longForm: reflection.longForm
                    }
                    events.push(event)
                } else if (reflection.moodState === 'Ok') {
                    const event = {
                        id: reflection._id,
                        color: "#957dad",
                        from: reflection.created_at,
                        to: reflection.created_at,

                        title: reflection.moodState,

                        src: reflection.voiceMemo,
                        longForm: reflection.longForm
                    }
                    events.push(event)
                } else if (reflection.moodState === 'Happy') {
                    const event = {
                        id: reflection._id,
                        color: "#a7d7c5",
                        from: reflection.created_at,
                        to: reflection.created_at,

                        title: reflection.moodState,

                        src: reflection.voiceMemo,
                        longForm: reflection.longForm
                    }
                    events.push(event)
                } else if (reflection.moodState === 'Very Happy') {
                    const event = {
                        id: reflection._id,
                        color: "#ffaaa5",
                        from: reflection.created_at,
                        to: reflection.created_at,

                        title: reflection.moodState,

                        src: reflection.voiceMemo,
                        longForm: reflection.longForm
                    }
                    events.push(event)
                }

            })
            console.log(events);
        })
}

makeEvent();


class CalApp extends React.Component {
    constructor(props) {
        super(props);
        this.calendar = React.createRef();
    }

    componentDidMount() {
        const details = this.calendar.current.getDetails();
        // call get events endpoint
    }

    render() {
        return (
            <div className={styles.pageCalendar}>
                <Calendar
                    ref={this.calendar}
                    onClickEvent={(event) => console.log('this is an event', event)}
                    onChange={(dates) => localStorage.setItem('dates', dates)}
                    onClickTimeLine={(date) => localStorage.setItem('date', date)}
                    events={events}
                />
            </div>
        );
    }
}

export default CalApp;