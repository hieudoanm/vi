import cookieParser from 'cookie-parser';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import errorHandler from './handlers/error';
import notFoundHandler from './handlers/not-found';
import { RegisterRoutes } from './routes';
import swaggerJson from './swagger.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

RegisterRoutes(app);

app.use(
  ['/docs', '/openapi', '/swagger'],
  swaggerUI.serve,
  swaggerUI.setup(swaggerJson)
);

// catch 404 and forward to error handler
app.use(notFoundHandler);
// error handler
app.use(errorHandler);

export default app;
