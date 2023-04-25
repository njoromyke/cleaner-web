import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showNotification } from "../../helpers/utils/notification";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/loader/Loader";
import { auth } from "../../services/firebase";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "myke@gmail.com",
    password: 123456,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        window.location.href = "/";
      })
      .catch((error) => {
        const errorMessage = error.message;
        showNotification(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section className="">
        {loading && <Loader />}
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h2 className="text-center">
                <span className="theme-cl">Login</span> Now
              </h2>
              <form className="border p-3 rounded" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>User Email *</label>
                  <input type="email" className="form-control" placeholder="Email*" onChange={handleChange} name="email" />
                </div>

                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password*"
                    onChange={handleChange}
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="eltio_k2">
                      <Link to="/sign-up">
                        Don't have an account?
                        <span className="theme-cl"> Sign Up</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-md full-width theme-bg text-light fs-md ft-medium">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
