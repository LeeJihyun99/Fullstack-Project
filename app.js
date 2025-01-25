const path = require('path');
const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

// set ejs as application's template engine
// EJS (Embedded JavaScript) is a simple templating engine that allows you to generate HTML markup with embedded JavaScript. It is commonly used with Node.js applications to dynamically render web pages based on data.
app.set('view engine', 'ejs');

// set the directory path where template file is saved
// Combines Path Segments: path/to/current/directory/views
app.set('views', path.join(__dirname, 'views'));

//built-in express method to add middleware function that will be triggered for every incoming request
//middleware: function that executes during the lifecycle of an HTTP request in an Express application. It can modify the req (request) and res (response) objects or control the flow of the request-response cycle by calling next()
app.use(authRoutes);


app.listen(3000);