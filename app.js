const express = require('express');
const path = require("path");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
    //res.sendFile(path.join(__dirname + ""));
})
app.listen(3000, () => console.log("Server ready on port 3000."));