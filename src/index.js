import React from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import App from './App';

// React Router Imports
import {HashRouter as Router} from 'react-router-dom';

// CSS
import './index.css';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
