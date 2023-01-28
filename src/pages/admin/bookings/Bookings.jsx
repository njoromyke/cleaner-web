/* eslint-disable jsx-a11y/anchor-is-valid */
import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../services/firebase";
import { useEffect } from "react";
import { showNotification } from "../../../helpers/utils/notification";
import Loader from "../../../components/loader/Loader";
import { formatTimeAgo } from "../../../helpers/utils/date";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const bookingsCollection = collection(database, "bookings");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchBookings = () => {
    setLoading(true);
    getDocs(bookingsCollection)
      .then((querySnapshot) => {
        const bookings = [];
        querySnapshot.forEach((doc) => {
          bookings.push({ ...doc.data(), id: doc.id });
        });
        setBookings(bookings);
      })
      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <div class="dashboard-widg-bar d-block">
        {loading && <Loader />}
        <div class="row">
          <div class="col-xl-12 col-md-12 col-sm-12">
            <div class="cl-justify">
              <div class="cl-justify-first">
                <p class="m-0 p-0 ft-sm">
                  You have{" "}
                  <span class="text-dark ft-medium">{bookings?.length} </span>
                  bookings
                </p>
              </div>

              <div class="cl-justify-last">
                <div class="d-flex align-items-center justify-content-left">
                  <div class="dlc-list">
                    <select class="form-control sm rounded">
                      <option>Sort By</option>
                      <option>Paid</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="mb-4 tbl-lg rounded overflow-hidden">
              <div class="table-responsive bg-white">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Service Title</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Completion Status</th>
                      <th scope="col">Date Booked</th>
                      <th scope="col">Date Completed</th>
                      <th scope="col">Client</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr>
                        <td>
                          <div class="cats-box rounded bg-white d-flex align-items-center">
                            <div class="text-center"></div>
                            <div class="cats-box-caption px-2">
                              <h4 class="fs-md mb-0 ft-medium">
                                {booking.serviceTitle}
                              </h4>
                              <div class="d-block mb-2 position-relative">
                                <span class="text-muted medium">
                                  <i class="lni lni-map-marker mr-1"></i>
                                  {booking.serviceLocation}
                                </span>
                                <span class="muted medium ml-2 theme-cl">
                                  <i class="lni lni-briefcase mr-1"></i>Full
                                  {booking.serviceType}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {booking.paymentStatus === "paid" ? (
                            <span class="badge text-bg-success">
                              <i class="lni lni-checkmark-circle"></i> Paid
                            </span>
                          ) : (
                            <span class="badge text-bg-danger">
                              <i class="lni lni-close-circle"></i> Unpaid
                            </span>
                          )}
                        </td>
                        <td>
                          {booking.completionStatus === "completed" ? (
                            <span class="badge text-bg-success">
                              <i class="lni lni-checkmark-circle"></i> Completed
                            </span>
                          ) : (
                            <span class="badge text-bg-danger">
                              <i class="lni lni-close-circle"></i> Uncompleted
                            </span>
                          )}
                        </td>
                        <td>{formatTimeAgo(booking.createdAt)}</td>

                        <td>{formatTimeAgo(booking.completedAt)}</td>
                        <td> {booking.clientName}</td>
                        <td>
                          <div className="dash-action">
                            <div
                              role={"button"}
                              onClick={() => {
                                setShowModal(true);
                                setSelectedBooking(booking);
                              }}
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-cash"></i>
                            </div>
                            <div
                              role={"button"}
                              className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              onClick={() => {
                                setShowDeleteModal(true);
                                selectedBooking(booking.id);
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

        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="" aria-label="Previous">
                  <span class="fas fa-arrow-circle-right"></span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  ...
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  18
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span class="fas fa-arrow-circle-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
