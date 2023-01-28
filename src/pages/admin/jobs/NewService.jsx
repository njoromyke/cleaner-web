import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { counties } from "../../../data/conties";
import { cleaning_services_types } from "../../../helpers/constants";
import { showNotification } from "../../../helpers/utils/notification";
import { auth, database } from "../../../services/firebase";

const NewService = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchJob = () => {
    setLoading(true);

    getDoc(doc(database, "services", id))
      .then((doc) => {
        if (doc.exists()) {
          setFormData(doc.data());
        } else {
          showNotification("Service not found");
        }
      })

      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.title ||
      !formData.image ||
      !formData.type ||
      !formData.location ||
      !formData.description
    )
      showNotification("Please fill all fields");

    const serviceCollection = collection(database, "services");

    if (id) {
      const service = {
        title: formData.title,
        image: formData.image,
        type: formData.type,
        location: formData.location,
        description: formData.description,
        ratings: formData.ratings,
        reviews: formData.reviews,
        createdAt: formData.createdAt,
        owner: formData.owner,
      };

      updateDoc(doc(database, "services", id), service)
        .then((docRef) => {
          showNotification("Service updated successfully", "success");
          navigate("/admin/jobs");
        })
        .catch((error) => {
          showNotification(error.message);
        })
        .finally(() => setLoading(false));
    } else {
      const service = {
        title: formData.title,
        image: formData.image,
        type: formData.type,
        location: formData.location,
        description: formData.description,
        ratings: 0,
        reviews: 0,
        createdAt: new Date().getTime(),
        owner: auth.currentUser.email,
        price: formData.price,
      };

      addDoc(serviceCollection, service)
        .then((docRef) => {
          showNotification("Service added successfully", "success");
          navigate("/admin/jobs");
        })
        .catch((error) => {
          showNotification("Error adding service");
        })
        .finally(() => setLoading(false));

      setFormData({});
    }
  };

  useEffect(() => {
    if (id) fetchJob();
  }, [id]);

  return (
    <>
      <div className="dashboard-tlbar d-block mb-5">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <h1 className="ft-medium">Post A New Service</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item text-muted">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item text-muted">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className="theme-cl">
                    Post Service
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {loading && <Loader />}

      <div className="dashboard-widg-bar d-block">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="fa fa-file mr-1 theme-cl fs-sm"></i>Post A New
                    Service
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row" onSubmit={handleSubmit}>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Service Title
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Title"
                            name="title"
                            onChange={handleInputChange}
                            value={formData.title}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Service Image
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Image URL"
                            name="image"
                            onChange={handleInputChange}
                            value={formData.image}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Service Price
                          </label>
                          <input
                            type="number"
                            className="form-control rounded"
                            placeholder="Price"
                            name="price"
                            onChange={handleInputChange}
                            value={formData.price}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Service Type
                          </label>
                          <select
                            className="form-control rounded"
                            name="type"
                            onChange={handleInputChange}
                            value={formData.type}
                            required
                          >
                            <option defaultValue>Select Service Type</option>
                            {cleaning_services_types
                              .map((service, index) => (
                                <option key={index} value={service.value}>
                                  {service.label}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Service County
                          </label>
                          <select
                            required
                            className="form-control rounded"
                            name="location"
                            onChange={handleInputChange}
                            value={formData.location}
                          >
                            {counties.map((location, index) => (
                              <option key={index} value={location.name}>
                                {location.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Service Description
                          </label>
                          <textarea
                            required
                            className="form-control rounded"
                            placeholder="Service Description"
                            name="description"
                            onChange={handleInputChange}
                            value={formData.description}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-md ft-medium text-light rounded theme-bg"
                          >
                            Publish Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewService;
