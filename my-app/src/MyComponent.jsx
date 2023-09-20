import { useState } from 'react';

import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [showGreenText, setShowGreenText] = useState(false);
	const [input, setInput] = useState('');
	const calcBtns = [];
	[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].forEach((item) => {
		calcBtns.push(
			<button
				onClick={(e) => {
					setInput(input + e.target.value);
				}}
				value={item}
				key={item}
			>
				{' '}
				{item}
			</button>,
		);
	});

	return (
		<div className={styles.wrapper}>
			{' '}
			<div
				className={`${styles.show_input} ${
					showGreenText ? styles.green : styles.white
				}`}
			>
				{input}
			</div>
			<div className={`${styles.digits} ${styles.flex}`}>{calcBtns}</div>
			<div className={`${styles.modifiers} ${styles.subgrid}`}>
				{/* delete button */}
				<button
					onClick={() => {
						if (showGreenText) {
							setShowGreenText(!showGreenText);
						}
						setInput(input.substr(0, input.length - 1));
					}}
				>
					DEL
				</button>
				{/* clear all */}
				<button
					onClick={() => {
						if (showGreenText) {
							setShowGreenText(!showGreenText);
						}
						setInput('');
					}}
				>
					C
				</button>
			</div>
			<div className={`${styles.operations} ${styles.subgrid}`}>
				{/* plus button */}
				<button
					onClick={(e) => {
						if (showGreenText) {
							setShowGreenText(!showGreenText);
						}
						setInput(input + e.target.value);
					}}
					value={'+'}
				>
					+
				</button>

				{/* minus btn */}
				<button
					onClick={(e) => {
						if (showGreenText) {
							setShowGreenText(!showGreenText);
						}
						setInput(input + e.target.value);
					}}
					value={'-'}
				>
					{' '}
					-{' '}
				</button>
				{/* "=" btn */}
				<button
					onClick={(e) => {
						try {
							if (!showGreenText) {
								setShowGreenText(!showGreenText);
							}
							setInput(String(eval(input)));
						} catch (e) {
							console.log(e);
						}
					}}
					value="="
				>
					=
				</button>
			</div>
		</div>
	);
};
