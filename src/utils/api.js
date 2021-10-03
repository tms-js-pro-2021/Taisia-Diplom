import axios from "axios";

class Api {
	async get(endpoint, params) {
		const response = await axios.get(`${API_URL}/${endpoint}`, { params });
		return response;
	}

	async post(endpoint, body) {
		const response = await axios.post(`${API_URL}/${endpoint}`, { body })
		return response
	}

	put() {}

	delete() {}
}

export default new Api()