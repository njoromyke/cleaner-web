import { createUserWithEmailAndPassword } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { counties } from "../../data/conties";
import { showNotification } from "../../helpers/utils/notification";
import { auth, database } from "../../services/firebase";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      showNotification("Password and Confirm Password should be same");
      return;
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const userCollection = collection(database, "users");

        const user = {
          firstName: formData.firstName,
          phone: formData.phone,
          email: formData.email,
          role: "user",
          createdAt: new Date(),
          location: formData.location,
        };

        addDoc(userCollection, user)
          .then((docRef) => {
            showNotification("User created successfully", "success");
            window.location.href = "/";
          })
          .catch((error) => {
            showNotification(error.message);
          });
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
            <h2 className="text-center">
              <span className="theme-cl">Register</span> Now
            </h2>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mfliud">
              <form className="border p-3 rounded" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Phone Number*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number*"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Email *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username*"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Location*</label>
                    <select
                      className="form-control"
                      name="location"
                      onChange={handleChange}
                      value={formData.location}
                    >
                      <option defaultValue>Select Location</option>
                      {counties.map((location, index) => (
                        <>
                          <option key={index} value={location.name}>
                            {location.name}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password*"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Confirm Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password*"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <p>
                    By registering your details, you agree with our Terms &
                    Conditions, and Privacy and Cookie Policy.
                  </p>
                </div>

                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="eltio_k2">
                      <Link to="/">
                        Have an account?
                        <span className="theme-cl"> Sign In</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-md full-width theme-bg text-light fs-md ft-medium"
                  >
                    Create An Account
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

export default SignUp;
