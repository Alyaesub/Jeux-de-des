console.log("teste réussi");

/////////////////////// ANIMATION DU DES //////////////////////////////////

const rollButton = document.getElementById("rollDice"); // Bouton pour lancer le dé
const diceFace = document.querySelector(".rolling-element"); // Image du dé
const diceResult = document.getElementById("diceResult"); // Affiche le resultat du dés

function rollDice() {
	// Fonction pour lancer le dé

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
		diceResult.textContent = `Vous avez obtenu un ${result} !`;
	}, 2000); //2 secondes
}
// Associe la fonction au clic sur le bouton
rollButton.addEventListener("click", rollDice);

//////////////////////////// FIN DE L'ANIMATION /////////////////////////////
