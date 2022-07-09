import { useState } from "react";
import "./update-profile.css";
import Img from "../../assets/images/coffeeCup.jpg";
import { storage } from "../../context/firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useGlobalContext } from "../../context/context";

const initialFormData = {
  img: null,
  name: "",
  mobile: '',
  address: "",
};

const UpdateProfile = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { useruid } = useGlobalContext();
  const [imgDataURl, setImgDataUrl] = useState(null);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.name === "img" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [name]: value });
    if (name === "img") {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", (e) => {
        const data = e.target.result;
        setImgDataUrl(data);
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      console.log("Fill the Required** fields");
      return;
    }
    if (formData.img) {
      const imgRef = ref(storage, `profileImg/${useruid}/${formData.img.name}`);
      await uploadBytes(imgRef, formData.img);
      const link = await getDownloadURL(imgRef);
      console.log("Link", link);
    }
    setFormData(initialFormData);
    console.log("Form Submited", formData);
  };

  return (
    <section className="update-profile">
      <div className="container">
        <div className="section-title">
          <h3>Update Your Profile</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 order-lg-2">
            <div className="update-profile-img-area">
              <img src={imgDataURl} width="120" height="120" alt="Profile" />
              <label
                htmlFor="file-upload"
                className="btn primary-btn profile-img-upload-btn"
              >
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
              <input
                onChange={handleOnChange}
                id="file-upload"
                name="img"
                className="d-none"
                type="file"
                accept=".jpg, .png, .jpeg"
              />
            </div>
          </div>
          <div className="col-lg-8 order-lg-1">
            <form onSubmit={handleFormSubmit}>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                onChange={handleOnChange}
                className="form-control mb-3 shadow-none"
                id="name"
                name="name"
                value={formData.name}
                type="text"
              />

              <label className="form-label" htmlFor="mobile">
                Mobile
              </label>
              <input
                onChange={handleOnChange}
                className="form-control mb-3 shadow-none"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                type="text"
              />

              <label className="form-label" htmlFor="address">
                Address
              </label>
              <input
                onChange={handleOnChange}
                className="form-control mb-4 shadow-none"
                id="address"
                name="address"
                value={formData.address}
                type="text"
              />
              <button type="submit" className="btn secondary-btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
