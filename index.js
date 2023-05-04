const express = require('express')
const app = express();
const cors = require('corse');
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/',(req, res) =>{
    res.send('chekking backend index js');
    
})
app.listen(port, () =>{
    console.log(`Food loader Is Cooking on: ${port}`)
});

// catagories data section 
app.get('/catagories', (req, res) =>{
    res.send(catagories);
})

// recipes data section 
app.get('/recipes',(req , res) =>{
    res.send(recipes);
})