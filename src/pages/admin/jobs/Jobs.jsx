import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../services/firebase";
import { showNotification } from "../../../helpers/utils/notification";
import { useEffect } from "react";
import Loader from "../../../components/loader/Loader";
import ModalAction from "../../../components/modal/ModalTemplate";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const jobsCollection = collection(database, "services");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchJobs = () => {
    setLoading(true);

    getDocs(jobsCollection)
      .then((querySnapshot) => {
        const jobs = [];
        querySnapshot.forEach((doc) => {
          jobs.push({ ...doc.data(), id: doc.id });
        });
        setJobs(jobs);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        showNotification("Error fetching jobs");
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    setLoading(true);

    deleteDoc(doc(database, "services", selectedProduct.id))
      .then(() => {
        showNotification("Service deleted successfully", "success");
        fetchJobs();
      })
      .catch((error) => {
        console.log(error);
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleEdit = (id) => {
    navigate(`/admin/jobs/edit/${id}`);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="dashboard-widg-bar d-block">
        {loading && <Loader />}
        {showDeleteModal && (
          <ModalAction
            handleClose={() => {
              setShowDeleteModal(false);
              setSelectedProduct(null);
            }}
            handleSubmit={() => {
              handleDelete();
              setShowDeleteModal(false);
              setSelectedProduct(null);
            }}
            title={"Delete Service"}
            actionVariant={"danger"}
            centered
            actionText={"Delete"}
          >
            <p>Are you sure you want to delete this service?</p>
          </ModalAction>
        )}

        {showModal && (
          <ModalAction
            handleClose={() => {
              setShowModal(false);
              setSelectedProduct(null);
            }}
            title={"Listing Details"}
          >
            <div className="row">
              <div className="col-md-6">
                <p className="mb-1 theme-bg">Title</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1">{selectedProduct?.title}</p>
              </div>
            </div>
          </ModalAction>
        )}

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="d-flex align-items-center p-3 alert alert-danger">
              Your listings will be automatically removed after 30 days.
            </div>
            <div className="mb-4 tbl-lg rounded overflow-hidden">
              <div className="table-responsive bg-white">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Image</th>
                      <th scope="col">Posted Date</th>
                      <th scope="col">Type</th>
                      <th scope="col">Location</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id}>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              {job.title}
                            </h4>
                          </div>
                        </td>
                        <td>
                          <div className="dash-filled">
                            <span className="p-2 circle gray d-inline-flex align-items-center justify-content-center">
                              <img
                                src={job.image}
                                alt=""
                                className="avatar rounded-5"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          {new Date(job.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td>{job.type}</td>
                        <td>
                          <div
                            href="dashboard-manage-applications.html"
                            className="theme-bg text-light rounded px-3 py-2 ft-medium"
                          >
                            {job.location}
                          </div>
                        </td>
                        <td>
                          <div className="dash-action">
                            <div
                              role={"button"}
                              onClick={() => {
                                setShowModal(true);
                                setSelectedProduct(job);
                              }}
                              className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                            >
                              <i className="lni lni-eye"></i>
                            </div>
                            <div
                              role={"button"}
                              onClick={() => handleEdit(job.id)}
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
                            </div>
                            <div
                              role={"button"}
                              className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              onClick={() => {
                                setShowDeleteModal(true);
                                setSelectedProduct(job.id);
                              }}
                            >
                              <i className="lni lni-trash-can"></i>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
