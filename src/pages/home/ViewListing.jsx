import { getDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import bgImage from "../../assets/img/landing-bg.png";
import { database } from "../../services/firebase";

const ViewListing = () => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getService = () => {
    setLoading(true);

    getDoc(doc(database, "services", id));
  };

  return (
    <>
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
                <h1 class="ft-bold mb-4">The Most Exciting</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewListing;
