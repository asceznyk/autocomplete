import React, { useState } from 'react';

import {  
  Button, 
  FormControl, 
  InputLabel, 
  Input,
  AppBar,
  Box, 
  Toolbar,
  Typography,
  Card,
  CardActions,
  CardContent,
  Container,
  Autocomplete,
  TextField
} from '@mui/material';

import './App.css';

import topMovies from './Movies.js'

const Title = 'AutoComplete';

function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title Searched
        </Typography>
        <Typography variant="h5" component="div">
          { props.header }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Genre: action
        </Typography>
        <Typography variant="body2">
          { props.body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}

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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [content, setContent] = useState({
    header:'',
    body:'',
  });


  function handleClick(e) {
    e.preventDefault();

    console.log(query);

    fetch('http://35.222.117.4:5000', {
      method:'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({'query': query})
    })
    .then(response => response.json())
    .then(data => {
      setIsLoaded(true);
      setContent(data);
    })
  }

  function handleChange(e, value) {
    if(typeof value === 'string' || (value && value.inputValue)) {
      setQuery({label: value});
    } else {
      setQuery(value);
    }
  } 

  return (
    <div className="App">
      <Header/>
      <Container> 
      <Box mt={1} mb={1}>
        <Box mb={2}> 
          <Autocomplete
            id="user-input"
            value={query}
            onChange={(event, newValue) => {
              if (typeof newValue === 'string') {
                setValue({
                  title: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}

            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some((option) => inputValue === option.label);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }

              return filtered;
            }}

            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={topMovies}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.label;
            }}
            renderOption={(props, option) => (
              <Box component="li" {...props} >{option.label} {option.year}</Box>)}
            freeSolo
            renderInput={(params) => <TextField {...params} label="Movie"/>}
          />
        </Box>
        <Box mb={2}>
          <Button variant="outlined" id="search-movie" onClick={ handleClick }>Search</Button>
        </Box>
      </Box>
      <OutlinedCard header= {content.header} body = {content.body} />
      </Container>
    </div>
  );  
}

export default App;
export {Title}
