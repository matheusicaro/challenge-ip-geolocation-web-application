require('dotenv').config();
import cors = require('cors');
import morgan = require('morgan');
import express from 'express';

import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import appRouters from './routes/app.routes';
import env from './config/environment';

const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Content-Type'],
  methods: ['GET', 'POST']
};

const app = express();

swaggerDocs.host = env.NODE_ENV === 'production' ? `${env.HOST_NAME}` : `${env.HOST_NAME}:${env.PORT}`;

app.set('env', env.NODE_ENV);
app.set('port', env.PORT);
app.set('host', env.HOST_NAME);

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('common'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(env.BASE_PATH, appRouters);

export default app;
