const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname+'/public')));
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);
app.listen(PORT,function() {
    console.log("App listening to PORT:" + PORT);
});
