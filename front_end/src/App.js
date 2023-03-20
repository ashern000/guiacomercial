import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './router';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <MyRoutes/>
    </BrowserRouter>
    </>
  );
}

