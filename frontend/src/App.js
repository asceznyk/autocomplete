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
  Chip,
  Stack,
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

const endpoint = 'http://104.154.131.224:5000';

const theme = createTheme({
  palette: {
    primary : {
      main: '#00A5CF',
      contrastText: '#fff'
    },
    text : {
      primary: '#000',
      secondary: '#25A18E',
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

function Header(props) {
  return (
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" color={props.color}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{ Title }</Typography>
      </Toolbar>
      </AppBar>
    </Box>
  );
}

function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }} mb={1} mt={1}>
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          { props.header }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { props.body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color={props.color} onClick={() => (postReq(endpoint+'/delete/', {'id':props.id}, props.setData))}>Delete</Button>
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
      <ThemeProvider theme={theme}>
      <Header color="primary"/>
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
              const isExisting = options.some((option) => inputValue === option.label);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  label: inputValue, 
                  year: 2021
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
              <Box {...props} ><Stack spacing={1} direction="row">
                <Typography variant="body2">{option.label}</Typography> 
                <Chip label={option.year} color="primary" size="small" variant="outlined"/>
              </Stack></Box>
            )}
            freeSolo
            renderInput={(params) => <TextField {...params} label="Movie" color="secondary"/>}
          />
        </Box>
        <Box mb={2}>
          <Button variant="contained" id="search-movie" onClick={ addQuery }>Add</Button>
        </Box>
      </Box>
      {content.map((row, index) => (
        <OutlinedCard setData={setData} key={index} header={row.query} body={row.query} id={row._id}/>
      ))}
      </Container>
      </ThemeProvider>
    </div>
  );  
}

