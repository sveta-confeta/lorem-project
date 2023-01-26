const correctCredentials = {
	name: 'test',
	password: 'test123',
}

const getUser = async (userName: string, password: string) => {
	if (correctCredentials.name !== userName || correctCredentials.password !== password) {
		throw Error('Wrong user name or password')
	}

	return correctCredentials
}

export const loginUser = async (userName: string, password: string) => {
	try {
		const user = await getUser(userName, password)

		const dataForLocalStorage = JSON.stringify({name: user.name, isAuthorised: true})
		await window.localStorage.setItem('user', dataForLocalStorage)

		return user
	} catch (e: any) {
		throw new Error(e.message)
	}
}
