const express = require('express')
const connect  = require('./config/database')
const bodyParser = require('body-parser')
const ApiRoutes = require('./routes/index')
const passport = require('passport');
const app = express();
const {passportAuth} = require('./config/jwtmiddleware')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', ApiRoutes);

app.listen(3000, async ()=>{

    console.log('server started at 3000')
    await connect();
    console.log('mongodb connected');

});