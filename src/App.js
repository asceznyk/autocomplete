import React from 'react';

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

class App extends React.Component {
  render() {
    return (
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
}

export default App;
export {Title}
