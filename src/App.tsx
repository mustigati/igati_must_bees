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
        {path:"signup", element: <Signup />},
        {path:"signin", element:<Signin />},
        {path:"forgot-password",element:<ForgotPassword />},
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
