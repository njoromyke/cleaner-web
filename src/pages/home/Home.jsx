import React, { useEffect, useState } from "react";
import Banner from "../../assets/img/banner-4.jpg";
import { database } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const [services, setServices] = useState([]);
  const servicesCollection = collection(database, "services");
  const [loading, setLoading] = useState(false);

  const fetchServices = () => {
    setLoading(true);
    getDocs(servicesCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setServices((prevState) => [...prevState, doc.data()]);
      });
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div
        className="home-banner margin-bottom-0"
        data-overlay="5"
        style={{
          background: `#00ab46 url(${Banner}) no-repeat`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  <span className="count">72412</span> jobs Listed Here!
                </h1>
                <p className="fs-md ft-medium">Your Dream Jobs is Waiting</p>
              </div>

              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Location or Zip Code"
                      />
                      <i className="bnc-ico lni lni-target"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value="1">Choose Categories</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Cloud Computing</option>
                        <option value="4">Engineering Services</option>
                        <option value="5">Healthcare/Pharma</option>
                        <option value="6">Telecom/ Internet</option>
                        <option value="7">Finance/Insurance</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="button"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center align-items-center justify-content-center mt-5">
                <a href="" className="btn bg-white hover-theme ft-regular mr-1">
                  <i className="lni lni-user mr-1"></i>Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Trending Jobs</h6>
                <h2 className="ft-bold">All Popular Listed jobs</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded ">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
                    Full Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://via.placeholder.com/120x120"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      ratings here
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      Laundry
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>San Francisco</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>$50k - $80k PA.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>3 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a
                  href="job-search-v1.html"
                  className="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                >
                  Explore More Jobs
                  <i className="lni lni-arrow-right-circle ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
