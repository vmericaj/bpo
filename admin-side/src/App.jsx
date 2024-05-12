// App.jsx
import React from 'react';
import ManageAccount from './pages/ManageAccount';
import ChurchAccount from './pages/ChurchAccount';
import Dashboard from './pages/Dashboard';
import Navbar from './global/Navbar';
import MemberAccount from './pages/MemberAccount'; 
import Login from './pages/Login';

const App = () => {
  console.log("App component is rendering");

  return (
    <div>
      <ChurchAccount/>
    </div>
  );
};

export default App;
