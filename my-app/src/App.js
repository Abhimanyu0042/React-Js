import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Components2 from './Components/Components2';

function App() {
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
<Navbar title="Chandigarh University" abouttxt="About CU"/>
<Components2/>
</>  
  );
}

export default App;
