import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from "react-router-dom";

import { HeatMap } from './heatmap/HeatMap.js'

function Home() {
    return (

               <div className="App">
                 <header className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
                   <p>
                     Highcharts Demo
                   </p>
                   <a
                     className="App-link"
                     href="https://reactjs.org"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Learn React
                   </a>
                 </header>
                 <main>

                   <Link to="/heatmap">HeatMap</Link>

                 </main>

                 <div>
                   <Route path="/heatmap" component={HeatMap} />
                 </div>
               </div>
             );
}

function App() {
  return (

    <Home />


  );
}

export default App;
