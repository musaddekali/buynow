import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <section className="log-sign">
      <div className="log-sign-in">
        <h3 className="log-sign-title">SignUp</h3>
        <form className="log-sign-form">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control mb-3"
            type="email"
            placeholder="Name..."
          />
          <label for="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            className="form-control mb-3"
            type="email"
            placeholder="Email..."
          />
          <label for="pwd" className="form-label">
            Password
          </label>
          <input
            id="pwd"
            className="form-control mb-3"
            type="password"
            placeholder="Password..."
          />
          <input
            className="btn primary-btn btn-block"
            type="submit"
            value="SignUp"
          />
        </form>
        <Link to="/login" className="log-sign-help">
          Already have an Account? Login
        </Link>
      </div>
    </section>
  );
};

export default Signup;
