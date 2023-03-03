import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './router';
import Header from './components/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <MyRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
