import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { showNotification } from "../../helpers/utils/notification";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../services/firebase";
import useLoggedInUser from "../../hooks/useLoggedInUser";
import Loader from "../../components/loader/Loader";

const socket = io("https://christine-app.herokuapp.com");

const Payment = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const bookingsDoc = doc(database, "bookings", id);
  const navigate = useNavigate();
  const { user } = useLoggedInUser();

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  socket.on("payment-initiated", (message) => {
    console.log(message);
    setLoading(true);
  });

  socket.on("payment-success", (message) => {
    console.log(message);

    updateDoc(bookingsDoc, {
      paymentStatus: "paid",
    })
      .then(() => {
        showNotification("Payment successful!", "success");
        navigate("/bookings/mine");
      })
      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  socket.on("payment-failed", (message) => {
    setLoading(false);
    showNotification("Payment failed!");
  });

  const initialPayment = () => {
    setLoading(true);
    fetch("https://christine-app.herokuapp.com/mpesa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: user.phone,
        amount: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
        showNotification(error.message);
      });
  };

  return (
    <div className="middle">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <div className="col md-12 mt-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title text-center">Payment</h3>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-success btn-block"
                        onClick={initialPayment}
                      >
                        Lipa na M-Pesa <i className="bi bi-cart-dash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
