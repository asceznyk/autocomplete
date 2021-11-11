import logo from './logo.svg';
import './App.css';
import { Alert, Button } from '@mui/material'
import { ShoppingCartRounded } from '@material-ui/icons/'

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
        this sucks!
        </a>
        <Alert variant="standard" color="info">Check out this alert!</Alert>
        <Button variant="text" startIcon={<ShoppingCartRounded />}>Add to Cart</Button>
      </header>
    </div>
  );
}

export default App;
