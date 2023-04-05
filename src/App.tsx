import { AboutUs } from './components/AboutUs/AboutUs';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import WithFormPage from './components/WithFormPage/WithFormPage';

export const App: FC = () => {
  return (
    <div className="App" title="React">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/form" element={<WithFormPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
