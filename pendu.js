////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
const mots = [
      "ordinateur", "banane", "chocolat", "maison", "voiture", "football", "fraise", "girafe", "television", "hamburger", "chat",
      "chien", "ecole", "avion", "soleil", "lune", "mer", "montagne", "foret", "fleur", "guitare", "piano", "theatre", "fromage", 
      "ciseaux", "telephone", "livre", "peinture", "danse", "musee", "montre", "jupe", "cravate", "echarpe", "portable", "stylo", 
      "fenetre", "porte", "table", "chaise", "lit", "bateau", "piscine", "velo", "train", "bus", "metro", "tramway", "marteau", "cle",
      "serrure", "fenetre", "pain", "sandwich", "pomme", "orange", "poire", "pasteque", "cerise", "abricot", "peche", "ananas", "kiwi",
      "fraise", "framboise", "noix", "amande", "noisette", "avocat", "courgette", "tomate", "poivron", "aubergine", "oignon", "ail", "poireau",
      "carotte", "chou", "salade", "radis" ];
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
const images = [ 
  './Images/1.webp', 
  './Images/2.webp', 
  './Images/3.webp', 
  './Images/4.webp', 
  './Images/5.webp', 
  './Images/6.webp' ];
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const alphabet = document.querySelectorAll(".alpha");
const coups = document.getElementById("coups");
const btn = document.getElementById("btn");
const image = document.getElementById("Image").src;
const rejouer = document.getElementById("btn");
const motATrouver = document.getElementById("motATrouver");
let motAlea = motAleatoire(mots);
let lettresATrouver = motAlea.split("");
console.log(lettresATrouver);

let lettres = "";
let nbCoups = 6;

btn.addEventListener("click", function () {
  reJouer();
});

let lettreChoisie = "";

alphabet.forEach((letter) => {
  letter.addEventListener("click", () => {
    lettreChoisie = letter.textContent;
    letter.classList.add('dnone')
    let found = false;
    lettresATrouver.forEach((lettre, index) => {
      if (lettre.toUpperCase() === lettreChoisie) {
        letters[index].textContent = lettreChoisie;
        found = true;
      }
    });
    if (!found) {
      console.log("Lettre pas dans le mot");
      lettres += lettreChoisie;
      afficherCoups();
    }
  });
});

function afficherCoups() {
  let coupsRestants = nbCoups - lettres.length;
  if (coupsRestants >= 0) {
    document.getElementById("Image").src = images[6 - coupsRestants - 1];
    return coupsRestants + 1;
  } else {
    document.getElementById("Image").src = images[0];
    return "";
  }
}

function afficherTirets() {
  lettresATrouver.forEach((letter) => {
    let pElement = document.createElement("p");
    pElement.className = "lettreATrouver";
    pElement.textContent = "_";
    motATrouver.appendChild(pElement);
  });
}

function motAleatoire(mots) {
  const indexAleatoire = Math.floor(Math.random() * mots.length);
  return mots[indexAleatoire];
}

function reJouer() {
  lettres = "";
  motAlea = motAleatoire(mots);
  coups.textContent = "";
  document.getElementById("Image").src = image;

  alphabet.forEach((letter) => {
    letter.disabled = false;
    letter.classList.remove('dnone');
  });
  
  afficherTirets();
}

afficherTirets();
const letters = document.querySelectorAll(".lettreATrouver");
console.log(letters);
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
