import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DataEntryForm from './pages/page';
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DataEntryForm/>} />
      </Routes>
    </>
  );
};

export default App;