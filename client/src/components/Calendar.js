import React from 'react';
import Calendar from 'react-awesome-calendar';
import styles from '../components/calendar.css';

const events = [{
    id: 1,
    color: '#008000',
    from: '2021-03-02T18:00:00+00:00',
    to: '2021-03-07T19:00:00+00:00',
    title: 'Happy',
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
    from: '2020-11-05T00:00:00+00:00',
    to: '2020-11-06T00:01:00+00:00',
    title: 'Okay',
}]

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