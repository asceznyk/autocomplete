import React, { useState, useEffect } from 'react';
import {  
  Button,
  AppBar,
  Box, 
  Toolbar,
  Typography,
  Card,
  CardActions,
  CardContent,
  Container,
  Autocomplete,
  TextField,
  createFilterOptions
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import topMovies from './Movies.js';

import './App.css';

export const Title = 'AutoComplete';

const filter = createFilterOptions();

const headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'
}

const endpoint = 'http://35.226.106.148:5000';

const theme = createTheme({
  palette: {
    background : {
      default: '#004e64'
    }
  }
})

function postReq(url, body, successFunc) {
  fetch(url, {
    method:'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(successFunc);
}

function getReq(url, successFunc) {
  fetch(url, {
    method:'GET',
    headers: headers
  })
  .then(response => response.json())
  .then(successFunc)
}

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default'}}>
      <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{ Title }</Typography>
      </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }} mb={1} mt={1}>
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
        <Button size="small" onClick={() => (postReq(endpoint+'/delete/', {'id':props.id}, props.setData))}>Delete</Button>
      </CardActions>
    </Card>
    </Box>
  );
}

export default function App() { 
  const [query, setQuery] = useState('');
  const [content, setContent] = useState([]);

  function setData(data) {
    setContent(data);
  }

  function addQuery(e) {
    e.preventDefault();
    postReq(endpoint+'/insert/', {'query': query}, setData);
  }

  useEffect(() => {
    getReq(endpoint, setData);
  }, []);

  return (
    <div className="App">
      <Header/>
      <Container> 
      <Box mt={10} mb={2}>
        <Box mb={2}> 
          <Autocomplete
            id="user-input"
            value={query}
            onChange={(event, newValue) => {
              if (typeof newValue === 'string') {
                setQuery(newValue);
              } else if (newValue && newValue.inputValue) {
                setQuery(newValue.label);
              } else if (newValue != null){
                setQuery(newValue.label);
              }
            }}

            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some((option) => inputValue === option.label);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  label: inputValue
                });
              }

              return filtered;
            }}

            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={topMovies}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }

              if (option.inputValue) {
                return option.inputValue;
              }

              return option.label;
            }}
            renderOption={(props, option) => (
              <Box component="li" {...props} >{option.label} {option.year}</Box>)}
            freeSolo
            renderInput={(params) => <TextField {...params} label="Movie"/>}
          />
        </Box>
        <Box mb={2}>
          <Button variant="outlined" id="search-movie" onClick={ addQuery }>Add</Button>
        </Box>
      </Box> 
      {content.map((row, index) => (
        <OutlinedCard setData={setData} key={index} header={row.query} body={row.query} id={row._id}/>
      ))}
      </Container>
    </div>
  );  
}

