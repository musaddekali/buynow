import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../context/firebase-config";
import "./signup.css";

const initialFormData = {
  name: '',
  email: '',
  pwd: ''
}

const Signup = () => {
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
    if (Object.values(formData).every(v => v)) {
      setLoading(true);
      const { name, email, pwd } = formData;
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, pwd);
        await setDoc(doc(db, 'users', user.uid), {
          name,
          uid: user.uid,
          email: user.email,
          createdAt: Timestamp.fromDate(new Date()),
          lastUpdate: Timestamp.fromDate(new Date())
        })
        setError(null);
        navigate('/');
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
      return;
    }
    setError('Please fill all the field');
  }

  return (
    <section className="log-sign">
      <div className="log-sign-in">
        <h3 className="log-sign-title">SignUp</h3>
        <form
          onSubmit={handleFormSubmit}
          className="log-sign-form"
        >
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleOnChange}
            id="name"
            className="form-control mb-3"
            name="name"
            type="text"
            placeholder="Name..."
          />
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
            {loading ? 'Signing Up...' : 'SingUp'}
          </button>
        </form>
        {error && <span className="d-block bg-danger text-white p-1 px-3 mt-3 rounded">{error}</span>}
        <Link to="/login" className="log-sign-help">
          Already have an Account? Login
        </Link>
      </div>
    </section>
  );
};

export default Signup;
