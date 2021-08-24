import React from "react";

// Component Imports
import Navigation from "./Components/Navigation";
import Home from "./Components/Pages/Home";
import Trippy from "./Components/Pages/Trippy";
import Footer from "./Components/Footer";
import WebDevelopment from "./Components/Pages/WebDevelopment";

// Router Dom Import
import {Route, Switch} from "react-router-dom";

// Bootstrap Import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route path='/trippy' component={Trippy}/>
                <Route path='/WebDevelopment' component={WebDevelopment}/>
                <Route path='/' component={Home}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
