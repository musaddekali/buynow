import { Link } from "react-router-dom";
import "./nav-menu.css";
import Img from "../../assets/images/coffeeCup.jpg";

const NavMenu = () => {
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
            {/* When user will be True, show this link   */}
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
                <li>
                  <span className="nav-menu-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                  </span>
                  <Link to="/profile">Manage Profile</Link>
                </li>
                <li>
                  <span className="nav-menu-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                    </svg>
                  </span>
                  <Link to="/orders">My Orders</Link>
                </li>
                <li>
                  <span className="nav-menu-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </span>
                  <Link to="/wishlist">My Wishlist</Link>
                </li>
                <li>
                  <span className="nav-menu-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                      />
                    </svg>
                  </span>
                  <Link to="#">LogOut</Link>
                </li>
              </ul>
            </div>
            <Link className="cart nav-a nav-menu-height" to="/cart">
              <div className="cart-badge-wrap">
                <span className="count">5</span>
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
