import React from 'react';

import { ShoppingCartRounded } from '@material-ui/icons/';
//import MenuIcon from '@mui/icons-material/Menu';

import {  
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

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SimpleAJAX
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <FormControl>
      <InputLabel htmlFor="user-input">Email address</InputLabel>
      <Input id="user-input" aria-describedby="helper-text" />
      <FormHelperText id="helper-text">We'll never share your email.</FormHelperText> 
      <Button id="user-email">Give my email</Button>
      </FormControl>
    </div>
  );
}

export default App;
