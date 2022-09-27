import React from 'react';
import './App.css';
import Table from './components/Table';
import HeaderFilters from './components/HeaderFilters';
import MyProvider from './contexts/MyProvider';

function App() {
  return (
    <MyProvider>
      <h1>PLANETS</h1>
      <HeaderFilters />
      <Table />
    </MyProvider>
  );
}

export default App;
