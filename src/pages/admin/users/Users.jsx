/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/loader/Loader";
import { showNotification } from "../../../helpers/utils/notification";
import { database } from "../../../services/firebase";

const Users = () => {
  const [users, setUsers] = useState([]);
  const usersCollection = collection(database, "users");
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);

    getDocs(usersCollection)
      .then((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        setUsers(users);
      })
      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchUsers, []);

  return (
    <>
      {loading && <Loader />}
      <div className="mb-4 tbl-lg rounded overflow-hidden">
        <div className="table-responsive bg-white">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="dash-title">
                      <h4 className="mb-0 ft-medium fs-sm">{user.firstName}</h4>
                    </div>
                  </td>
                  <td>
                    <div className="dash-filled">
                      <div className="dash-title">
                        <h4 className="mb-0 ft-medium fs-sm">{user.email}</h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{user.phone}</div>
                  </td>
                  <td>
                    <div className="theme-bg text-light rounded px-3 py-2 ft-medium">
                      {user.role}
                    </div>
                  </td>
                  <td>
                    <div className="dash-action"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
