const path = require('path');
const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//built-in express method to add middleware function that will be triggered for every incoming request
app.use(authRoutes);

app.listen(3000);