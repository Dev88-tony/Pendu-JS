////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
const mots = [
      "ordinateur", "banane", "chocolat", "maison", "voiture", "football", "fraise", "girafe", "television", "hamburger", "chat",
      "chien", "ecole", "avion", "soleil", "lune", "mer", "montagne", "forêt", "fleur", "guitare", "piano", "theâtre", "fromage", 
      "ciseaux", "telephone", "livre", "peinture", "danse", "musee", "montre", "jupe", "cravate", "echarpe", "portable", "stylo", 
      "fenêtre", "porte", "table", "chaise", "lit", "bateau", "piscine", "velo", "train", "bus", "metro", "tramway", "marteau", "cle",
      "serrure", "fenêtre", "pain", "sandwich", "pomme", "orange", "poire", "pastèque", "cerise", "abricot", "pêche", "ananas", "kiwi",
      "fraise", "framboise", "noix", "amande", "noisette", "avocat", "courgette", "tomate", "poivron", "aubergine", "oignon", "ail", "poireau",
      "carotte", "chou", "salade", "radis" ];
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function motAleatoire() { 
  return mots = Math.floor(Math.random() * mots.length);
}
////////////////////////////////////////////////////////////////
// Selectionnez tous les elements avec la classe "alpha"
const alphabet = document.querySelectorAll(".alpha");
const ToucheFaite = document.getElementById("ToucheFaite");
const coups = document.getElementById("coups");
const lettreATrouver = document.getElementById("lettreATrouver");

let lettres = '';
let nbCoups = 6;

lettreATrouver.textContent = mots[8];

alphabet.forEach(alpha => {
  alpha.addEventListener('click', function() {
    if (lettres.length < nbCoups) {
      const lettre = alpha.textContent;
      lettres += lettre;
      ToucheFaite.textContent = `${lettres}`;
    } else {
      coups.textContent = 'Vous êtes Pendu ! ';
    }
  });
});



console.log(mots);
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////