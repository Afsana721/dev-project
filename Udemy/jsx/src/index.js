//import React & React DOM library
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Get a reference to the div with ID root that placed inside index.html.
const element = document.getElementById('root');

//Tell React to take control of that element.
const root = ReactDOM.createRoot(element);

//Show the component on the screen: App as a JSX element.
root.render( <App /> );