import NavMenu from "../navMenu/NavMenu";
import Footer from "../footer/Footer";
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from "../../context/context";
import Alert from "../alert/Alert";

const Layout = () => {
  const { alert } = useGlobalContext();

  return (
    <>
      <NavMenu />
      <main className="main"><Outlet /></main>
      {alert.show && <Alert />}
      <Footer />
    </>
  );
};

export default Layout;
