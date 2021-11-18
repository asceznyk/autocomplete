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
  CardContent,
  Container
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

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Container> 
        <Box mt={1} mb={1}>
          <Box mb={2}><FormControl>
            <InputLabel htmlFor="user-input">Type any movie title..</InputLabel>
            <Input id="user-input" aria-describedby="helper-text" />
          </FormControl></Box>
          <Box mb={2}><Button variant="outlined" id="search-movie">Search</Button></Box>
        </Box>
        <OutlinedCard header="Something" body=""/>
        </Container>
      </div>
    );  
  }
}

export default App;
export {Title}
