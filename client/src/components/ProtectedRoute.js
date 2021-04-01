import React from 'react'
import { Route, Redirect } from 'react-router-dom'


function ProtectedRoute({ component: Component, ...rest}) {

    const isAuth = localStorage.getItem('userId')

    return <Route {...rest} render={(props) => {
        if (isAuth) {
            return <Component />
        } else {
            return <Redirect to={{ pathname: '/' }} />
        }
    }} 
    />
}
    

export default ProtectedRoute;

