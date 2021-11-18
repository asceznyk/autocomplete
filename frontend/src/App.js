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
  Card,
  CardActions,
  CardContent
} from '@mui/material';

import './App.css';

const Title = 'AutoComplete';

async function getMovieData(query) {
  const response = await fetch('http://34.132.37.226:5000/', {
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
  const receiver = document.getElementById("receiver");
  const userInput  = document.getElementById("user-input"); 
  const movieTitle = userInput.value;
  getMovieData(movieTitle).then(data => {receiver.innerHTML = data});
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
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
  return (
    <div className="App">
      <Header/>
      <FormControl>
        <InputLabel htmlFor="user-input">Type any movie title..</InputLabel>
        <Input onKeyUp={ movieEnter } id="user-input" aria-describedby="helper-text" />
      </FormControl> 
      <Button variant="outlined" id="search-movie">Search</Button> 
      <OutlinedCard header="Something" body=""/>
    </div>
  );  
}

export default App;
export {Title}
