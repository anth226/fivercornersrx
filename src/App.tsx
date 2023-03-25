import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Questionnaire from './Pages/Questionnaire/Questionnaire';
import BillingQuestionnaire from './Pages/BillingQuestionnaire/BillingQuestionnaire';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UserDashboard /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <Questionnaire /> */}
        <BillingQuestionnaire />
      </div>
    </BrowserRouter>
  );
}

export default App;
