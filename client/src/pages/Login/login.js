import React from 'react'
import './login.css'
// import { Link } from 'react-router-dom'
import { styled } from '@material-ui/core/styles';
import { Paper} from '@material-ui/core';
import UserForm from '../../components/UserForm'

const login = () => {

    const MyPaper = styled(Paper)({
        // display: "gridGap",
        placeItems: "center",
        position: 'relative',
        background: '#aacfcf',
        // border: 0,
        borderRadius: "2px",
        boxShadow:  '0 9px 30px -5px #a6aa9c',

        color: 'white',
        left: '10%',
        top: '12%',
        height: "80vh",
        width: "90%",
        // padding: '0 30px',
    });

    return (
        <div
            style={{
                width: "90vw",
                height: "90vh",
                textAlign: 'center',
            }}>

            <MyPaper>
                <div >
                <p
                    className={'title'}
                    style={{  fontSize: '150px', marginTop:'-4vh'}}>Journal
                </p>
                <p  className={'title'}
                style={{ fontSize: '30px', marginTop:'-6vh' }}>
                    Find it, in you!
                </p>
                </div>
                <UserForm />
            </MyPaper>
        </div>
    )
}

export default login
