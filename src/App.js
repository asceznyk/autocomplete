import logo from './logo.svg';
import './App.css';
//import { Alert } from '@mui/material'

function App() {
  return (
    <div className="App">
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
          OK this looks good (locally!)
        </a>
        <!--<div>
          <Alert variant="standard" color="info">
            Check out this alert!
          </Alert>
          <Alert variant="outlined" color="info">
            Check out this alert!
          </Alert>
          <Alert variant="filled" color="info">
            Check out this alert!
          </Alert>
        </div>-->
      </header>
    </div>
  );
}

export default App;
