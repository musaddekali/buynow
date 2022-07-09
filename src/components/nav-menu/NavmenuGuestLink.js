import { Link } from "react-router-dom";

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
        <span className="user-state">SignUp/LogIn</span>
      </Link>
    );
  };

  export default NavmenuGuestLink;
  