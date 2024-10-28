import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import Website from "./pages/Website";
import LinkedIn from "./pages/LinkedIn";
import Contact from "./pages/Contact";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResult />} />
        <Route path='/website' element={<Website />} />
        <Route path='/linkedin' element={<LinkedIn />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
