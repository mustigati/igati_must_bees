import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import NotFound from "./pages/Not-Found";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Layout from "./layout/layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import { Toaster } from "react-hot-toast";
import Details from "./pages/Details";
import AuthInitializer from "./components/auth/AuthInitializer";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Index /> },
				{ path: "projects", element: <Projects /> },
				{ path: "products", element: <Products /> },
				{ path: "about", element: <About /> },
				{ path: "contact", element: <Contact /> },
				{ path: "signup", element: <Signup /> },
				{ path: "signin", element: <Signin /> },
				{ path: "forgot-password", element: <ForgotPassword /> },
				{ path: "*", element: <NotFound /> },
				{ path: "products/:slug", element: <Details /> },
			],
		},
	]);
	return (
		<div>
			<AuthInitializer />
			<RouterProvider router={router} />
			<Toaster
				position="bottom-right"
				toastOptions={{
					duration: 4000, // 4 seconds (default is 4000ms)
					style: {
						background: "#363636",
						color: "#fff",
					},
					success: {
						duration: 3000, // 3 seconds for success messages
						iconTheme: {
							primary: "#10b981",
							secondary: "#fff",
						},
					},
					error: {
						duration: 5000, // 5 seconds for error messages
						iconTheme: {
							primary: "#ef4444",
							secondary: "#fff",
						},
					},
					loading: {
						duration: Infinity, // Loading toasts stay until dismissed
					},
				}}
			/>
		</div>
	);
};

export default App;
