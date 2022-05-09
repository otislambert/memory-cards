import style from './../styles/Card.module.css';

export default function Card(props) {
	return (
		<div>
			<img src={props.photo} alt={props.name} className={style.cardImage} />
		</div>
	);
}
