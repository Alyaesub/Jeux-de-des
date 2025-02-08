console.log("teste réussi");

// Sélection des éléments du DOM
const rollButton = document.getElementById("rollDice"); // Bouton pour lancer le dé
const holdButton = document.getElementById("hold-score");
const diceFace = document.querySelector(".rolling-element"); // Image du dé
const diceResult = document.getElementById("diceResult"); // Affiche le resultat du dés

// Sélection des éléments des joueurs
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const globalScore1 = document.querySelector(".player-1 .global-score span");
const globalScore2 = document.querySelector(".player-2 .global-score span");
const roundScore1 = document.querySelector(".player-1 .round-score span");
const roundScore2 = document.querySelector(".player-2 .round-score span");

// Variables pour suivre les scores et le joueur actif
let scores = [0, 0]; // scores globaux des joueurs
let roundScore = 0;
let activePlayer = 0; // 0 pour Joueur 1, 1 pour Joueur 2

function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function rollDice() {
	// Fonction pour lancer le dé
	// Réinitialise l'image du dé
	diceFace.src = "assets/game-die.256x256-removebg-preview.png";
	diceResult.textContent = "C'est parti mon KiKi...";
	// Ajoute une animation temporaire
	diceFace.classList.add("rolling"); // Ajoute une classe pour déclencher l'animation

	// Supprime l'animation après 2 secondes (durée de l'animation définie en CSS)
	setTimeout(async () => {
		diceFace.classList.remove("rolling");
		const result = Math.floor(Math.random() * 6) + 1;

		// Mettre à jour le résultat visuel du dé
		diceFace.src = `assets/die-face-${result}.png`;

		// Afficher le résultat sous le dé
		diceResult.textContent = `Vous avez fait un ${result} !`;

		if (result === 1) {
			// Si le résultat est 1, le score du round est réinitialisé
			roundScore = 0;
			updateRoundScore(activePlayer, roundScore);
			diceResult.textContent = " Oups!!! t'a fait un 1!!!!";
			//delai avant de switch
			await wait(2000);
			switchPlayer();
			if (scores[activePlayer] >= 100) {
				diceResult.textContent = ` !!🎉!!Le Gagnant est le Joueur ${
					activePlayer + 1
				} !!🎉!!`;
				resetGame(); // Réinitialise le jeu
			}
		} else {
			// Sinon, ajoute le résultat au score du round
			roundScore += result;
			updateRoundScore(activePlayer, roundScore);
		}
	}, 2000); //2 secondes
}

function holdScore() {
	// Ajoute le score du round au score global du joueur actif
	scores[activePlayer] += roundScore;
	updateGlobalScore(activePlayer, scores[activePlayer]);

	//verifie si le joueur gagne
	if (scores[activePlayer] >= 100) {
		diceResult.textContent = `!!🎉!! Le Gagnant est le Joueur ${
			activePlayer + 1
		} !!🎉!!`;
		resetGame(); // Réinitialise le jeu
	} else {
		//reset les score et switch de joueur
		roundScore = 0;
		updateRoundScore(activePlayer, roundScore);
		switchPlayer();
	}
}

function switchPlayer() {
	document
		.querySelector(`.player-${activePlayer + 1}`)
		.classList.remove("active");
	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}
	document
		.querySelector(`.player-${activePlayer + 1}`)
		.classList.add("active");
	diceResult.textContent = `C'est au tour du Joueur ${activePlayer + 1} !!`;
}

// Fonction pour mettre à jour le score du round
function updateRoundScore(player, score) {
	if (player === 0) {
		roundScore1.textContent = score;
	} else {
		roundScore2.textContent = score;
	}
}

function updateGlobalScore(player, score) {
	if (player === 0) {
		globalScore1.textContent = score;
	} else {
		globalScore2.textContent = score;
	}
}

function resetGame() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
}

/////// EVENEMENT associe la fonction au clic sur le bouton
rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdScore);
