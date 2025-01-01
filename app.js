import express from 'express'
import morgan from 'morgan'
import appRouter from './routes/app.routes.js';
import cookieParser from 'cookie-parser';
import AppError from './utils/appError.js';
const app = express();

// continuous logging
app.use(morgan('dev'))

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Error handling
app.use((err, req, res, next) => {
    if (err instanceof AppError) {
        // Send the custom error with the status code and message
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    // For other types of errors, send a generic server error
    return res.status(500).json({
        status: 'error',
        message: 'Something went wrong!',
    });
});

// routes
app.use('/api/v1', appRouter);

export default app