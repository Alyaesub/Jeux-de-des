console.log ("teste réussi")
//ANIMATION DU DES/////////////////////////////////////////////////////////

const rollButton = document.getElementById('rollDice'); // Bouton pour lancer le dé
const diceFace = document.querySelector('.rolling-element'); // Image du dé


function rollDice() { // Fonction pour lancer le dé
    // Ajoute une animation temporaire
    diceFace.classList.add('rolling'); // Ajoute une classe pour déclencher l'animation

    // Supprime l'animation après 2 secondes (durée de l'animation définie en CSS)
    setTimeout(() => {
        diceFace.classList.remove('rolling');
    }, 2000);
}

// Associe la fonction au clic sur le bouton
rollButton.addEventListener('click', rollDice);

//////////////////////////////////////////////////////////////////////////////////////////
