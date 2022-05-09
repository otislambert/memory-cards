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
			<div className={style.cardPane}>
				{[...cards].map((card) => (
					<Card key={card.id} card={card} cardClick={props.cardClick} />
				))}
			</div>
		</div>
	);
}
