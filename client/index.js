import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'


ReactDOM.render(
    <Router >
        <switch>
       
       <Route exact path='/' component={App}></Route>


       <Route path='/App2' component={App2}></Route>
       </switch>
    </Router>
     ,
    document.getElementById('root')
);

registerServiceWorker();
