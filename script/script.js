console.log("teste réussi");

//////////////////////////////// Variables globales /////////////////////////////////
// Variables pour suivre les scores
let totalScore = 0;
let roundScore = 0;
//-----------------------------------------------------------------------------------------//

////////////////////////////// ANIMATION DU DES //////////////////////////////////

const rollButton = document.getElementById("rollDice"); // Bouton pour lancer le dé
const diceFace = document.querySelector(".rolling-element"); // Image du dé
const diceResult = document.getElementById("diceResult"); // Affiche le resultat du dés

// Fonction pour lancer le dé
function rollDice() {
	// Réinitialise l'image du dé a chaque lancement
	diceFace.src = "assets/game-die.256x256-removebg-preview.png";
	diceResult.textContent = "Le dé roule...";
	// Ajoute une animation temporaire
	diceFace.classList.add("rolling"); // Ajoute une classe pour déclencher l'animation
	// Supprime l'animation après 2 secondes (durée de l'animation définie en CSS)
	setTimeout(() => {
		diceFace.classList.remove("rolling");
		const result = Math.floor(Math.random() * 6) + 1; //variable qui calcul le resultat random
		// Mettre à jour le résultat visuel du dé

		diceFace.src = `assets/die-face-${result}.png`;
		// Afficher le résultat sous le dé
		diceResult.textContent = `Vous avez obtenu un ${result} ! `;

		//logique de resultat
		if (result === 1) {
			//si 1 score reset
			roundScore = 0;
			diceResult.textContent += "Oups raté t'est nul!!!!!";
		} else {
			roundScore += result;
			document.querySelector(
				".player.active .round-score"
			).textContent = ` Score du Tour : ${roundScore} `;
		}
	}, 2000); //2 secondes
	//algo if else a mettre ici pour le 1 et le scor du round
}
// Associe la fonction au clic sur le bouton
rollButton.addEventListener("click", rollDice);

//----------------------------------------------------------------------------------------//

////////////////////////// Fonction pour le changement de joueur /////////////////////

//-------------------------------------------------------------------------------//
