// src/App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog_1 from './pages/Blog_1'; // Your blog post component
// Import other pages or components as needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-post-1" element={<Blog_1 />} /> {/* Route for the first blog post */}
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
