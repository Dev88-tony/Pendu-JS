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
const lettreATrouver = document.getElementById("lettreATrouver");
const btn = document.getElementById("btn");
const image = document.getElementById("Image").src;
const rejouer = document.getElementById("btn");
let motAlea = motAleatoire(mots);

let lettres = "";
let nbCoups = 6;

btn.addEventListener('click', function() {
  reJouer();
});

alphabet.forEach(alpha => {
  alpha.addEventListener('click', function() {
    if (lettres.length < nbCoups) {
      const [...lettre] = alpha.textContent;
      lettres += lettre;
      lettreATrouver.textContent = afficherTirets();
      coups = afficherCoups();
    } else {
      coups.textContent = `Vous êtes Pendu ! Le mot était ${motAlea}`;
    }
  });
});

function afficherCoups() {
  let coupsRestants = nbCoups - lettres.length;
  if (coupsRestants >= 0) {
    document.getElementById('Image').src = images[6 - coupsRestants - 1];
    return coupsRestants + 1;
  } else {
    document.getElementById('Image').src = images[0];
    return '';
  }
}

function afficherTirets() {
  let tirets = "";
  for (let i = 0; i < motAlea.length; i++) {
    tirets += "_ ";
  }
  return tirets;
}

function motAleatoire(mots) { 
  const indexAleatoire = Math.floor(Math.random() * mots.length);
  return mots[indexAleatoire];
}
console.log(motAlea);

function reJouer() {
  lettres = "";
  motAlea = motAleatoire(mots);
  coups.textContent = "";
  lettreATrouver.textContent = afficherTirets();
  document.getElementById('Image').src = image;

  alphabet.forEach(alpha => {
    alpha.disabled = false;
  });
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
