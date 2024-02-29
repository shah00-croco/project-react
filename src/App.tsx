import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed `useLocation` import
import MainPage from './page/mainpage';
import LoginPage from './page/loginpage';
import Register from './page/registerpage';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    return (
      <AnimatePresence mode='wait'>
        <Router>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/loginpage" element={<LoginPage/>} />
              <Route path="/registerpage" element={<Register/>} />
          </Routes>
        </Router>
      </AnimatePresence>
    );
}

export default App;