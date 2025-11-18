const getData = () => {
	return fetch('http://localhost:3001/goods').then((response) =>
		response.json()
	)
}

export default getData
