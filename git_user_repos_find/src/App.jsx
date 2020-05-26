import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path='/about' component={About} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
