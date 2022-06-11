import'./update-profile.css';

const UpdateProfile = () => {
  return (
    <section className="update-profile">
      <div className="container">
        <div className="section-title">
          <h3>Update Your Profile</h3>
        </div>
        <div className="update-profile-content">
          <div className="update-profile-bd">
            <form>
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control mb-3 shadow-none"
                id="name"
                type="text"
              />

              <label className="form-label" for="mobile-num">
                Mobile
              </label>
              <input
                className="form-control mb-3 shadow-none"
                id="mobile-num"
                type="text"
              />

              <label className="form-label" for="address">
                Address
              </label>
              <input
                className="form-control mb-4 shadow-none"
                id="address"
                type="text"
              />
            </form>
          </div>
          <div className="update-profile-ft">
            <button className="btn secondary-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
