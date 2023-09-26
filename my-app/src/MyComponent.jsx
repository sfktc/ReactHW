import React, { useState } from 'react';
import ButtonsContainer from './utils/ButtonContainer';
import DisplayContainer from './utils/DisplayContainer';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [display, setDisplay] = useState('');
	const [result, setResult] = useState('');
	const [showGreenText, setShowGreenText] = useState(false);

	function handleClick(e) {
		const targetValue = e.target.name;
		setDisplay(display + targetValue);
		if (showGreenText) {
			setShowGreenText(!showGreenText);
		}
	}

	function operatorClick(operator) {
		let lastCharacter = display.slice(-2);
		let operatorsArray = ['+ ', '- '];

		console.log(lastCharacter);

		if (display === '' || operatorsArray.includes(lastCharacter)) return;

		setDisplay((prevDisplay) => {
			if (showGreenText) {
				setShowGreenText(!showGreenText);
			}
			return prevDisplay + ' ' + operator + ' ';
		});
	}

	function handleEqual() {
		if (display.slice(-2).includes('+ ', '- ')) return;

		setDisplay('');

		try {
			if (!showGreenText) {
				setShowGreenText(!showGreenText);
			}
			const resultValue = calculate(display);
			setResult(resultValue);
		} catch (error) {
			setDisplay('Error');
		}
	}

	function calculate(expression) {
		const tokens = expression.split(' ');
		let resultValue = parseInt(tokens[0]);

		for (let i = 1; i < tokens.length; i += 2) {
			const operator = tokens[i];
			const nextNumber = parseInt(tokens[i + 1]);

			switch (operator) {
				case '+':
					resultValue += nextNumber;
					break;
				case '-':
					resultValue -= nextNumber;
					break;
				case '*':
					resultValue *= nextNumber;
					break;
				case '/':
					resultValue /= nextNumber;
					break;
				default:
					resultValue = 'Error';
			}
		}
		return resultValue;
	}

	function clear() {
		setDisplay('');
		setResult('');
	}

	function backspace() {
		setDisplay(display.slice(0, -1));
	}

	return (
		<>
			<div className={`${styles.container}`}>
				<div className={`${styles.calculator}`}>
					<DisplayContainer
						display={display}
						result={result}
						showGreenText={showGreenText}
					/>
					<ButtonsContainer
						operatorClick={operatorClick}
						handleClick={handleClick}
						handleEqual={handleEqual}
						backspace={backspace}
						clear={clear}
					/>
				</div>
			</div>
		</>
	);
};
