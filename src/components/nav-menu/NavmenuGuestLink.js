import { Link } from "react-router-dom";

const NavmenuGuestLink = () => {
  return (
    <Link className="nav-a nav-menu-height nav-menu-guest" to="/signup">
      <span className="user-state">SignUp / LogIn</span>
    </Link>
  );
};

export default NavmenuGuestLink;
