import express, { Request, Response } from 'express';

const app = express();

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

export default app;
