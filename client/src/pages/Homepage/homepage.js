import React from 'react'
import { FaRegGrinTongueWink } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import LoginBtn from '../Login/loginBtn';
import Calendar from '../../components/Calendar';

const homepage = () => {
    return (
        <div className="App">
            <Calendar />
            <header className="App-header">

                <IconContext.Provider value={{ color: 'white', size: '10em', className: "global-class-name mr-3 mt-3" }}>
                    <div>
                        <FaRegGrinTongueWink />
                    </div>
                </IconContext.Provider>
                <h1 style={{ marginTop: 50, marginBottom: 50 }} >Group-2 IS the best!!!!</h1>
                <LoginBtn />

                <a
                    style={{ marginTop: 50, marginBottom: 50 }}
                    className="App-link"
                    href="https://github.com/P3TeamTwo/p3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Were going to make the best personalized journal of all TIME!!!
                    Just a quick test
                </a>

            </header>


        </div>
    )
}


export default homepage
