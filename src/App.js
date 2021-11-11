import logo from './logo.svg';
import './App.css';
import { Alert, Button, ShoppingCartRounded } from '@mui/material'

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
        <Alert variant="standard" color="info">Check out this alert!</Alert>
        <Button variant="text" startIcon={<ShoppingCartRounded />}>Add to Cart</Button>
      </header>
    </div>
  );
}

export default App;
