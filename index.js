const express = require('express');

const app = express();

const router = express.Router;

require('dotenv').config();

app.use(require('cors')());

const mongoose = require('mongoose');

require('./services/connection')(mongoose);

const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: 'https://dev-zhspxsl7.us.auth0.com'
};

app.use(auth(config));

const port = process.env.PORT || 3000;

app.listen(port);

// Dependency injection. With this approach, swapping a certain function from a certain package can be done with ease
const dependencies = {
    app: app,
    mongoose: mongoose,
    router: router
};

// Loading all Mongoose models
require('./models/movie')(dependencies);

require('./models/review')(dependencies);

require('./models/genre')(dependencies);

require('./models/actor')(dependencies);

require('./models/user')(dependencies);

require('./models/language')(dependencies);

// Assigning them to dependencies.models object so that the models can easily be passed around the application
dependencies.models = {
    movie: mongoose.model('Movie'),
    review: mongoose.model('Review'),
    genre: mongoose.model('Genre'),
    actor: mongoose.model('Actor'),
    user: mongoose.model('User'),
    language: mongoose.model('Language')
};

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.use('/movies', require('./controllers/movies')(dependencies));

/*
const movie = new dependencies.models.movie();
movie.title = 'abc';
movie.save(function (err) {
    console.log(err);
});
*/