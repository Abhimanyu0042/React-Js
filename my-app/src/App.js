
import './App.css';
import Navbar from './Components/Navbar';
import Components2 from './Components/Components2';
import { useState } from 'react';

function App() {
  const [mode, setMode]=useState('light')

  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
 return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
<>
<Navbar title="Chitkara University" abouttxt="About CU" mode={mode} toggleMode={toggleMode} />
<Components2/>
</>  
  );
}

export default App;
