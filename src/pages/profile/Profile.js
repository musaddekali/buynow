import "./profile.css";
import { Link } from "react-router-dom";
import UserAvatar from '../../components/userAvater/UserAvatar';
import { useGlobalContext } from '../../context/context';

const Profile = () => {
    const { user } = useGlobalContext();

    return (
        <section className="profile">
            <div className="container">
                <div className="section-title">
                    <h3>Profile</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 order-lg-2 text-center mb-3">
                        <UserAvatar src={user?.img} name={user?.name} />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                        <div className="profile-item">
                            <h3 className="profile-item-title">Name</h3>
                            <span className="profile-item-info">{user?.name}</span>
                        </div>
                        <div className="profile-item">
                            <h3 className="profile-item-title">Email Address</h3>
                            <span className="profile-item-info">{user?.email}</span>
                        </div>
                        <div className="profile-item">
                            <h3 className="profile-item-title">Mobile</h3>
                            <span className="profile-item-info">
                                {
                                    user.mobile ?
                                        user.mobile :
                                        <i className="text-danger">Not given yet</i>
                                }
                            </span>
                        </div>
                        <div className="profile-item">
                            <h3 className="profile-item-title">Address Book</h3>
                            <address className="profile-item-info">
                                {
                                    user.address ?
                                        user.address :
                                        <i className="text-danger">Not given yet</i>
                                }
                            </address>
                        </div>
                        <Link to="/update-profile" className="btn primary-btn mt-5">
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
