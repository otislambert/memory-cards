import React, { useEffect, useState } from 'react';

import Card from './Card.js';

import style from './../styles/CardPane.module.css';

export default function CardPane(props) {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		if (cards !== props.cards) {
			setCards(props.cards);
		}
	}, [props.cards, cards]);

	return (
		<div>
			<p>Card Count: {props.cardCount}</p>
			<div className={style.cardPane}>
				{[...cards].map((x) => (
					<Card photo={x.src} increaseScore={props.increaseScore} />
				))}
			</div>
		</div>
	);
}
