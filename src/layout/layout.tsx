import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CartTab from "./cartTab";

const Layout = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <main className="flex-initial">
        <Outlet />
      </main>

      <CartTab />

      <Footer />
    </div>
  );
};

export default Layout;
