import '../styles/App.css';

import React from 'react';
import logo from '../res/logo.svg';

const App: React.FC = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    This is a sample deployment.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
        </a>
            </header>
        </div>
    );
};

export default App;
