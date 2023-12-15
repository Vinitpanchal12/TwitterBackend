const express = require('express')
const connect  = require('./config/database')
const bodyParser = require('body-parser')
const ApiRoutes = require('./routes/index')
const app = express();

app.listen(3000, async ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    console.log('server started at 3000')
    await connect();
    console.log('mongodb connected');

});