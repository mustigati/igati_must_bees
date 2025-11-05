/* ---------- API ---------- */
import axios from "axios";

const api = axios.create({
	baseURL:
		import.meta.env.VITE_API_BASE ?? "https://backend-y2x2.onrender.com/",
	headers: { "Content-Type": "application/json" },
	timeout: 60000,
});

export default api;
