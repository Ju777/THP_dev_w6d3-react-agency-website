import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route path = "/" element = {<SharedLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path='/works' element = {<Works/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
