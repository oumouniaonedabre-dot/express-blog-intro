# Palestra di Web Development: Array, Oggetti e DOM

Gli esercizi sono suddivisi per tre livelli di difficoltà crescente:
- **Pillole:** Esercizi facili, focalizzati sulla sintassi e sui concetti atomici.
- **Panini:** Esercizi medi, che richiedono l'unione di logica algoritmica e strutture dati.
- **Pizze in Faccia:** Esercizi difficili, pensati per stimolare il problem-solving e l'integrazione completa dei costrutti.

---

## Sezione 1: Domande Teoriche (Definizioni)

### Livello: Pillole (Facili)

#### 1. Il ruolo del DOM

Che cos'è il DOM e in che modo JavaScript interagisce con esso?

#### 2. Il ciclo for

Che cos'è il for-loop classico e a cosa serve principalmente?

#### 3. Parametri vs Argomenti

Qual è la differenza fondamentale tra un parametro e un argomento in una funzione?

#### 4. Accesso alle proprietà degli oggetti

Come si accede a una proprietà di un oggetto usando la notazione con le parentesi quadre (`obj["chiave"]`) e quando è obbligatorio usarla rispetto alla notazione col punto (`obj.chiave`)?

#### 5. Array vuoti e limiti

Se dichiari un array vuoto `let arr = []`, qual è il valore di `arr.length`? E cosa succede se provi a leggere `arr[0]`?

### Livello: Panini (Medie)

#### 6. Array vs Oggetti

Qual è la differenza concettuale tra un array e un oggetto? In quali scenari reali preferisci l'uno o l'altro?

#### 7. Modifica del testo nel DOM

Spiega la differenza tra l'utilizzo di `innerHTML` e `innerText` quando si modifica il contenuto di un elemento del DOM.

#### 8. Gestione degli eventi

Che cosa si intende per "evento" nel DOM e come funziona il metodo `addEventListener`?

#### 9. Proprietà inesistenti e undefined

