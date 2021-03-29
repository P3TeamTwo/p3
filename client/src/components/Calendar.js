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

                    title: reflection.moodState,

                    src: reflection.voiceMemo,
                    longForm: reflection.longForm
                }
                events.push(event)
            })
        })
}

makeEvent();



class CalApp extends React.Component {
    constructor(props) {
        super(props);
        this.calendar = React.createRef();
        this.setVoice = this.setVoice.bind(this);

    }


    componentDidMount() {
        
    }



    setVoice() {
        const details = this.calendar.current.getDetails();
        this.mode = details.mode;
        console.log(this.mode)
        this.props.onDay(this.mode)
        this.props.onDay(details.mode)
    }

    render(props) {
        console.log('hi');
        return (
            <div className={styles.pageCalendar}>
                {/* {this.props.onDay()} */}
                <Calendar
                    ref={this.calendar}
                    onChange={(dates) => this.setVoice()}
                />
            </div>
        );
    }
}

export default CalApp;