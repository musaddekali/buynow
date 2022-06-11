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
        <div className="profile-content">
          <div className="profile-hd">
            <img
              src={Img}
              width="120"
              height="120"
              alt="Profile"
            />
            <div className="upload-area">
              <label for="file-upload" className="btn primary-btn">
                <span className="upload-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>
                </span>
                Upload
              </label>
              <input id="file-upload" className="d-none" type="file" />
            </div>
          </div>
          <div className="profile-bd">
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
          </div>
          <div className="profile-ft">
            <Link to="/update-profile" className="btn primary-btn">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
