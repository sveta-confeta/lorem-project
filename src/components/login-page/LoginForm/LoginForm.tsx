import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import s from './LoginForm.module.css'
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
		<form className={s.form} onSubmit={login}>
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
			<button className={s.btnLogin} type="submit" disabled={!isCredentialsValid}>Continue</button>
			{errorMessage || <div>{errorMessage}</div>}
		</form>
	);
}

export default LoginForm;
