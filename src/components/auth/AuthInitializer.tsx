import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAuth } from "@/stores/useAuth";

/**
 * This component initializes authentication state from localStorage
 *
 */
const AuthInitializer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Initialize auth state from localStorage on app load
		dispatch(initializeAuth());
		console.log("Auth initialized from localStorage");
	}, [dispatch]);

	return null; // This component doesn't render anything
};

export default AuthInitializer;
