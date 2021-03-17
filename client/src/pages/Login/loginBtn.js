import React from 'react'
import { Link } from 'react-router-dom'

const loginBtn = () => {
    return (
        <div>
            <Link className="navlink mr-2" to="/login"><button>Login</button></Link>
        </div >
    )
}

export default loginBtn

