import React from 'react'
import './App.scss';
import { ThemeContextProvider } from './contexts/ThemeContext'
import Routes from './pages/Routes'

function App() {
  return (
    <ThemeContextProvider>
      <Routes/>
    </ThemeContextProvider>
  );
}

export default App;
