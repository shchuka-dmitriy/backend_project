const express = require('express');
const { User } = require('./models');



const app = express();

app.get('/', function(req, res) {       
    res.send('Response from server')
});

app.listen(3000);
