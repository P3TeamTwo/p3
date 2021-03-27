import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from '../RegisterForm';

// Creating unit test
it('renders without crashing', () => {
    const Div = document.createElement('div');
    ReactDOM.render(<RegisterForm/>, Div)
});