Descrivi cosa accade se tenti di accedere a una proprietà inesistente di un oggetto (es. `utente.eta` se `eta` non c'è). Cosa succede invece se tenti di accedere a una proprietà di `undefined` (es. `utente.indirizzo.via` se `indirizzo` è inesistente)?

### Livello: Pizze in Faccia (Difficili)

#### 10. Performance e DOM

Perché la manipolazione continua e ripetuta del DOM (es. inserire 100 elementi uno alla volta in un ciclo) può rallentare la pagina? Quale potrebbe essere un approccio più efficiente usando le stringhe o contenitori temporanei?

#### 11. Mutabilità con const

Se un oggetto viene dichiarato con `const` (es. `const configurazione = { tema: "dark" }`), è possibile modificare il valore di `configurazione.tema`? Perché?

#### 12. Codice asincrono e callback

Spiega l'ordine di esecuzione: se aggiungi un `addEventListener` per il click su un pulsante, il codice dentro la funzione di callback viene eseguito immediatamente quando la pagina si carica o in un altro momento?

#### 13. Riferimenti condivisi negli array

Immagina di avere un array di oggetti. Se assegni questo array a una nuova variabile (`let copia = mioArray`), cosa succede se modifichi una proprietà di un oggetto dentro `copia`? Si modifica anche nel primo array? Spiega il motivo.

---

## Sezione 2: Esercizi di Logica e Strutture Dati (JS Puro)

### Livello: Pillole (Facili)

#### 1. Modifica Oggetto

Crea un oggetto `utente` con proprietà `nome`, `cognome` e `eta`. Scrivi un'istruzione per incrementare l'età di un anno.

#### 2. Ciclo Array Classico

Dato l'array `let colori = ["rosso", "verde", "blu"]`, scrivi un ciclo `for` classico che stampi in console ogni colore preceduto dal suo indice (es. "0: rosso").

#### 3. Funzione Factory

Scrivi una funzione `creaLibro(titolo, autore)` che restituisce un oggetto con quelle due proprietà.

#### 4. Filtro Lunghezza Stringhe

Scrivi un programma che prende un array di stringhe e stampa solo le stringhe che hanno una lunghezza maggiore di 5 caratteri.

#### 5. Somma Selettiva

Dato un array di numeri, scrivi un ciclo `for` per sommare solo i numeri positivi.

### Livello: Panini (Medie)

#### 6. Calcolo della Media

Utilizza l'oggetto `studente` fornito qui sotto. Scrivi un ciclo `for` per calcolare la media dei suoi `voti` e aggiungila come nuova proprietà (`media`) all'oggetto stesso.

```js
const studente = {
  nome: "Sara",
  cognome: "Rossi",
  voti: [24, 28, 18, 30, 26, 22]
};
```

#### 7. Valore più vicino alla Media

Riprendi l'oggetto `studente` dell'esercizio precedente. Dopo aver calcolato la media, scrivi un ciclo per trovare quale voto all'interno dell'array `voti` è numericamente più vicino al valore della `media` calcolata.

```js
const studente = {
  nome: "Sara",
  cognome: "Rossi",
  voti: [24, 28, 18, 30, 26, 22]
};
```

#### 8. Ricerca Minimo in Array di Oggetti

Scrivi una funzione che accetta l'array `prodottiNegozio` e restituisce il nome del prodotto che costa meno.

```js
const prodottiNegozio = [
  { nome: "Tastiera Meccanica", prezzo: 85 },
  { nome: "Mouse Wireless", prezzo: 45 },
  { nome: "Tappetino Mouse XL", prezzo: 15 },
  { nome: "Cuffie Gaming", prezzo: 120 },
  { nome: "Cavo HDMI 2m", prezzo: 8 }
];
```

#### 9. Invertire le Stringhe

Dato un array di stringhe, crea un nuovo array vuoto e popolalo con le stesse stringhe, ma invertite (es. da "ciao" a "oaic"), usando un ciclo `for` classico.

### Livello: Pizze in Faccia (Difficili)

#### 10. Controllo Ordinamento

Scrivi una funzione che accetta un array di numeri e verifica se l'array è ordinato in modo crescente. Deve restituire `true` o `false`.

#### 11. Separazione e Rimozione di Elementi

Utilizza l'array `utentiIscritti`. Scrivi un blocco di codice che sposti tutti gli utenti con `attivo: false` in un nuovo array separato, rimuovendoli contemporaneamente dall'array originale.

```js
const utentiIscritti = [
  { id: 1, nome: "Alice", attivo: true },
  { id: 2, nome: "Giorgio", attivo: false },
  { id: 3, nome: "Marco", attivo: true },
  { id: 4, nome: "Elena", attivo: false }
];
```

#### 12. Gestione Quantità Inventario

Utilizza l'array `catalogoLibri`. Scrivi una funzione `compraProdotto(id, inventario)` che riduce di 1 la `quantita` del libro con l'id corrispondente. Se la quantità iniziale è già 0, stampa un messaggio di errore in console.

```js
const catalogoLibri = [
  { id: 101, titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", quantita: 3 },
  { id: 102, titolo: "1984", autore: "George Orwell", quantita: 0 },
  { id: 103, titolo: "Il nome della rosa", autore: "Umberto Eco", quantita: 5 },
  { id: 104, titolo: "Dune", autore: "Frank Herbert", quantita: 2 },
  { id: 105, titolo: "Il Piccolo Principe", autore: "Antoine de Saint-Exupéry", quantita: 0 }
];
```

#### 13. Intersezione di Array

Scrivi una funzione che prende due array di numeri e restituisce un nuovo array che contiene solo i numeri presenti in entrambi gli array (intersezione), senza duplicati.

#### 14. Contatore di Parole (Mappa)

Dato un testo in formato stringa lunga, scrivi un codice che trovi la parola più frequente nel testo usando un oggetto come mappa per tenere il conto delle occorrenze delle singole parole.

---

## Sezione 3: Sfide Pratiche e Progettazione (HTML + DOM)

### Livello: Pillole (Facili)

#### 1. Sfida (Mostra/Nascondi)

Crea un pulsante "Mostra/Nascondi" e un paragrafo di testo. Al click sul pulsante, il paragrafo deve apparire o scomparire alternativamente (agendo sugli stili inline o scambiando una classe CSS).

#### 2. Sfida (Cambio Colore)

Crea una pagina con un quadrato colorato (un `<div>` strutturato via CSS) e tre pulsanti: "Rosso", "Verde", "Blu". Al click su ogni pulsante, il quadrato deve cambiare il proprio colore di sfondo di conseguenza.

#### 3. Sfida (Input Specchio)

Inserisci un input di testo e un tag `<p>`. Fai in modo che mentre l'utente digita nell'input, il testo del paragrafo si aggiorni istantaneamente mostrando quanto inserito (usa l'evento `input`).

#### 4. Sfida (Lista Semplice)

Crea un pulsante "Aggiungi Elemento" e una lista `<ul>`. Ogni volta che si clicca sul pulsante, deve essere aggiunto un nuovo `<li>` con scritto "Elemento X" (dove X è un contatore numerico che aumenta a ogni click).

### Livello: Panini (Medie)

#### 5. Sfida (Lista dinamica da Input)

Crea un input di testo e un bottone. Al click sul bottone, il testo inserito nell'input deve essere aggiunto come elemento `<li>` in una `<ul>`. L'input deve svuotarsi dopo l'aggiunta. Se l'input è vuoto, il click non deve aggiungere nulla.

#### 6. Sfida (Form Iscrizione)

Implementa un form HTML con i campi "Nome", "Email" e un pulsante di invio. Al click, i dati inseriti devono essere salvati in un oggetto `utente` e quest'ultimo deve essere inserito in un array globale `listaIscritti`. Mostra il numero totale di iscritti aggiornato in un elemento di testo nella pagina.

#### 7. Sfida (Visualizzazione Catalogo)

Utilizza l'array `catalogoLibri`. Scrivi la logica per generare dinamicamente degli elementi HTML (es. dei `<div>` o una tabella) che mostrino questo catalogo a schermo all'avvio della pagina.

```js
const catalogoLibri = [
  { id: 101, titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", quantita: 3 },
  { id: 102, titolo: "1984", autore: "George Orwell", quantita: 0 },
  { id: 103, titolo: "Il nome della rosa", autore: "Umberto Eco", quantita: 5 },
  { id: 104, titolo: "Dune", autore: "Frank Herbert", quantita: 2 },
  { id: 105, titolo: "Il Piccolo Principe", autore: "Antoine de Saint-Exupéry", quantita: 0 }
];
```

#### 8. Sfida (Filtro base)

Partendo dal catalogo di libri dell'esercizio precedente, aggiungi un input di ricerca testuale. Al digitare dell'utente, la pagina deve mostrare solo i libri il cui titolo contiene i caratteri digitati (svuota il contenitore nel DOM e ricrea gli elementi filtrati a ogni evento).

```js
const catalogoLibri = [
  { id: 101, titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", quantita: 3 },
  { id: 102, titolo: "1984", autore: "George Orwell", quantita: 0 },
  { id: 103, titolo: "Il nome della rosa", autore: "Umberto Eco", quantita: 5 },
  { id: 104, titolo: "Dune", autore: "Frank Herbert", quantita: 2 },
  { id: 105, titolo: "Il Piccolo Principe", autore: "Antoine de Saint-Exupéry", quantita: 0 }
];
```

#### 9. Progettazione (Carta Forbice Sasso)

Se dovessi implementare un gioco "carta forbice sasso" contro il computer, quali sarebbero le principali funzioni che creeresti e come struttureresti i dati per confrontare in modo pulito le mosse dei due giocatori?

### Livello: Pizze in Faccia (Difficili)

#### 10. Sfida (Master/Detail con Preview)

Crea un'interfaccia divisa in due colonne. A sinistra mostra la lista dei soli nomi dei prodotti presi dall'array `listaProdottiDettaglio`. A destra posiziona un pannello dei dettagli inizialmente vuoto o contenente la scritta "Seleziona un prodotto". Al click su un nome nella lista di sinistra, il pannello di destra deve popolarsi con il prezzo e la descrizione del prodotto specifico selezionato.

```js
const listaProdottiDettaglio = [
  { 
    id: "p1", 
    nome: "Monitor 27 pollici", 
    prezzo: 249, 
    descrizione: "Monitor IPS 4K con frequenza di aggiornamento a 144Hz, ideale per gaming e produttività." 
  },
  { 
    id: "p2", 
    nome: "Sedia Ergonomica", 
    prezzo: 189, 
    descrizione: "Sedia con supporto lombare regolabile, braccioli 3D e tessuto traspirante per lunghe sessioni." 
  },
  { 
    id: "p3", 
    nome: "Microfono USB", 
    prezzo: 79, 
    descrizione: "Microfono a condensatore con pattern cardioide, perfetto per podcast, streaming e call di lavoro." 
  },
  { 
    id: "p4", 
    nome: "Lampada da Scrivania LED", 
    prezzo: 34, 
    descrizione: "Lampada smart con regolazione della temperatura colore, intensità dimmerabile e porta di ricarica USB." 
  }
];
```

#### 11. Sfida (Rimuovi dalla lista)

Riprendi l'esercizio della lista dinamica da input (esercizio 6). Fai in modo che ogni nuovo `<li>` generato contenga al suo interno anche un piccolo pulsante con una "X". Al click su quel pulsante specifico, solo quel determinato elemento della lista deve essere rimosso dal DOM.

#### 12. Sfida (Validazione Form)

Crea un form di registrazione con i campi "Password" e "Conferma Password". Al momento dell'invio (`submit`), verifica con JavaScript se le due password corrispondono e se sono lunghe almeno 8 caratteri. Se non sono valide, mostra un messaggio di errore in rosso sotto il form e blocca l'invio; se sono valide, mostra un messaggio di successo in verde.

#### 13. Sfida (Quiz a crocette)

Utilizza l'array `domandeQuiz`. Genera via DOM la prima domanda con i suoi pulsanti per le opzioni. Al click su un'opzione, mostra all'utente se la risposta è corretta o meno, aggiorna il punteggio e passa alla domanda successiva, mostrando il bilancio finale al termine del quiz.

```js
const domandeQuiz = [
  {
    id: 1,
    domanda: "Quale tag HTML viene usato per inserire un file JavaScript esterno?",
    opzioni: ["<link>", "<script>", "<js>", "<javascript>"],
    indiceCorretto: 1
  },
  {
    id: 2,
    domanda: "Qual è il valore predefinito della proprietà position in CSS?",
    opzioni: ["absolute", "relative", "static", "fixed"],
    indiceCorretto: 2
  },
  {
    id: 3,
    domanda: "Quale di questi metodi NON è un metodo nativo degli array in JS?",
    opzioni: ["push()", "pop()", "join()", "listen()"],
    indiceCorretto: 3
  }
];
```

#### 14. Progettazione (Griglia di Gioco)

Pensa a un gioco come il "Tris" (Tic-Tac-Toe). Come rappresenteresti la griglia di gioco 3x3 in JavaScript usando array e oggetti? Quali controlli algoritmici dovresti fare a ogni mossa per verificare se un giocatore ha fatto tris?
