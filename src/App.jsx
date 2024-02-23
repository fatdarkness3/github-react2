import Profile from '../component/pages/ProfilePage/ProfilePage.jsx';
import RepositoryPage from '../component/pages/repositories/mainPageOfRepositories.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../component/pages/homePage/homePage.jsx';
import React from 'react';

import InsideRepositories from '../component/pages/repositories/renderRepositories/insideRepositories/insideRepositories.jsx';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:username' element={<Profile />} />

      <Route path='/:username/repository' element={<RepositoryPage />} />

      <Route
        path='/:username/:nameOfRepository'
        element={<InsideRepositories />}
      />
    </Routes>
  );
}
