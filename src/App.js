import React from 'react';
import './App.css';
import Car from './Car';
import Header from './header.jpg';





function App() {
  
  return (
    <div className="app" >
      <img src={Header} alt="" ></img>
      < Car brand='BMW' model='335i' price='200000'/>
      < Car brand='Aston Martin' model='Vanquish' price='233000'/>
      < Car brand='Toyota' model='Prius' price='150000'/>
      
      
      
    </div>
  );
}

export default App;
