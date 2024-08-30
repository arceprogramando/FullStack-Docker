import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }),
);

app.get('/', function (_req, res) {
  res.send('hello world');
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
