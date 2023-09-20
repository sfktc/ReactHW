import { useState } from 'react';

import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [input, setInput] = useState('');
	const calcBtns = [];
	[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach((item) => {
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
			<div className={styles.show_input}>{input}</div>
			<div className={`${styles.digits} ${styles.flex}`}>{calcBtns}</div>
			<div className={`${styles.modifiers} ${styles.subgrid}`}>
				{/* delete button */}
				<button onClick={() => setInput(input.substr(0, input.length - 1))}>
					DEL
				</button>
				{/* clear all */}
				<button onClick={() => setInput('')} value="">
					AC
				</button>
			</div>
			<div className={`${styles.operations} ${styles.subgrid}`}>
				{/* plus button */}
				<button onClick={(e) => setInput(input + e.target.value)} value="+">
					+
				</button>

				{/* minus btn */}
				<button onClick={(e) => setInput(input + e.target.value)} value="-">
					{' '}
					-{' '}
				</button>
				{/* "=" btn */}
				<button
					onClick={(e) => {
						try {
							setInput(
								String(eval(input)).length > 3 &&
									String(eval(input)).includes('.')
									? String(eval(input).toFixed(4))
									: String(eval(input)),
							);
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
