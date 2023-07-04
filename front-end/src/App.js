import logo from './logo.svg';
import './App.css';
import HeaderSection from './sections/HeaderSection';
import setBodyColor from './setBodyColor'
import React, { useState } from 'react';

function App() {

  return (
    <div className='App'>
      <HeaderSection>

      </HeaderSection>
      <button onClick={() => {setBodyColor({color: "#444444"})}}>Change Background</button>
    </div>
  );
}

export default App;
