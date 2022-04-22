const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product.model');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));


/* Connect to DB */
mongoose
    .connect('mongodb://localhost/ironborn-ecommerce')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


// app.get(path, code);
app.get("/", (req, res, next)=> {
    res.render('home')
})

app.get("/about", (req, res, next) => {
    res.render('about')
});

app.get("/contact", (req, res, next) => {
    res.render('contact')
});



app.get("/products/:productId", (req, res, next) => {
    console.log(req.params.productId);
    Product.findById(req.params.productId)
        .then((productDetails)=>{
            res.render("product", productDetails)
        })
        .catch(error => {console.log('we have an error', error);})
})

app.listen(3001, () => {
    console.log("server listening to requests...")
});

