import React from 'react';
import Button from './Button';
import styles from '../MyComponent.module.css';

function ButtonsContainer({ handleClick, operatorClick, handleEqual, backspace, clear }) {
	return (
		<div className={`${styles.btn_wrapper}`}>
			<div className={`${styles.btn_container}`}>
				<Button handleClick={handleClick} name={7} value={7} />
				<Button handleClick={handleClick} name={8} value={8} />
				<Button handleClick={handleClick} name={9} value={9} />
				<Button
					handleClick={() => operatorClick('+')}
					className={`${styles.colored_btn}`}
					name={'+'}
					value={'+'}
				/>
			</div>
			<div className={`${styles.btn_container}`}>
				<Button handleClick={handleClick} name={4} value={4} />
				<Button handleClick={handleClick} name={5} value={5} />
				<Button handleClick={handleClick} name={6} value={6} />
				<Button
					handleClick={() => operatorClick('-')}
					className={`${styles.colored_btn}`}
					name={'-'}
					value={'-'}
				/>
			</div>
			<div className={`${styles.btn_container}`}>
				<Button handleClick={handleClick} name={1} value={1} />
				<Button handleClick={handleClick} name={2} value={2} />
				<Button handleClick={handleClick} name={3} value={3} />
				<button className={`${styles.colored_btn}`} onClick={backspace}>
					<i className={`${styles.colored_btn}`}>C</i>
				</button>
			</div>
			<div className={`${styles.btn_container}`}>
				<Button handleClick={handleClick} name={0} value={0} />
				<Button
					className={`${styles.span_two} ${styles.colored_btn}`}
					handleClick={handleEqual}
					name={'='}
					value={'='}
				/>
				<button onClick={clear} className={`${styles.colored_btn}`}>
					AC
				</button>
			</div>
		</div>
	);
}

export default ButtonsContainer;
