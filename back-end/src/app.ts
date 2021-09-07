require('dotenv').config();
import cors = require('cors');
import morgan = require('morgan');
import express from 'express';

import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import appRouters from './routes/app.routes';
import environment from './config/environment';

const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

const app = express();

app.set('env', environment.NODE_ENV);
app.set('port', environment.PORT);
app.set('host', environment.HOST_NAME);

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('common'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(environment.BASE_PATH, appRouters);

export default app;
