import React, {useCallback, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../api/login';

const correctCredentials = {
	login: 'test',
	password: 'test123',
}

export const useLogin = () => {
	const [isCredentialsValid, setIsCredentialsValid] = useState(false)
	const [errorMessage, setErrorMessage] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginError, setIsLoginError] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
			if(userName && userName.length < 4) {
				setIsCredentialsValid(false)
				setErrorMessage('The user name must contain more than four characters')
			} else if (password && password.length < 4) {

				setIsCredentialsValid(false)
				setErrorMessage('The password name must contain more than four characters')
			} else if ((userName && !password) || (!userName && password)) {
				setIsCredentialsValid(false)
				setErrorMessage('')
			} else if (!isLoginError) {
				setIsCredentialsValid(true)
				setErrorMessage('')
			}
		},
		[userName, password, isLoginError],
	);
	const onFocus = ()=> {
		if (isLoginError) {
			setIsLoginError(false)
			setErrorMessage('')
		}
	}

	const login = async () =>{
		try {
			await loginUser(userName, password)

			navigate('/', {replace: true})
		} catch (e: any) {
			setUserName('')
			setPassword('')
			setIsLoginError(true)
			setErrorMessage(e.message)
		}
	}

	return {isCredentialsValid, errorMessage, userName, setUserName, password, setPassword, login, onFocus}
}
