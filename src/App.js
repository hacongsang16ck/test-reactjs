import { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import FormInfo from './components/FormInfo';
import Taskbars from './components/Taskbars';


function App() {
  return (
    <div>
      <header className="site-header">
        <Taskbars />
      </header>
      <main className="site-main">
        <FormInfo />
      </main>
    </div>
    
  );
}

export default App;