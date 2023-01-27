import React  from 'react';
import s from './../Login.module.css'
import {useLogin} from '../../../hooks/useLogin';

function LoginForm() {
	const {userName, setUserName, password, setPassword , isCredentialsValid, errorMessage, login, onFocus} = useLogin()

	const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return (
		<>
			{}
		<form className={s.form} onSubmit={login}>
			<div>
			<input
				type="text"
				placeholder="Enter your name"
				value={userName}
				onChange={userNameHandler}
				className={`${s.input} ${s.top}`}
				onFocus={onFocus}
			/>
			<input
				type="password"
				placeholder="Enter password"
				value={password}
				onChange={passwordHandler}
				className={`${s.input} ${s.bottom}`}
				onFocus={onFocus}
			/>
				{errorMessage || <div className={s.errorMessage}>{errorMessage}</div>}
			</div>
			<button className={s.btnLogin} type="submit" disabled={!isCredentialsValid}>Continue</button>

		</form>
		</>
	);
}

export default LoginForm;
