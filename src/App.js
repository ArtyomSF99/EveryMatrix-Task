import React from 'react'
import './App.css';
import Dashboard from './components/content/Dashboard';
import Main from './components/content/Main';
import MainContent from './components/content/Main';
import LeftNavBar from './components/navbar/LeftNavBar';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <LeftNavBar/>
      <Main/>
      </div>
      
    </div>
  );
}

export default App;
