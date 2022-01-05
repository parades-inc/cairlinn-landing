import React from 'react';
import { Routes } from 'react-router-dom';

import './App.css';

import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Routes>

        </Routes>
      </main>
    </div>
  );
}

export default App;
