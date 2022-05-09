import React, { useState, useEffect } from 'react';
import uniquid from 'uniquid';

import CardPane from './CardPane.js';
import Scoreboard from './Scoreboard.js';

//import photos:
import cockatoo from './../images/BirdPhotos/cockatoo.jpg';
import sunbird from './../images/BirdPhotos/double_collard_sunbird.jpg';
import owl from './../images/BirdPhotos/great_horned_owl.jpg';
import birdOfParadise from './../images/BirdPhotos/lesser_bird_of_paradise.jpg';
import macaw from './../images/BirdPhotos/macaw.jpg';
import flicker from './../images/BirdPhotos/northern_flicker.jpg';
import swallow from './../images/BirdPhotos/swallow.jpg';
import egret from './../images/BirdPhotos/yellow_billed_egret.jpg';

//create image array:
const allImages = [
	cockatoo,
	sunbird,
	owl,
	birdOfParadise,
	macaw,
	flicker,
	swallow,
	egret,
];

const allCards = allImages.map((x, i) => {
	return {
		src: x,
		clicked: false,
		id: i,
	};
});

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

export default function App() {
	const [cards, setCards] = useState(allCards);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [cardCount, setCardCount] = useState(4);
	const [cardsInstance, setCardsInstance] = useState([]);

	useEffect(() => {
		setCardCount(score + 3);

		//set card array:
		setCardsInstance(shuffle(cards).slice(0, cardCount));
	}, [score, cardCount, cards]);

	function handleCardClick(e) {
		const key = parseInt(e.currentTarget.dataset.key);
		const clickedCard = cards.find((card) => {
			return card.id === key;
		});
		if (clickedCard.clicked) {
			resetGame();
		} else {
			clickedCard.clicked = true;
			increaseScore();
		}
	}

	function increaseScore() {
		setScore(score + 1);
	}

	function resetGame() {
		if (score > highScore) {
			setHighScore(score);
		}
		setScore(0);
		setCards(
			allCards.map((card) => {
				card.clicked = false;
				return card;
			})
		);
	}

	return (
		<div>
			<header>
				<Scoreboard score={score} highScore={highScore} />
			</header>
			<main>
				<CardPane cardClick={handleCardClick} cards={cardsInstance} />
			</main>
		</div>
	);
}
