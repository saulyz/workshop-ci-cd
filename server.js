const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));


const {variations} = require('./server-data.js');

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


app.get('/api', function (req, res) {
    let index = getRandom(0, variations.length);
    console.log('rolling dice with value ', index);
    return res.send(variations[index]);
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => 
        res.sendFile(path.resolve("build", "index.html"))
    );
} else {
    // development mode
    app.use(express.static("public"));
    app.get("*", (req, res) => {
        console.log('(development) serving index.html');
        res.sendFile(path.resolve("public", "index.html"));
    });
}

const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
    console.log( `server listening on port: ${port}`);
});