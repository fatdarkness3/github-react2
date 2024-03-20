import { Routes, Route } from 'react-router-dom';
import HomePage from '../component/pages/homePage/homePage.jsx';
import React from 'react';
import InsideRepositories from '../component/pages/repositories/renderRepositories/insideRepositories/insideRepositories.jsx';
import LoadAllPages from '../component/components/all-pages-load-here/all-pages-load-here.jsx';

export function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/:username' element={<LoadAllPages />} />
        <Route
          path='/:username/:nameOfRepository'
          element={<InsideRepositories />}
        />
      </Routes>
    </>
  );
}
