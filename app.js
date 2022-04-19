const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get(path, code);


app.get("/about", (req, res, next) => {
    console.log(req.url);
    console.log("a request on the ABOUT page was received... ")

    res.sendFile(__dirname + '/views/about.html');
});


app.listen(3001, () => {
    console.log("server listening to requests...")
});

