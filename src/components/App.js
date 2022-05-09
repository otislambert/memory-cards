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
	const [cards] = useState(
		allImages.map((x) => {
			return {
				src: x,
				clicked: false,
				id: uniquid(),
			};
		})
	);
	const [score, setScore] = useState(0);
	const [cardCount, setCardCount] = useState(4);
	const [cardsInstance, setCardsInstance] = useState([]);

	useEffect(() => {
		setCardCount(score + 3);

		//set card array:
		setCardsInstance(shuffle(cards).slice(0, cardCount));
	}, [score, cardCount, cards]);

	function increaseScore() {
		setScore(score + 1);
	}

	return (
		<div>
			<header>
				<Scoreboard score={score} />
			</header>
			<main>
				<CardPane increaseScore={increaseScore} cards={cardsInstance} />
			</main>
		</div>
	);
}
