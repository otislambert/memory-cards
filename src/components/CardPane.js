import { useEffect, useState } from 'react';
import uniquid from 'uniquid';

import Card from './Card.js';

import style from './../styles/CardPane.module.css';

function importImages() {
	const importAll = (r) => {
		const images = [];
		r.keys().map(
			(item, index) =>
				(images[item.replace('./', '').replace('.jpg', '')] = r(item))
		);
		return images;
	};

	const images = importAll(
		require.context('./../images/BirdPhotos', false, /\.(png|jpe?g|svg)$/)
	);
	return images;
}

export default function CardPane(props) {
	const [cardCount, setCardCount] = useState(props.cardCount);

	const images = importImages();
	console.log(images);
	//set card count:
	useEffect(() => {
		if (props.cardCount !== { cardCount }) {
			setCardCount(props.cardCount);
		}
	}, [props.cardCount, cardCount]);

	return (
		<div>
			<p>Card Count: {props.cardCount}</p>
			<div className={style.cardPane}>
				{[...Array(props.cardCount)].map((x, i) => (
					<Card key={uniquid()} photo={images.cockatoo} alt='cockatoo' />
				))}
			</div>
		</div>
	);
}
