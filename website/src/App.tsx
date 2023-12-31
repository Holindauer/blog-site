// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MarkdownViewer from './components/MarkdownViewer/MarkdownViewer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<MarkdownViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
