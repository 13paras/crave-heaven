import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Router
import { router as userRouter } from './routes/user.routers';
import { globalErrorHandler } from './middleware/errorHandler.middleware';

app.use('/api/v1/user', userRouter);

// Error Handlers
app.use(globalErrorHandler);

export { app };
