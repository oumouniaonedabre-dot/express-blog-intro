let utente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30
};

// Incremento l'età di un anno
utente.eta++; // Oppure: utente.eta = utente.eta + 1;




let colori = ["rosso", "verde", "blu"];

for (let i = 0; i < colori.length; i++) {
  console.log(i + ": " + colori[i]);
}



function creaLibro(titolo, autore) {
  return {
    titolo: titolo,
    autore: autore
  };
}

let parole = ["mela", "computer", "sole", "programmazione", "web"];

for (let i = 0; i < parole.length; i++) {
  if (parole[i].length > 5) {
    console.log(parole[i]);
  }
}



let numeri = [10, -5, 4, 0, -2, 8];
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
  if (numeri[i] > 0) {
    somma += numeri[i];
  }
}
console.log("Somma positivi:", somma);

const studente = {
  nome: "Sara",
  cognome: "Rossi",
  voti: [24, 28, 18, 30, 26, 22]
};



let sommaVoti = 0;
for (let i = 0; i < studente.voti.length; i++) {
  sommaVoti += studente.voti[i];
}

studente.media = sommaVoti / studente.voti.length;
console.log(studente);



// Assumiamo che l'esercizio precedente sia già stato eseguito e studente.media sia presente
let votoPiuVicino = studente.voti[0];
let minDifferenza = Math.abs(studente.voti[0] - studente.media);

for (let i = 1; i < studente.voti.length; i++) {
  let differenzaCorrente = Math.abs(studente.voti[i] - studente.media);
  if (differenzaCorrente < minDifferenza) {
    minDifferenza =Format differenzaCorrente;
    votoPiuVicino = studente.voti[i];
  }
}

console.log("Il voto più vicino alla media (" + studente.media + ") è: " + votoPiuVicino);




const prodottiNegozio = [
  { nome: "Tastiera Meccanica", prezzo: 85 },
  { nome: "Mouse Wireless", prezzo: 45 },
  { nome: "Tappetino Mouse XL", prezzo: 15 },
  { nome: "Cuffie Gaming", prezzo: 120 },
  { nome: "Cavo HDMI 2m", prezzo: 8 }
];

function trovaProdottoEconomico(prodotti) {
  if (prodotti.length === 0) return null;
  
  let prodottoMinore = prodotti[0];
  
  for (let i = 1; i < prodotti.length; i++) {
    if (prodotti[i].prezzo < prodottoMinore.prezzo) {
      prodottoMinore = prodotti[i];
    }
  }
  
  return prodottoMinore.nome;
}

console.log(trovaProdottoEconomico(prodottiNegozio)); // Output: Cavo HDMI 2m




let stringheOriginarie = ["ciao", "mondo", "javascript"];
let stringheInvertite = [];

for (let i = 0; i < stringheOriginarie.length; i++) {
  let parolaCorrente = stringheOriginarie[i];
  let parolaInvertita = "";
  
  // Ciclo la parola al contrario
  for (let j = parolaCorrente.length - 1; j >= 0; j--) {
    parolaInvertita += parolaCorrente[j];
  }
  
  stringheInvertite.push(parolaInvertita);
}

console.log(stringheInvertite); // [ 'oaic', 'odnom', 'tpircasavaj' ]





function isOrdinatoCrescente(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Appena trova un elemento maggiore del successivo, si ferma
    }
  }
  return true;
}

console.log(isOrdinatoCrescente([1, 3, 5, 8])); // true
console.log(isOrdinatoCrescente([1, 6, 4, 9])); // false





const utentiIscritti = [
  { id: 1, nome: "Alice", attivo: true },
  { id: 2, nome: "Giorgio", attivo: false },
  { id: 3, nome: "Marco", attivo: true },
  { id: 4, nome: "Elena", attivo: false }
];

const utentiInattivi = [];

// Scorriamo l'array al contrario per evitare che l'eliminazione con splice alteri gli indici degli elementi successivi durante il loop
for (let i = utentiIscritti.length - 1; i >= 0; i--) {
  if (!utentiIscritti[i].attivo) {
    // Rimuoviamo l'elemento dall'originale e lo inseriamo nel nuovo array
    let rimosso = utentiIscritti.splice(i, 1);
    utentiInattivi.push(rimosso[0]);
  }
}

console.log("Iscritti rimasti attivi:", utentiIscritti);
console.log("Inattivi spostati:", utentiInattivi);





const catalogoLibri = [
  { id: 101, titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", quantita: 3 },
  { id: 102, titolo: "1984", autore: "George Orwell", quantita: 0 }
];

function compraProdotto(id, inventario) {
  let trovato = false;
  
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].id === id) {
      trovato = true;
      if (inventario[i].quantita > 0) {
        inventario[i].quantita--;
        console.log(`Acquisto riuscito! Nuova quantità per "${inventario[i].titolo}": ${inventario[i].quantita}`);
      } else {
        console.error(`Errore: Il libro "${inventario[i].titolo}" è esaurito.`);
      }
      break;
    }
  }
  
  if (!trovato) console.log("Libro non trovato nel catalogo.");
}

compraProdotto(101, catalogoLibri); // Successo
compraProdotto(102, catalogoLibri); // Errore esaurito





function intersezioneArray(arr1, arr2) {
  let risultato = [];
  
  for (let i = 0; i < arr1.length; i++) {
    let elemento = arr1[i];
    // Se l'elemento è presente nel secondo array ed non l'abbiamo ancora inserito nel risultato (per evitare duplicati)
    if (arr2.includes(elemento) && !risultato.includes(elemento)) {
      risultato.push(elemento);
    }
  }
  
  return risultato;
}

console.log(intersezioneArray([1, 2, 2, 3, 4], [2, 4, 6])); // [2, 4]







let testo = "il codice javascript è bello ma il codice va scritto bene";

function parolaPiuFrequente(testoStringa) {
  let parole = testoStringa.toLowerCase().split(" ");
  let mappaFrequenze = {};
  
  // Popoliamo l'oggetto contatore
  for (let i = 0; i < parole.length; i++) {
    let parola = parole[i];
    if (mappaFrequenze[parola] === undefined) {
      mappaFrequenze[parola] = 1;
    } else {
      mappaFrequenze[parola]++;
    }
  }
  
  // Troviamo la chiave con il valore numerico più alto
  let maxParola = "";
  let maxConteggio = 0;
  
  for (let chiave in mappaFrequenze) {
    if (mappaFrequenze[chiave] > maxConteggio) {
      maxConteggio = mappaFrequenze[chiave];
      maxParola = chiave;
    }
  }
  
  return `La parola più frequente è "${maxParola}" (apparsa ${maxConteggio} volte)`;
}

console.log(parolaPiuFrequente(testo));





if (sceltaUtente === sceltaComputer) return "pareggio";
if ((sceltaUtente === "sasso" && sceltaComputer === "forbice") ||
    (sceltaUtente === "carta" && sceltaComputer === "sasso") ||
    (sceltaUtente === "forbice" && sceltaComputer === "carta")) {
    return "utente";
}
return "computer";




let board = ["", "", "", "", "", "", "", "", ""];
let turnoCorrente = "X"; // Può essere "X" o "O"




const combinazioniVittoria = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Orizzontali
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticali
  [0, 4, 8], [2, 4, 6]             // Diagonali
];





function controllaVincitore() {
  for (let i = 0; i < combinazioniVittoria.length; i++) {
    const [a, b, c] = combinazioniVittoria[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Restituisce il vincitore ("X" o "O")
    }
  }

  if (!board.includes("")) return "pareggio"; // Nessuno spazio vuoto rimasto
  return null; // Il gioco continua
}






