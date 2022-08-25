import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts';

import Dashboard from './pages/Dashboard';
import Status from './pages/Status';

import 'src/styles/app.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/status" element={<Status />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
