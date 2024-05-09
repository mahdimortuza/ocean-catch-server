import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import notFound from './app/middleware/notFound';
import router from './app/route';
const app = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/v1', router);

const response = 'Hello World!';
app.get('/', (req: Request, res: Response) => {
  res.send(response);
});

app.use(notFound);

export default app;
