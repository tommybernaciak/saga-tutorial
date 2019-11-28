import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Movies } from './components/movies';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
};

export default App;
