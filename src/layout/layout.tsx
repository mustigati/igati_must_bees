import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CartTab from "./cartTab";
import { useSelector } from "react-redux";
import type { RootState } from "@/stores";

const Layout = () => {
  const statusTabCart = useSelector((store: RootState) => store.cart.statusTab);
  return (
    <div className="flex flex-col ">
      <Header />

      <main
        className={`w-[1080px] max-w-full m-auto p-5 transform transition-transform duration-500 ${
          statusTabCart === true ? "" : "-translate-x-56"
        }`}
      >
        <Outlet />
      </main>

      <CartTab />

      <Footer />
    </div>
  );
};

export default Layout;
