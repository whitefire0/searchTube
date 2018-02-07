import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBZ7GYfGfNVdsuWDL2y7o_rNnJkAe2 - av0';

//Create a new component that produces HTML
const App  = () => {
  return <div>Hello World!</div>
}


//Inject generated HTML and inject it into the DOM
ReactDOM.render(
  <App />, 
  document.querySelector('.container')
);