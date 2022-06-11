import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <section className="log-sign">
      <div className="log-sign-in">
        <h3 className="log-sign-title">LogIn</h3>
        <form>
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
            value="LogIn"
          />
        </form>
        <Link to="/signup" className="log-sign-help">
          No Account? Create An Account
        </Link>
      </div>
    </section>
  );
};

export default Login;
