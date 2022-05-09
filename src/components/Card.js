import style from './../styles/Card.module.css';

export default function Card(props) {
	return (
		<div data-key={props.card.id} onClick={props.cardClick}>
			<img src={props.card.src} alt='' className={style.cardImage} />
		</div>
	);
}
