import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Work from './components/Work';

import ThemeContext from './contexts/ThemeContext';

function App() {

  const [ currentTheme, setCurrentTheme ] = useState();

  const themeContextValue = {
    theme : currentTheme,
    updateTheme : setCurrentTheme
  }


  return (
    <ThemeContext.Provider value = {themeContextValue}>
      <div className = {currentTheme} >
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<SharedLayout/>}>
              <Route index element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = '/works' element = {<Works/>}/>
              <Route path = '/works/:workSlug' element = {<Work/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
