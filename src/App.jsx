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
    initial: { opacity: 0 },  // Start fully transparent
    in: { opacity: 1 },       // Fade in to fully visible
    out: { opacity: 0 },      // Fade out to transparent
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1, // Adjust this for smoothness
  };

  return (
    <div className="App">
      <Header />
      <AuroraBackground />
      <AnimatePresence mode="wait">
        {/* Use location.key for animations */}
        <Routes location={location} key={location.key}>
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
