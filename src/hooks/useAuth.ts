// hooks/useAuth.ts
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { loginUser, registerUser, logout, clearError } from "@/stores/useAuth";

export const useAuth = () => {
	const dispatch = useAppDispatch();
	const authState = useAppSelector((state) => state.auth);

	// Debug logging
	console.log("useAuth - Current State:", authState);

	const login = useCallback(
		async (credentials: { email: string; password: string }) => {
			try {
				const result = await dispatch(loginUser(credentials)).unwrap();
				console.log("Login result:", result);
				return { success: true };
			} catch (error) {
				console.error("Login error:", error);
				return { success: false, error };
			}
		},
		[dispatch]
	);

	const register = useCallback(
		async (userData: {
			firstName: string;
			lastName: string;
			email: string;
			password: string;
			phoneNumber: string;
		}) => {
			try {
				await dispatch(registerUser(userData)).unwrap();
				return { success: true };
			} catch (error) {
				return { success: false, error };
			}
		},
		[dispatch]
	);

	const signOut = useCallback(
		(message?: string) => {
			dispatch(logout(message));
		},
		[dispatch]
	);

	const resetError = useCallback(() => {
		dispatch(clearError());
	}, [dispatch]);

	return {
		...authState,
		login,
		register,
		logout: signOut,
		clearError: resetError,
	};
};
