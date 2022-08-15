import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';

function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* TinderCards */}
     <TinderCards />
     {/* SwipeButtons */}
     <SwipeButton />
    </div>
  );
}

export default App;
