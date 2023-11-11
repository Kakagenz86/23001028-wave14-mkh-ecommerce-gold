import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import LandingPage from './pages/LandingPage'
import DetailCarPage from './pages/DetailCarPage';
import NotFound from './pages/NotFound';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/search" element={<SearchResult/>}/>
          <Route path="/detail" element={<DetailCarPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
