const correctCredentials = {
	name: 'test',
	password: 'test123',
}

const getUser = async (userName: string, password: string) => {
	if (correctCredentials.name !== userName || correctCredentials.password !== password) {
		throw Error('Wrong name or password. Please, try again')
	}

	return correctCredentials
}

export const loginUser = async (userName: string, password: string) => {
	try {
		const user = await getUser(userName, password)

		const dataNameForLocalStorage = JSON.stringify(userName)
		const dataPasswordForLocalStorage = JSON.stringify({name: user.password})
		await window.localStorage.setItem('user', dataNameForLocalStorage)
		await window.localStorage.setItem('password', dataPasswordForLocalStorage)

		return user
	} catch (e: any) {
		throw new Error(e.message)
	}
}

