import React from 'react';
import { Helmet } from 'react-helmet';

import {  
  Button, 
  FormControl, 
  InputLabel, 
  Input,
  AppBar,
  Box, 
  Toolbar,
  Typography,
  Grid
} from '@mui/material';

import './App.css';

const Title = 'SimpleAutoComplete';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{ Title }</Typography>
      </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  return (
    <Helmet><title> {Title} </title></Helmet>
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}><Header/></Grid>
        <Grid item xs={12}>
          <FormControl>
          <InputLabel htmlFor="user-input">Type any movie..</InputLabel>
          <Input id="user-input" aria-describedby="helper-text" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" id="search-movie">Search</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
