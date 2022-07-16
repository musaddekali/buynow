import NavMenu from "../navMenu/NavMenu";
import Footer from "../footer/Footer";
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";
import Alert from "../alert/Alert";

const Layout = () => {
  const { products, alert } = useGlobalContext();

  if (!products.length) {
    return <Loading />
  }

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
