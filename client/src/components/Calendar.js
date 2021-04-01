import React from 'react';
import Calendar from 'react-awesome-calendar';
import styles from '../components/calendar.css';
import API from '../utils/API';

const userId = localStorage.getItem("userId");
const events = []

const makeEvent = (props) => {
    API.getJournal(userId)
        .then((res) => {
            res.data.map((reflection) => {
                if (reflection.moodState === 'Very Unhappy') {
                    const event = {
                        id: reflection._id,
                        color: "#1a508b",
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
        })
}

makeEvent();


class CalApp extends React.Component {
    constructor(props) {
        super(props);
        this.calendar = React.createRef();
        this.setVoice = this.setVoice.bind(this);
        this.memo = false;
    }

    setVoice() {
        const details = this.calendar.current.getDetails();
        this.props.onDay(details)
    }

    openMemo() {}

    render(props) {
        return (
            <div className={styles.pageCalendar}>
                <Calendar
                    ref={this.calendar}
                    events={events}
                    onChange = {(date) => this.setVoice()}
                    />
            </div>
        );
    }
}

export default CalApp;