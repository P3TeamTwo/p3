import React from 'react'
import './login.css'
// import { Link } from 'react-router-dom'
import { styled } from '@material-ui/core/styles';
import { Paper} from '@material-ui/core';
import UserForm from '../../components/UserForm'

const login = () => {

    const MyPaper = styled(Paper)({
        position: 'fixed',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        marginLeft: '5vw',
        marginTop: '5vh',
        height: "90vh",
        width: "90vw",
        padding: '0 30px',
    });

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                textAlign: 'center',
            }}>

            <MyPaper>
                <div style = {{height:  '20vh'}}>
                <p
                    className={'title'}
                    style={{  fontSize: '150px', marginTop:'-4vh'}}>Journal
                </p>
                <p  className={'title'}
                style={{ fontSize: '30px', marginTop:'-8vh' }}>
                    Find it, in you!
                </p>
                </div>
                <UserForm />
            </MyPaper>
        </div>
    )
}

export default login
