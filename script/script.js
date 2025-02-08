console.log("teste réussi");

let totalScore = 0;
let roundScore = 0;

/////////////////////// ANIMATION DU DES //////////////////////////////////

const rollButton = document.getElementById("rollDice"); // Bouton pour lancer le dé
const diceFace = document.querySelector(".rolling-element"); // Image du dé
const diceResult = document.getElementById("diceResult"); // Affiche le resultat du dés

function rollDice() {
	// Fonction pour lancer le dé

	// Réinitialise l'image du dé
	diceFace.src = "assets/game-die.256x256-removebg-preview.png";
	diceResult.textContent = "C'est parti mon KiKi...";
	// Ajoute une animation temporaire
	diceFace.classList.add("rolling"); // Ajoute une classe pour déclencher l'animation

	// Supprime l'animation après 2 secondes (durée de l'animation définie en CSS)
	setTimeout(() => {
		diceFace.classList.remove("rolling");
		const result = Math.floor(Math.random() * 6) + 1;

		// Mettre à jour le résultat visuel du dé

		diceFace.src = `assets/die-face-${result}.png`;

		// Afficher le résultat sous le dé
		diceResult.textContent = `Vous avez fait un ${result} !`;

		if (result === 1) {
			// Si le résultat est 1, le score du round est réinitialisé
			roundScore = 0;
			diceResult.textContent = " Oups!!! t'a fait un 1!!!!";
		} else {
			// Sinon, ajoute le résultat au score du round
			roundScore += result;
			document.querySelector(
				".player.active .round-score"
			).textContent = `Score du Tour : ${roundScore}`;
		}
	}, 2000); //2 secondes
}
// Associe la fonction au clic sur le bouton
rollButton.addEventListener("click", rollDice);

//////////////////////////// FIN DE L'ANIMATION /////////////////////////////

///////////////////// Fonction pour me changement de joueur ////////////////
