const express = require('express');
const path = require('path');
const jokes = require('./jokes.json');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get('/jokes', (req, res) => {
    const jokeId =  Math.floor(Math.random() * jokes.length) + 1;
    const randomJoke = jokes.find(joke => joke.id === jokeId);
    res.status(200).json({
        setup: randomJoke.setup, 
        punchline: randomJoke.punchline
    });
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});