import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from "./counter"
import Resumecounter from './resumecounter';
import "./style.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Counter></Counter>
   <Resumecounter></Resumecounter>
  </div>
   

);
