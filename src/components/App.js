import React, { useState, useEffect } from 'react';
import CardPane from './CardPane.js';
import Scoreboard from './Scoreboard.js';

export default function App() {
	const [score, setScore] = useState(0);
	const [cardCount, setCardCount] = useState(4);

	useEffect(() => {
		setCardCount(score + 3);
	}, [score]);

	return (
		<div>
			<header>
				<Scoreboard score={score} />
			</header>
			<main>
				<CardPane cardCount={cardCount} />
				<button onClick={() => setScore(score + 1)}>Increase</button>
			</main>
		</div>
	);
}
