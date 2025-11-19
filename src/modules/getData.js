const getData = (str) => {
	return fetch(
		`http://localhost:3001/goods?${str ? `search=${str}` : ''}`
	).then((response) => response.json())
}

export default getData
