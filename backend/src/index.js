import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }),
);

app.get('/', function (_req, res) {
  res.send('hello world');
});

app.get('/random-boolean', (_req, res) => {
  const randomBoolean = Math.random() > 0.5;
  res.json({ value: randomBoolean });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
