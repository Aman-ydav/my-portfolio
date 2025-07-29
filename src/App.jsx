import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import CursorCircle from './components/CursorCircle';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <CursorCircle />
      <div className="relative z-10">
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
