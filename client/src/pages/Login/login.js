import React from 'react'
import './login.css'
import { SiLivejournal } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
// import { Link } from 'react-router-dom'
import LogoutBtn from '../../components/LogoutBtn'
import LoginBtn from '../../components/LoginBtn'
import { styled } from '@material-ui/core/styles';
import { Button, Paper, IconButton } from '@material-ui/core';
import SlidingLogin from '../../components/slidingLogIn'

const login = () => {

    const MyPaper = styled(Paper)({
        position: 'fixed',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        marginLeft: '2.5vw',
        marginTop: '10vh',
        height: "88vh",
        width: "95vw",
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
                <div style = {{height:  '20vh', marginBottom: '20vh'}}>
                <p
                    className={'title'}
                    style={{ marginTop: '-4vh', fontSize: '180px' }}>Journal
                </p>
                <p  className={'title'}
                style={{ marginTop: '-10vh', fontSize: '30px' }}>
                    Find it, in you!
                </p>
                </div>
                <div style = {{marginTop: '20vh', height: '30vh'}} >
                <SlidingLogin/>
                </div>
            <LoginBtn style={{ display:'block' }}></LoginBtn>
            </MyPaper>
        </div>


        // <div className="container login-container">
        //     <div className="card pb-5" >
        //         <div className="card-content">
        //             <h1 > Personalized Journal</h1>
        //             <SiLivejournal size={'50%'} />
        //             <div className="section mt-5">
        //                 <p className="lead">Begin your Journey!!!!!!</p>
        //             </div>
        //             <div className="divider mt-2"></div>
        //             <div className="section" style={{ overflow: 'clear' }}>
        //                 <FcGoogle size={'50%'} />
        //                 {/* <Link to="/auth/google" className="btn red darken-1"> */}
        //                 <LoginBtn />
        //                 {/* <span style={{ backgroundColor: 'red', color: 'white', padding: 12, borderRadius: 30 }}>Log In With Google</span> */}
        //                 {/* </Link> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}

export default login
