import React from 'react';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import CoworkingSpace from './pages/CoworkingSpace';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './styles/app.less';
import './styles/main.css';
import './styles/helper.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Route exact path='/hub' component={ Dashboard } />
          <Route path='/hub/bookings' component={ Booking } />
          <Route path='/hub/s/coworking-space' component={ CoworkingSpace } />
          <Route path='/covid-advisory' component={() => { 
            window.open('https://bit.ly/2Zn5YkG'); 
            return null;
          }}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
