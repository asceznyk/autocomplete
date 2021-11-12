import React from 'react';

import { ShoppingCartRounded } from '@material-ui/icons/';
import MenuIcon from '@mui/icons-material/Menu';

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
      <FormControl>
      <InputLabel htmlFor="user-input">Email address</InputLabel>
      <Input id="user-input" aria-describedby="helper-text" />
      <FormHelperText id="helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <Button id="user-email">Give my email</Button>
    </div>
  );
}

export default App;
