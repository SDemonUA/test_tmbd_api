require('dotenv/config');

import './controllers/moviedbController';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as methodOverride from 'method-override';
import { RegisterRoutes } from './routes';

import * as assert from 'assert';

assert(process.env.TMDB_API, 'TMDB_API environment variable not set');
console.log('Using ' + process.env.TMDB_API + ' as TMDB_API key');

const app = express();

app.use('/docs', express.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

RegisterRoutes(app);

app.get('*.*', express.static(__dirname + '/public'), (req, res) => {
    res.status(404).send('File not found');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

/* tslint:disable-next-line */
console.log('Starting server on port 3000...');
app.listen(3000, () => console.log('Server started!'));
