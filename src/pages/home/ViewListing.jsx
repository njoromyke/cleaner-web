import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import bgImage from "../../assets/img/landing-bg.png";
import { showNotification } from "../../helpers/utils/notification";
import { auth, database } from "../../services/firebase";
import useLoggedInUser from "../../hooks/useLoggedInUser";
import Loader from "../../components/loader/Loader";

const ViewListing = () => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { user } = useLoggedInUser();
  const navigate = useNavigate();

  const getService = () => {
    setLoading(true);

    getDoc(doc(database, "services", id))
      .then((doc) => {
        if (doc.exists()) {
          setService({ ...doc.data(), id: doc.id });
        } else {
          showNotification("Service not found!");
        }
      })
      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  const bookService = () => {
    setLoading(true);
    const bookingCollection = collection(database, "bookings");

    addDoc(bookingCollection, {
      serviceTitle: service.title,
      paymentStatus: "pending",
      completed: false,
      createdAt: new Date(),
      completedAt: null,
      client: user.phone,
      serviceType: service.type,
      serviceLocation: service.location,
    })
      .then((docRef) => {
        showNotification("Service booked successfully!", "success");
        navigate(`/payments/${docRef.id}`);
      })
      .catch((error) => {
        showNotification(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getService();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      <div
        class="py-5"
        style={{
          background: "#03343b",
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
        }}
        data-overlay="0"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
              <div class="banner_caption text-center mb-2">
                <h1 class="ft-bold mb-4">
                  {service.title} - {service.location}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <section class="bg-light py-5 position-relative">
          <div class="container">
            <div class="row">
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                <div class="bg-white rounded px-3 py-4 mb-4">
                  <div class="jbd-01 d-flex align-items-center justify-content-between">
                    <div class="jbd-flex d-flex align-items-center justify-content-start">
                      <div class="jbd-01-thumb">
                        <img
                          src={service.image}
                          class="img-fluid"
                          width="90"
                          alt=""
                        />
                      </div>
                      <div class="jbd-01-caption pl-3">
                        <div class="tbd-title">
                          <h4 class="mb-0 ft-medium fs-md text-black">
                            {service.title}
                          </h4>
                        </div>
                        <div class="jbl_location mb-3">
                          <span>
                            <i class="lni lni-map-marker mr-1"></i>
                            {service.location}
                          </span>
                          <span class="medium ft-medium text-warning ml-3">
                            Ksh : {service.price}
                          </span>
                        </div>
                        <div class="jbl_info01">
                          <span class="px-2 py-1 ft-medium medium rounded theme-cl theme-bg-light mr-2">
                            {service.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded mb-4">
                  <div class="jbd-01 px-3 py-4">
                    <div class="mb-4">
                      <h5 class="ft-medium fs-md text-black">Description</h5>
                      <p className="text-black-50">{service.description}</p>
                    </div>
                  </div>

                  <div class="jbd-02 px-3 py-3 br-top">
                    <div class="jbd-02-flex d-flex align-items-center justify-content-between">
                      <div class="jbd-02-social">
                        <h5 class="ft-medium fs-md text-black">
                          Share this service
                        </h5>

                        <ul class="jbd-social">
                          <li>
                            <FacebookShareButton
                              quote={service.title}
                              hashtag={`#${service.title}`}
                              url={window.location.href}
                            >
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <TwitterShareButton
                              title={service.title}
                              hashtags={[service.title]}
                              url={window.location.href}
                            >
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>
                          </li>
                          <li>
                            <WhatsappShareButton
                              title={service.title}
                              url={window.location.href}
                            >
                              <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                          </li>
                          <li>
                            <LinkedinShareButton
                              title={service.title}
                              url={window.location.href}
                            >
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                          </li>
                          <li>
                            <TelegramShareButton
                              title={service.title}
                              url={window.location.href}
                            >
                              <TelegramIcon size={32} round />
                            </TelegramShareButton>
                          </li>
                        </ul>
                      </div>
                      <div class="jbd-02-aply">
                        <div class="jbl_button mb-2">
                          <button
                            class="btn btn-md rounded theme-bg text-light fs-sm ft-medium"
                            onClick={bookService}
                          >
                            Book This Service
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div class="jb-apply-form bg-white rounded py-3 px-4 box-static">
                  <div class="hide-1023">
                    <div class="jbl_button mb-2" onClick={bookService}>
                      <a class="btn rounded theme-bg-light theme-cl fs-sm ft-medium">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewListing;
