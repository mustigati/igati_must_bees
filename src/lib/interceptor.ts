// interceptorSetup.ts
import api from "@/lib/api";
import store from "../stores";
import { logout } from "../stores/useAuth";

/* ---------- AUTO-LOGOUT ON 401 ---------- */
api.interceptors.response.use(
	(res) => res,
	(error) => {
		if (error.response?.status === 401) {
			store.dispatch(logout("Session expired – please log in again."));
		}
		return Promise.reject(error);
	}
);
