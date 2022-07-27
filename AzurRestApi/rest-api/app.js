const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Import Routes
const assignamentRoute = require('./routes/assignament');
const physiotherapistRoute = require('./routes/physiotherapist');
const usersRoute = require('./routes/users');
const blogRoute = require('./routes/blog');

app.use('/assignament', assignamentRoute);
app.use('/physiotherapist', physiotherapistRoute);
app.use('/users', usersRoute);
app.use('/blog', blogRoute);


//Routes
app.get('/', (req, res)=>{
    res.send('We are on home');
})

// database
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})




// How to start listening to the server
app.listen(3000);