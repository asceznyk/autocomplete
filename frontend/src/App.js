import React from 'react';

//import axios from 'axios';

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

const Title = 'AutoComplete';

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

async function getMovieData(query) {
  const response = await fetch('http://104.154.31.26:3000/', {
    method:'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({'query':query})
  });
  const data = await response.json();
  return data;
}

function movieEnter() {
  const movieTitle = document.getElementById("user-input").value;
  getMovieData(movieTitle).then(data => console.log(data));
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}><Header/></Grid>
          <Grid item xs={12}>
            <FormControl>
            <InputLabel htmlFor="user-input">Type any movie title..</InputLabel>
            <Input onKeyUp={ movieEnter } id="user-input" aria-describedby="helper-text" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" id="search-movie">Search</Button>
          </Grid>
        </Grid>
      </div>
    );  
  }
}

export default App;
export {Title}