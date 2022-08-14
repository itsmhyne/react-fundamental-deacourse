// ini parent component
import React, { useEffect, useRef, useState } from 'react';
import Albums from './components/albums/main.albums.js';
import MainLayout from './components/layouts/main_layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// () => sama dengan function
const App = () => {
  return (
    <>
      <MainLayout >
        <Router>
          <Routes>
            <Route path='/' element={<h1>Homepage</h1>} />
            <Route path='/albums' element={<Albums />} />
            <Route path='/posts' element={<h1>Posting</h1>} />
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </Router>
      </MainLayout>
    </>
  );
}

export default App;

// =-= documentation deacourse 14 Agustus 2022 -=- //
