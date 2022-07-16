import { Link } from "react-router-dom";
import "./nav-menu.css";
import { useGlobalContext } from "../../context/context";
import NavmenuGuestLink from "./NavmenuGuestLink";
import NavmenuUserLink from "./NavmenuUserLink";
import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase-config";

const NavMenu = () => {
  const { user, totalQuantity, showAlert } = useGlobalContext();

  const logOut = async () => {
    if (!user) return;
    if (window.confirm('Do You Want To LogOut?')) {
      try {
        await signOut(auth);
        showAlert('LogOut Successfull.')
      } catch (e) {
        console.log('User logout problems -> ', e);
      }
    }
  }

  return (
    <header className="header fixed-top">
      <nav className="nav-menu">
        <div className="nav-menu-left">
          <Link
            to="/"
            title="Go Home"
            className="nav-menu-logo nav-menu-height"
          >
            <span>BuyNow</span>
          </Link>
        </div>
        <div className="nav-menu-middle">
          <div className="nav-menu-search nav-menu-height">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-menu-right">
          <div className="nav-menu-links">
            {
              user ? <NavmenuUserLink logOut={logOut}/> : <NavmenuGuestLink />
            }
            <Link className="cart nav-a nav-menu-height" to="/cart">
              <div className="cart-badge-wrap">
                {totalQuantity ? <span className="count">{totalQuantity}</span> : ''}
                <span className="nav-cart-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#d92e35"
                      d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"
                    ></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
