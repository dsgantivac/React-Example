import React from 'react';
import ReactDOM from 'react-dom';
//importar bootstrap a la caplicacion
import 'bootstrap/dist/css/bootstrap.css';
// npm i bootstrap
import App from "./App.js";
import Counter from "./components/counter.jsx";
import Counters from "./components/counters.jsx";


const element = <h1>Hello world</h1>;


    ReactDOM.render(element,document.getElementById('root'));

//    ReactDOM.render(<Counter />,document.getElementById('root2'));
    ReactDOM.render(<App />,document.getElementById('root2'));
