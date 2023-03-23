import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserDashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
