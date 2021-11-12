import React from 'react';
import ReactDOM from 'react-dom';

import { ShoppingCartRounded } from '@material-ui/icons/';
import MenuIcon from '@mui/icons-material/Menu';

import { 
  Alert, 
  Button, 
  FormControl, 
  FormHelperText, 
  InputLabel, 
  Input,
  AppBar,
  Box, 
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';

import './App.css';

function Header(props) {
  return <h1>{props.name}</h1>
}

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
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
