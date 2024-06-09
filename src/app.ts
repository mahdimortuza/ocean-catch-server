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
// app.use(cors({ origin: 'https://ocean-catch-client.vercel.app' }));

// default route to check the api
app.use('/api/v1', router);

const response = 'Hello World!';
app.get('/', (req: Request, res: Response) => {
  res.send(response);
});

// not found route added
app.use(notFound);

export default app;
