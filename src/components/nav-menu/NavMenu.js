import { Link } from "react-router-dom";
import { BsEmojiSmile, BsBox, BsHeart, BsBoxArrowLeft } from "react-icons/bs";
import "./nav-menu.css";
import Img from "../../assets/images/coffeeCup.jpg";
import { useGlobalContext } from "../../context/context";

const NavmenuGuestLink = () => {
  return (
    <Link className="nav-a nav-menu-height" to="/signup">
      <span className="nav-user-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" fillRule="evenodd">
            <circle
              cx="12"
              cy="12"
              r="12"
              fill="#d92e35"
              fillRule="nonzero"
            ></circle>
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"
            ></path>
          </g>
        </svg>
      </span>
      <span className="user-state">SignUp</span>
    </Link>
  );
};

const NavmenuUserLink = () => {
  const dropdown = [
    {
      id: 1,
      name: "Manage Profile",
      link: "/profile",
      icon: <BsEmojiSmile />,
    },
    {
      id: 2,
      name: "My Orders",
      link: "/orders",
      icon: <BsBox />,
    },
    {
      id: 3,
      name: "My Wishlist",
      link: "/wishlist",
      icon: <BsHeart />,
    },
    {
      id: 4,
      name: "Logout",
      link: "#",
      icon: <BsBoxArrowLeft />,
    },
  ];
  return (
    <div className="nav-menu-user nav-menu-dropdown nav-menu-height">
      <img
        className="nav-menu-user-img"
        src={Img}
        height="40"
        width="40"
        alt="profile"
      />
      <span className="nav-menu-username">Mahid Ahmod</span>
      {/* Dropdown Content  */}
      <ul className="nav-menu-dropdown-content">
        {dropdown.map((item) => (
          <li key={item.id}>
            <span className="nav-menu-dropdown-icon">{item.icon}</span>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavMenu = () => {
  const { totalQuantity } = useGlobalContext();

  return (
    <header className="header fixed-top">
      <nav className="nav-menu">
        <div className="nav-menu-left">
          <Link
            to="/"
            title="Go Home"
            className="nav-menu-logo nav-menu-height"
          >
            <span>E-commerce</span>
          </Link>
        </div>
        <div className="nav-menu-middle">
          <div className="nav-menu-search nav-menu-height">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-menu-right">
          <div className="nav-menu-links">
            {/* If User False */}
            <NavmenuGuestLink />
            {/* If User True */}
            <NavmenuUserLink />
            <Link className="cart nav-a nav-menu-height" to="/cart">
              <div className="cart-badge-wrap">
                <span className="count">{totalQuantity}</span>
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
