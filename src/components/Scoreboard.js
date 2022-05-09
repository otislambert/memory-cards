import React from 'react';

import style from './../styles/Scoreboard.module.css';

export default function Scoreboard(props) {
	return (
		<div className={style.scoreBoard}>
			<p>Current Score: {props.score}</p>
			<p>Best Score: {props.highScore}</p>
		</div>
	);
}
