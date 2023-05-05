const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allData = require('./data/allData.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('chekking backend index js');
})
app.listen(port, () => {
    console.log(`Food loader Is Cooking on: ${port}`)
});

app.get('/alldata', (req, res) => {
    res.send(allData);
});

app.get("/allData/:id", (req, res) => {
    const id = req.params.id;
    let item = null;
    allChefs.forEach((obj) => {
      const chef = obj.chefs.find((c) => c.id == id);
      if (chef) {
        item = chef;
      }
    });
    if (item) {
      res.send({ item });
    } else {
      res.status(404).send({ error: `Chef with ID ${id} not found` });
    }
  });
// app.get("/allData/:id", (req, res) => {
//     const id = req.params.id;
//     // console.log(id);
//     const selectedData =
//     allData.find(d => d.id === id);
//     res.send(selectedData);
// });


// recipes data section 
app.get('/recipes', (req, res) => {
    res.send(recipes);
})