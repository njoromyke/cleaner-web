import React from "react";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <div class="header header-light dark-text sticky-top">
      <div class="container">
        <nav id="navigation" class="navigation navigation-landscape">
          <div class="nav-header">
            <a class="nav-brand" href="#">
              <img src={logo} class="logo" alt="" />
            </a>
            <div class="nav-toggle"></div>
            <div class="mobile_nav">
              <ul>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login"
                    class="theme-cl fs-lg"
                  >
                    <i class="lni lni-user"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="dashboard-post-job.html"
                    class="crs_yuo12 w-auto text-white theme-bg"
                  >
                    <span class="embos_45">
                      <i class="fas fa-plus-circle mr-1 mr-1"></i>Post Job
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav-menus-wrapper">
            <ul class="nav-menu">
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

            <ul class="nav-menu nav-menu-social align-to-right">
              <li>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#login"
                  class="ft-medium"
                >
                  <i class="lni lni-user mr-2"></i>Sign In
                </a>
              </li>
              <li class="add-listing theme-bg">
                <a href="dashboard-post-job.html">
                  <i class="lni lni-circle-plus mr-1"></i> Post a Job
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
