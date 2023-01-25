import React, { useState } from "react";
import { cleaning_services_types } from "../../../helpers/constants";
import { counties } from "../../../data/conties";

const NewService = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
                            name="IMAGE"
                            onChange={handleInputChange}
                            value={formData.image}
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
                          >
                            {cleaning_services_types.map((service, index) => (
                              <>
                                <option defaultValue>
                                  Select Service Type
                                </option>
                                <option key={index} value={service.value}>
                                  {service.label}
                                </option>
                              </>
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
                            className="form-control rounded"
                            name="type"
                            onChange={handleInputChange}
                            value={formData.location}
                          >
                            {counties.map((location, index) => (
                              <>
                                <option defaultValue>Select Location</option>
                                <option key={index} value={location.name}>
                                  {location.name}
                                </option>
                              </>
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
                            className="form-control rounded"
                            placeholder="Service Description"
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

      <div className="row">
        <div className="col-md-12">
          <div className="py-3">
            ©{new Date().getFullYear()}. Designed By Christine.
          </div>
        </div>
      </div>
    </>
  );
};

export default NewService;
