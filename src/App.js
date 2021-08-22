import './App.css';
import {Route, Switch} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Pages/Home";
import Trippy from "./Components/Pages/Trippy";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import React from "react";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route path='/trippy' component={Trippy}/>
                <Route path='/' component={Home}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
