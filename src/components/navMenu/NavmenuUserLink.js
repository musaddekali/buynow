import { BsEmojiSmile, BsBox, BsHeart, BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import UserAvatar from '../../components/userAvater/UserAvatar';

const NavmenuUserLink = ({ logOut }) => {
    const { user } = useGlobalContext();

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
            <UserAvatar src={user?.img} name={user?.name} />
            <span className="nav-menu-username">{user?.name}</span>
            {/* Dropdown Content  */}
            <ul className="nav-menu-dropdown-content">
                {
                    dropdown.map((item) => {
                        if (item.name === 'Logout') {
                            return <li key={item.id}>
                                <span className="nav-menu-dropdown-icon">{item.icon}</span>
                                <Link
                                    title="LogOut?"
                                    onClick={logOut}
                                    to={item.link}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        }
                        return <li key={item.id}>
                            <span className="nav-menu-dropdown-icon">{item.icon}</span>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default NavmenuUserLink;
