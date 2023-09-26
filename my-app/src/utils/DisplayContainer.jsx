import React from 'react';
import styles from '../MyComponent.module.css';

function DisplayContainer({ display, result, showGreenText }) {
	return (
		<>
			<div className={`${styles.display_container}`}>
				<div className={`${styles.display}`}>
					<div className={`${styles.input_field}`}>{display}</div>
					<div
						className={`${styles.answer_field} ${
							showGreenText ? styles.text_green : styles.text_black
						}`}
					>
						{result}
					</div>
				</div>
			</div>
		</>
	);
}

export default DisplayContainer;
