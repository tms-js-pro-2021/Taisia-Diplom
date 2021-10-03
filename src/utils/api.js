import axios from "axios";

class Api {
	async get(endpoint, params) {
		const response = await axios.get(`${API_URL}/${endpoint}`, { params });
		return response;
	}

	post() {}

	put() {}

	delete() {}
}
