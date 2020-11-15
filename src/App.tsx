import React from 'react';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import CoworkingSpace from './pages/CoworkingSpace';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './styles/app.less';
import './styles/main.css';
import './styles/helper.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/hub' component={ Dashboard } />
          <Route path='/hub/bookings' component={ Booking } />
          <Route path='/hub/s/coworking-space' component={ CoworkingSpace } />
          <Route exact path='/hub/account/profile' component={ Profile }/>
          <Route exact path='/hub/account/profile/edit' component={ ProfileEdit }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
