import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../context/firebase-config";
import "./login.css";

const initialFormData = {
  email: '',
  pwd: ''
}

const Login = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(formData).every(n => n)) {
      setLoading(true);
      const { email, pwd } = formData;
      try {
        await signInWithEmailAndPassword(auth, email, pwd);
        setError(null);
        navigate('/');
      } catch (e) {
        setError('Your email or password is wrong.');
        setLoading(false);
      }
      return;
    }
    setError('Please fill all the field');
  }

  return (
    <section className="log-sign">
      <div className="log-sign-in">
        <h3 className="log-sign-title">Login</h3>
        <form
          onSubmit={handleFormSubmit}
          className="log-sign-form"
        >
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={handleOnChange}
            id="email"
            className="form-control mb-3"
            name="email"
            type="email"
            placeholder="Email..."
          />
          <label htmlFor="pwd" className="form-label">
            Password
          </label>
          <div className="log-sign-pdw-input">
            <input
              onChange={handleOnChange}
              id="pwd"
              className="form-control mb-3"
              name="pwd"
              type="password"
              placeholder="Password..."
            />
            <span>show</span>
          </div>
          <button
            type="submit"
            className="btn primary-btn btn-block"
            disabled={loading}
          >
            {loading ? 'Logging...' : 'Login'}
          </button>
        </form>
        {error && <span className="d-block bg-danger text-white p-1 px-3 mt-3 rounded">{error}</span>}
        <Link to="/signup" className="log-sign-help">
          Create New Account.
        </Link>
      </div>
    </section>
  );
};

export default Login;
