import NavMenu from "../navMenu/NavMenu";
import Footer from "../footer/Footer";
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from "../../context/context";
import Loading from "../loading/Loading";

const Layout = () => {
  const { products } = useGlobalContext();

  if (!products.length) {
    return <Loading />
  }
  
  return (
    <>
      <NavMenu />
      <main className="main"><Outlet /></main>
      <Footer />
    </>
  );
};

export default Layout;
