const express = require('express');

const app = express();

const router = express.Router;

require('dotenv').config();

app.use(require('cors')());

const mongoose = require('mongoose');

require('./services/connection')(mongoose);

const port = process.env.PORT || 3000;

app.listen(port);

// Dependency injection. With this approach, swapping a certain function from a certain package can be done with ease
// Ideally, these functions should be based on an interface
const dependencies = {
    app: app,
    Schema: mongoose.Schema,
    router: router
};

app.use('/movies', require('./controllers/movies')(dependencies));