import express from 'express';
import { menu } from './menu.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/client');
});

app.get('/menu', (req, res) => {
  res.json(menu);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
