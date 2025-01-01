import express from 'express'
import morgan from 'morgan'
import appRouter from './routes/app.routes.js';
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// continuous logging
app.use(morgan('dev'))

// routes
app.use('/api/v1', appRouter);

export default app