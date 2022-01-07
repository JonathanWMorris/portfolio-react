import React from "react";

// Component Imports
import Navigation from "./Components/Navigation";
import Home from "./Components/Pages/Home";
import Trippy from "./Components/Pages/Trippy";
import Footer from "./Components/Footer";
import WebDevelopment from "./Components/Pages/WebDevelopment";
import Mechanical from "./Components/Pages/Mechanical";

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
                <Route path='/web-development' component={WebDevelopment}/>
                <Route path='/mechanical' component={Mechanical}/>
                <Route path='/' component={Home}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
