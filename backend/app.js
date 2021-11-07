require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api');
const healthRoutes = require('./routes/health-route');
const swaggerRoutes = require('./routes/swagger-route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use('/api', apiRouter);
app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);



// Serve the static files from the React app
if (process.env.NODE_ENV === 'production' || process.env.inbuild == 'true' || process.env.inbuild == 'yes') {
    const BUILD_PATH = path.join(__dirname, 'public', 'client', 'build');
    console.log(`BUILD_PATH is set :${BUILD_PATH}`);
    // logger.info(`BUILD_PATH is set :${BUILD_PATH}`);
    app.use(express.static(BUILD_PATH));
    app.get('*', (req, res) => res.sendFile(path.join(BUILD_PATH, 'index.html')));
}

// If we make it here, we have an error
app.use((req, res) => res.status(404).send({ ok: false, error: 'Not Found' }));


app.use('/', apiRouter);
app.use('/users', usersRouter);

module.exports = app;
