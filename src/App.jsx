import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Header } from './components/Header';
import AuroraBackground from './components/background/AuroraBackground';
// import { WhiteBackground } from './components/background/WhiteBackground';
import MazeGame from './components/MazeGame/MazeGame';
function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 1 },
    in: { opacity: 1 },
    out: { opacity: 1, }
  };

  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.2 };

  return (
    <div className="App">
      {/* <Header /> */}
      <AuroraBackground></AuroraBackground>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />


          <Route
            path="/maze"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
              >
                <MazeGame />
              </motion.div>
            }
          />




          <Route
            path="/background"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
              >
                {/* <WhiteBackground /> */}
              </motion.div>
            }
          />



        </Routes>
      </AnimatePresence>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
