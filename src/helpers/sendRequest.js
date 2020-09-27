async function sendRequest({ url, method, body }) {
	switch (method) {
		case 'GET':
			const response = await fetch(url)
			const result = await response.json()
			return result
		default:
			return
	}
}

export default sendRequest
