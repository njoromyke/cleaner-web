import React, { useEffect, useState } from "react";
import useLoggedInUser from "../../../hooks/useLoggedInUser";
import { database } from "../../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const DashboardPage = () => {
  const { user } = useLoggedInUser();
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const usersCollection = collection(database, "users");
  const servicesCollection = collection(database, "services");
  const bookingsCollection = collection(database, "bookings");

  const getServices = () => {
    getDocs(servicesCollection)
      .then((querySnapshot) => {
        const services = [];
        querySnapshot.forEach((doc) => {
          services.push({ ...doc.data(), id: doc.id });
        });
        setServices(services);
      })
      .finally(() => setLoading(false));
  };

  const getBookings = () => {
    getDocs(bookingsCollection)
      .then((querySnapshot) => {
        const bookings = [];
        querySnapshot.forEach((doc) => {
          bookings.push({ ...doc.data(), id: doc.id });
        });
        setBookings(bookings);
      })
      .finally(() => setLoading(false));
  };

  const getUsers = () => {
    getDocs(usersCollection)
      .then((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        setUsers(users);
      })
      .finally(() => setLoading(false));
  };

  const getDashboardData = () => {
    getServices();
    getBookings();
    getUsers();
  };

  useEffect(getDashboardData, []);

  return (
    <>
      <div class="dashboard-tlbar d-block mb-5">
        <div class="row">
          <div class="colxl-12 col-lg-12 col-md-12">
            <h1 class="ft-medium">Hello, {user?.firstName} </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item text-muted">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#" class="theme-cl">
                    Dashboard
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="dashboard-widg-bar d-block">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="dash-widgets py-5 px-4 bg-success rounded">
              <h2 class="ft-medium mb-1 fs-xl text-light">{bookings.length}</h2>
              <p class="p-0 m-0 text-light fs-md">{users.length} Bookings</p>
              <i class="lni lni-empty-file"></i>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="dash-widgets py-5 px-4 bg-purple rounded">
              <h2 class="ft-medium mb-1 fs-xl text-light">{services.length}</h2>
              <p class="p-0 m-0 text-light fs-md">{users.length} Services</p>
              <i class="lni lni-users"></i>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="dash-widgets py-5 px-4 bg-danger rounded">
              <h2 class="ft-medium mb-1 fs-xl text-light">{users.length}</h2>
              <p class="p-0 m-0 text-light fs-md">{users.length} Users</p>
              <i class="lni lni-bar-chart"></i>
            </div>
          </div>
          {/* TODO add Messages */}
          {/* <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="dash-widgets py-5 px-4 bg-blue rounded">
              <h2 class="ft-medium mb-1 fs-xl text-light"></h2>
              <p class="p-0 m-0 text-light fs-md">Bookmark</p>
              <i class="lni lni-heart"></i>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
