import React from 'react';
import ReactDOM from 'react-dom';

import { ShoppingCartRounded } from '@material-ui/icons/';

import { 
  Alert, 
  Button, 
  FormControl, 
  FormHelperText, 
  InputLabel, 
  Input 
} from '@mui/material';

import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <Header name="SimpleForms"/>
      <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default App;
