// Utilisation de la méthode fetch pour charger le fichier JSON de manière asynchrone
fetch("mots.json")
  .then(response => response.json()) // Conversion de la réponse en objet JavaScript
  .then(data => {
    // data contient maintenant les données du fichier JSON
    console.log(data); // Affiche le contenu du fichier JSON dans la console

    // Vous pouvez accéder aux mots comme ceci
    var mots = data.mots;

    // Exemple : affichage du premier mot
    console.log("Premier mot : " + mots[0]);
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors du chargement du fichier JSON : ', error);
  });
