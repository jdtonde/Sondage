import React from 'react';
import {useState } from 'react';
import './App.css';
import Header from './components/Header';
import SondageList from './components/SondageList';
import SondageData from './data/SondageData';

function App() {
  const [Sondage,setSondage]=useState(SondageData);
  return (
    <div>
      <Header/>
      <div className="App">
          <h1>Sondage des Dirigeants</h1>
          <SondageList sondage={Sondage}/>
      </div>
    </div>
  );

}

export default App;
