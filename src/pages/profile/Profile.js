import "./profile.css";
import Img from "../../assets/images/coffeeCup.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <section className="profile">
            <div className="container">
                <div className="section-title">
                    <h3>Profile</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 order-lg-2 text-center mb-3">
                        <img
                            className="profile-img"
                            src={Img}
                            width="120"
                            height="120"
                            alt="Profile"
                        />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                        <div className="profile-item">
                            <h3 className="profile-item-title">Name</h3>
                            <span className="profile-item-info">Mahid Ahmod</span>
                        </div>
                        <div className="profile-item">
                            <h3 className="profile-item-title">Email Address</h3>
                            <span className="profile-item-info">mahid@gmail.com</span>
                        </div>
                        <div className="profile-item">
                            <h3 className="profile-item-title">Mobile</h3>
                            <span className="profile-item-info">0179*****32</span>
                        </div>
                        <div className="profile-item">
                            <h3 className="profile-item-title">Address Book</h3>
                            <address className="profile-item-info">
                                Sylhet, Moulvibazaar, Shamsernagor
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
