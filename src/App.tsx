import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import {HomeView} from "./views/HomeView/HomeView";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
