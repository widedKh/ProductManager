
import React from 'react';
import Main from './components/Main';
import Details from './components/Details';
import Update from './components/Update';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
