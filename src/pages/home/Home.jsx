import React, { useEffect, useState } from "react";
import Banner from "../../assets/img/banner-4.jpg";
import { database } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { Rating } from "react-simple-star-rating";
import { formatTimeAgo } from "../../helpers/utils/date";
import { showNotification } from "../../helpers/utils/notification";
import { cleaning_services_types } from "../../helpers/constants";
import { counties } from "../../data/conties";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  const servicesCollection = collection(database, "services");
  const [loading, setLoading] = useState(false);
  const [serviceFilter, setServiceFilter] = useState({
    type: "",
    location: "",
    keyword: "",
  });

  const handleInputChange = (e) => {
    setServiceFilter({
      ...serviceFilter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredServices = services.filter((service) => {
      return (
        service.type === serviceFilter.type &&
        service.location === serviceFilter.location &&
        service.title
          .toLowerCase()
          .includes(serviceFilter.keyword.toLowerCase())
      );
    });

    setServices(filteredServices);

    if (filteredServices.length === 0) {
      showNotification("No services found!");
      fetchServices();
    }

    if (serviceFilter.keyword === "") {
      fetchServices();
    }
  };

  const fetchServices = () => {
    setLoading(true);

    getDocs(servicesCollection)
      .then((querySnapshot) => {
        const services = [];
        querySnapshot.forEach((doc) => {
          services.push({ ...doc.data(), id: doc.id });
        });

        setServices(services);
      })
      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      serviceFilter.type === "" &&
      serviceFilter.location === "" &&
      serviceFilter.keyword === ""
    ) {
      fetchServices();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceFilter]);

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
                  <span className="count">{services.length}</span> Services
                  Listed Here!
                </h1>
                <p className="fs-md ft-medium">
                  Find the best services Providers for your cleaning needs
                </p>
              </div>

              <form className="bg-white rounded p-1" onSubmit={handleSubmit}>
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Service Title or Keyword "
                        name="keyword"
                        value={serviceFilter.keyword}
                        onChange={handleInputChange}
                      />
                      <i className="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select
                        className="custom-select lg b-0"
                        name="type"
                        value={serviceFilter.type}
                        onChange={handleInputChange}
                      >
                        <option value="1">Choose Categories</option>
                        {cleaning_services_types.map((service, index) => (
                          <option key={index} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select
                        className="custom-select lg b-0"
                        name="location"
                        value={serviceFilter.location}
                        onChange={handleInputChange}
                      >
                        <option value="1">Choose Location</option>
                        {counties.map((county, index) => (
                          <option key={index} value={county.name}>
                            {county.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="submit"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Trending Service Providers</h6>
                <h2 className="ft-bold">All Popular Listed Services</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            {services.map((service) => (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="job_grid border rounded ">
                    <div className="job_grid_thumb mb-3 pt-5 px-3">
                      <Link
                        className="d-block text-center m-auto"
                        to={`/${service.id}`}
                      >
                        <img
                          src={service.image}
                          className="img-fluid"
                          width="70"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="job_grid_caption text-center pb-5 px-3">
                      <div className="position-absolute ab-right">
                        <span className="medium bg-light-warning text-warning px-2 py-1 rounded">
                          {service.type}
                        </span>
                      </div>

                      <h6 className="mb-0 lh-1 ft-medium medium">
                        <Link
                          to={`/${service.id}`}
                          href="employer-detail.html"
                          className="text-muted medium"
                        >
                          <Rating
                            size={14}
                            initialValue={service.ratings}
                            readonly
                          />
                        </Link>
                      </h6>
                      <h4 className="mb-0 ft-medium medium">
                        <a href="job-detail.html" className="text-dark fs-md">
                          {service.title}
                        </a>
                      </h4>
                      <div className="jbl_location">
                        <i className="lni lni-map-marker mr-1"></i>
                        <span>{service.location}</span>
                      </div>
                    </div>
                    <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                      <div className="df-1 text-muted">
                        <i className="lni lni-wallet mr-1"></i>Ksh{" "}
                        {service.price}
                      </div>
                      <div className="df-1 text-muted">
                        <i className="lni lni-timer mr-1"></i>
                        {formatTimeAgo(service.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
