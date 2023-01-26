import React from "react";

const AccessDenied = () => {
  return (
    <div>
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
              <div className="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-danger text-danger mx-auto mb-4">
                <i className="ti-face-smile fs-lg"></i>
              </div>
              <h2 className="mb-2 ft-bold">404. Access Denied.</h2>
              <p className="ft-regular fs-md mb-5">
                Sorry, you don't have access to this page. Please contact your
                administrator.
              </p>
              <a className="btn btn-dark" href="/">
                Go To Home Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessDenied;
