import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <main className="flex-initial">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
