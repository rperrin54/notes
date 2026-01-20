import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/notes";

export default {
    // Récupération de toutes les notes
	getAll() {
		return axios.get(API_URL);
	},

    // Création d'une nouvelle note
	create(title) {
		return axios.post(API_URL, { title });
	},
    
    // Suppression d'une note par son id
	delete(id) {
		return axios.delete(`${API_URL}/${id}`);
	},
};
