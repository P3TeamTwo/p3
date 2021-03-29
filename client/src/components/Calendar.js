import React from 'react';
import Calendar from 'react-awesome-calendar';
import styles from '../components/calendar.css';
import API from '../utils/API';

const userId = localStorage.getItem("userId");


const events = [{
    id: 1,
    color: '#008000',
    from: '2021-03-27 18:34:58.183Z',
    to: '2021-03-27 18:34:58.183Z',
    title: 'Happy',
    src: ''
}, {
    id: 2,
    color: '#0000FF',
    from: '2021-03-08T13:00:00+00:00',
    to: '2021-03-10T14:00:00+00:00',
    title: 'Sad',
}, {
    id: 3,
    color: '#F480A8',
    from: '2021-03-T13:00:00+00:00',
    to: '2020-11-06T00:01:00+00:00',
    title: 'Okay',
}]

const makeEvent = () => {
    API.getJournal(userId)
        .then((res) => {
            console.log(res);
            res.data.map((reflection) => {


                const event = {
                    id: reflection._id,
                    color: '#008000',
                    from: reflection.created_at,
                    to: reflection.created_at,
                    title: reflection.mood,
                    src: reflection.voiceMemo,
                    longForm: reflection.longForm
                }
                events.push(event)
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