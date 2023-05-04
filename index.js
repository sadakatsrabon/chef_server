const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req, res) =>{
    res.send('chekking backend index js');

})
app.listen(port, () =>{
    console.log(`Food loader Is Cooking on: ${port}`)
});