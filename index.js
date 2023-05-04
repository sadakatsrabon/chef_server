const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json');

app.get('/',(req, res) =>{
    res.send('chekking backend index js');

})
app.listen(port, () =>{
    console.log(`Food loader Is Cooking on: ${port}`)
});

app.get('/catagories', (req, res) =>{
    res.send(catagories);
})