// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page/mainpage';
import LoginPage from './page/loginpage';
import Register from './page/registerpage';
import Layout from './component/Layout'; // Import your Layout component

const App = () => {
  return (
    <Router>
      <Layout>  {/* Wrap your routes inside Layout */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
