const express = require('express');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs")

app.use(express.static('public'));

// app.get(path, code);
app.get("/", (req, res, next)=> {
    res.sendFile(__dirname + '/views/home.html');
})

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/limoncello", (req, res, next) => {

    const data = {
        title: 'Limoncello',
        price: 20,
        image: 'productLimoncello.jpeg',
        stores: ['Online', 'Madrid', 'Berlin', 'Paris']
    }

    res.render('product',data)
});

app.get("/whisky", (req, res, next) => {

    const data = {
        title: 'Single Malt',
        price: 90,
        image: 'singleMalt.webp'
    }
    
    res.render('product',data)
});

app.get("/tequila", (req, res, next) => {

      const data = {
        title: 'Tequila',
        price: 35,
        image: 'tequila.jpeg'
    }
    
    res.render('product',data)
});

app.listen(3001, () => {
    console.log("server listening to requests...")
});

