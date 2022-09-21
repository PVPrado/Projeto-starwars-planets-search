import React from 'react';
import './App.css';
import MyContext from './contexts/MyContext';
import Table from './tests/components/Table';

function App() {
  return (
    <MyContext.Provider>
      <h1>PLANETS</h1>
      <Table />
    </MyContext.Provider>
  );
}

export default App;
