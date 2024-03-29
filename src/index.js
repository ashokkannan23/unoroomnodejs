var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
let mongoose = require('mongoose');

let guestRoute = require('./routes/guest');
let facilityRoute = require('./routes/facility');
let occupiedRoomRoute = require('./routes/occupiedroom');
let metaRoute = require('./routes/meta');
let uiRoute = require('./routes/ui');

mongoose.connect('mongodb+srv://mlHaU23ptnL61k86:8ZmLW6KyCVxKwJfR@unoroomlatestdb.5ckf1o6.mongodb.net/?retryWrites=true&w=majority&appName=unoroomlatestdb', {useNewUrlParser: true});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/guest', guestRoute);
app.use('/facility', facilityRoute);
app.use('/occupiedroom', occupiedRoomRoute);
app.use('/meta', metaRoute);
app.use('/ui', uiRoute);


// Catch 404 error
app.use((req, res, next) => {
    res.status(404).send('Resource not found');
});

//Handle for error 500
app.use((err, req, res, next) => {
    console.log("PRINTING THIS ERRPR", err);
    res.status(err.status).json(err);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server listening on port ${PORT}.`));
