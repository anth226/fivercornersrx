import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UserDashboard /> */}
        <SignIn />
      </div>
    </BrowserRouter>
  );
}

export default App;
