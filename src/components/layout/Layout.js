import NavMenu from "../nav-menu/NavMenu";
import Footer from "../footer/Footer";
import {Outlet} from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <NavMenu />
      <main className="main"><Outlet /></main>
      <Footer />
    </>
  );
};

export default Layout;
