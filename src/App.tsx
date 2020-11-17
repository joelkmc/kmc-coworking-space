import React from 'react';
import Booking from './pages/Bookings';
import DashboardCoworking from './pages/DashboardCoworking';
import DashboardVirtualOffice from './pages/DashboardVirtualOffice';
import CoworkingSpace from './pages/CoworkingSpace';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { SingleBooking } from './pages/SingleBooking';
import { Invoice } from './pages/Invoice';

import './styles/app.less';
import './styles/main.css';
import './styles/helper.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/hub' component={ DashboardCoworking } />
          <Route exact path='/hub/virtual-office' component={ DashboardVirtualOffice } />
          <Route exact path='/hub/bookings' component={ Booking } />
          <Route exact path='/hub/bookings/:bookingId' component={ SingleBooking } />
          <Route path='/hub/bookings/invoice/:bookingId' component={ Invoice } />
          <Route path='/hub/s/coworking-space' component={ CoworkingSpace } />
          <Route exact path='/hub/account/profile' component={ Profile }/>
          <Route exact path='/hub/account/profile/edit' component={ ProfileEdit }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
