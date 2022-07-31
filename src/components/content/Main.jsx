import React from 'react';
import Dashboard from './Dashboard';
import MainContent from './MainContent';

const Main = () => {
    return(
        <div className='main'>
          <Dashboard/>
          <MainContent/>
        </div>
    )
}

export default Main;