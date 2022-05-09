import style from './../styles/Card.module.css';

export default function Card(props) {
	return (
		<div onClick={props.increaseScore}>
			<img src={props.photo} alt={props.name} className={style.cardImage} />
		</div>
	);
}
