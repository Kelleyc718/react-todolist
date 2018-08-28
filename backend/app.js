//Libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//server configuration
var basePath = '/todo';
var port = 6200;

// Connection to DB


// Routes and Backend Funcioncalities
var todoListRoutes = require('./src/routes/todoListRoutes');

// App Instance
var app = express();
app.use(express.static('pmongoose.connect(\'mongodb://mongodb\')\n' +
    '    .then(() => {\n' +
    '      console.log(\'Backend Started\');\n' +
    '    })\n' +
    '    .catch(err => {\n' +
    '        console.error(\'Backend error:\', err.stack);\n' +
    '        process.exit(1);\n' +
    '    });ublic'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, todoListRoutes);

// Execute App
app.listen(port, () => {
  console.log('TodoList Backend running on Port: ',port);
});