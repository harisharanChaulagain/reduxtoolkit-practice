import React from 'react';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <div className='container mx-auto' style={{width:'75%'}}>
       <Navbar/>
       <UserDetails/>
    </div>
  )
}

export default App