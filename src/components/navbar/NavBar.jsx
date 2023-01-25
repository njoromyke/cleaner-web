import React from "react";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="header header-light dark-text sticky-top head-shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand" href="#">
                <img src={logo} className="logo" alt="" />
              </a>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="dashboard-post-job.html"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus-circle mr-1 mr-1"></i>Post Job
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-menus-wrapper">
              <ul className="nav-menu">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="">Find Job</a>
                </li>

                <li>
                  <a href="">Candidates</a>
                </li>

                <li>
                  <a href="">Employers</a>
                </li>

                <li>
                  <a href="">Pages</a>
                </li>
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login"
                    className="ft-medium"
                  >
                    <i className="lni lni-user mr-2"></i>Sign In
                  </a>
                </li>
                <li className="add-listing theme-bg">
                  <a href="dashboard-post-job.html">
                    <i className="lni lni-circle-plus mr-1"></i> Post a Job
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default NavBar;
