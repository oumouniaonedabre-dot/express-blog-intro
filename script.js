const express = require('express');
const app = express();
const port = 3000;

// Configurazione degli asset statici (cartella public)
app.use(express.static('public'));

// 1. Rotta principale /
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Array dei post del blog
const posts = [
  {
    titolo: 'Ciambellone soffice',
    contenuto: 'Ricetta per preparare un ciambellone soffice per la colazione.',
    immagine: '/images/ciambellone.jpeg',
    tags: ['dolci', 'colazione', 'ricette']
  },
  {
    titolo: 'Pane fatto in casa',
    contenuto: 'Come preparare il pane con lievito madre in pochi passi.',
    immagine: '/images/pane_fratto.jpeg',
    tags: ['pane', 'lievitati', 'cucina']
  },
  {
    titolo: 'Pasta al pesto',
    contenuto: 'Il segreto per un pesto alla genovese cremoso e profumato.',
    immagine: '/images/pasta_pesto.jpeg',
    tags: ['primi', 'pesto', 'italia']
  },
  {
    titolo: 'Torta salata agli spinaci',
    contenuto: 'Una torta salata veloce ideale per un aperitivo tra amici.',
    immagine: '/images/torta_salata.jpeg',
    tags: ['antipasti', 'verdure', 'veloce']
  },
  {
    titolo: 'Tiramisù classico',
    contenuto: 'La ricetta tradizionale del tiramisù al caffè con mascarpone.',
    immagine: '/images/tiramisu.jpeg',
    tags: ['dolci', 'caffè', 'desert']
  }
];

// 2. Rotta /bacheca che restituisce il JSON
app.get('/bacheca', (req, res) => {
  res.json({
    count: posts.length,
    posts: posts
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server del blog avviato su http://localhost:${port}`);
});