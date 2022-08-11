import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import {HomeView} from './views/HomeView/HomeView';
import './App.css';
import {Footer} from './components/Footer/Footer';
import {PrivacyPolicy} from './components/Home/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
