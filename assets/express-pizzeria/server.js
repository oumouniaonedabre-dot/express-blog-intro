import express from 'express';
import { menu } from './menu.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('server del mio blog');
});

app.get('/bacheca', (req, res) => {
  res.json(menu);
});

app.listen(port, () => {
  console.log(`example listening on port ${port}`);
});
