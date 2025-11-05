/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	createSlice,
	createAsyncThunk,
	type PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import api from "@/lib/api";

/* ---------- TYPES ---------- */
interface User {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

interface RegisterData
	extends Pick<User, "firstName" | "lastName" | "email" | "phoneNumber"> {
	password: string;
}

interface LoginData {
	email: string;
	password: string;
}

interface AuthState {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

/* ---------- INITIAL STATE ---------- */
const initialState: AuthState = {
	user: null,
	token: null,
	isAuthenticated: false,
	isLoading: false,
	error: null,
};

/* ---------- ASYNC THUNKS ---------- */
export const registerUser = createAsyncThunk(
	"auth/register",
	async (payload: RegisterData, { rejectWithValue }) => {
		try {
			await api.post("/register/", payload);
			return; // No data needed for success
		} catch (e) {
			const msg = extractError(e);
			return rejectWithValue(msg);
		}
	}
);

export const loginUser = createAsyncThunk(
	"auth/login",
	async (payload: LoginData, { rejectWithValue }) => {
		try {
			const { data } = await api.post("/login/", payload);
			const { token, user, message } = data;

			localStorage.setItem("authToken", token);
			// Store user data separately for persistence
			localStorage.setItem("userData", JSON.stringify(user));
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			toast.success(message || "Login successful!");

			return { token, user, message };
		} catch (e) {
			const msg = extractError(e);
			toast.error(msg);
			return rejectWithValue(msg);
		}
	}
);

/* ---------- SLICE ---------- */
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state, action: PayloadAction<string | undefined>) => {
			const msg = action.payload || "You have been logged out.";
			localStorage.removeItem("authToken");
			localStorage.removeItem("userData");
			delete api.defaults.headers.common["Authorization"];
			toast(msg, { icon: "👋" });

			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			state.error = null;
		},
		clearError: (state) => {
			state.error = null;
		},
		setCredentials: (
			state,
			action: PayloadAction<{ token: string; user: User }>
		) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.isAuthenticated = true;
		},
		initializeAuth: (state) => {
			const token = localStorage.getItem("authToken");
			const userDataString = localStorage.getItem("userData");

			console.log("🔐 Initializing Auth...");
			console.log("Token exists:", !!token);
			console.log("User data exists:", !!userDataString);

			// IMPORTANT: Only set authenticated if BOTH token AND user data exist
			if (token && userDataString) {
				try {
					const parsedUser = JSON.parse(userDataString);

					// Validate that user has required fields
					if (parsedUser && parsedUser.email && parsedUser.firstName) {
						state.token = token;
						state.user = parsedUser;
						state.isAuthenticated = true;
						api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
						console.log("✅ User data restored from localStorage:", parsedUser);
					} else {
						// Invalid user data structure
						console.warn("⚠️ Invalid user data structure, clearing auth");
						localStorage.removeItem("authToken");
						localStorage.removeItem("userData");
						state.isAuthenticated = false;
						state.user = null;
						state.token = null;
					}
				} catch (e) {
					console.error("❌ Failed to parse stored user data:", e);
					// If stored user data is invalid, clear everything
					localStorage.removeItem("authToken");
					localStorage.removeItem("userData");
					state.isAuthenticated = false;
					state.user = null;
					state.token = null;
				}
			} else {
				// Missing token or user data - ensure auth is false
				console.log(
					"❌ Missing token or user data, setting authenticated to false"
				);
				state.isAuthenticated = false;
				state.user = null;
				state.token = null;

				// Clean up partial data if any
				if (token || userDataString) {
					localStorage.removeItem("authToken");
					localStorage.removeItem("userData");
				}
			}
		},
	},
	extraReducers: (builder) => {
		// Register cases
		builder.addCase(registerUser.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(registerUser.fulfilled, (state) => {
			state.isLoading = false;
			state.error = null;
			toast.success("Registration successful! Please login.");
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
			toast.error(action.payload as string);
		});

		// Login cases
		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.isAuthenticated = true;
			console.log("✅ Login successful, user:", action.payload.user);
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
		});
	},
});

/* ---------- HELPERS ---------- */
function extractError(e: unknown): string {
	if (axios.isAxiosError(e)) {
		const axiosError = e as AxiosError<{ message?: string }>;

		// Handle timeout specifically
		if (e.code === "ECONNABORTED" || e.message.includes("timeout")) {
			return "Request timed out. Please check your connection and try again.";
		}

		// Handle network errors
		if (!axiosError.response) {
			return "Network error. Please check your internet connection.";
		}

		return axiosError.response?.data?.message ?? e.message;
	}
	return (e as Error)?.message ?? "Something went wrong";
}

export const { logout, clearError, setCredentials, initializeAuth } =
	authSlice.actions;
export default authSlice.reducer;
