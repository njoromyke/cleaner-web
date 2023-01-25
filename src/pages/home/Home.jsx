import React from "react";
import Banner from "../../assets/img/banner-4.jpg";

const Home = () => {
  return (
    <div>
      <div
        class="home-banner margin-bottom-0"
        data-overlay="5"
        style={{
          background: `#00ab46 url(${Banner}) no-repeat`,
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="banner_caption text-center mb-5">
                <h1 class="banner_title ft-bold mb-1">
                  <span class="count">72412</span> jobs Listed Here!
                </h1>
                <p class="fs-md ft-medium">Your Dream Jobs is Waiting</p>
              </div>

              <form class="bg-white rounded p-1">
                <div class="row no-gutters">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="form-group mb-0 position-relative">
                      <input
                        type="text"
                        class="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i class="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div class="form-group mb-0 position-relative">
                      <input
                        type="text"
                        class="form-control lg left-ico"
                        placeholder="Location or Zip Code"
                      />
                      <i class="bnc-ico lni lni-target"></i>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div class="form-group mb-0 position-relative">
                      <select class="custom-select lg b-0">
                        <option value="1">Choose Categories</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Cloud Computing</option>
                        <option value="4">Engineering Services</option>
                        <option value="5">Healthcare/Pharma</option>
                        <option value="6">Telecom/ Internet</option>
                        <option value="7">Finance/Insurance</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div class="form-group mb-0 position-relative">
                      <button
                        class="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="button"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div class="text-center align-items-center justify-content-center mt-5">
                <a href="" class="btn bg-white hover-theme ft-regular mr-1">
                  <i class="lni lni-user mr-1"></i>Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="middle">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="sec_title position-relative text-center mb-5">
                <h6 class="text-muted mb-0">Trending Jobs</h6>
                <h2 class="ft-bold">All Popular Listed jobs</h2>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="job_grid border rounded ">
                <div class="position-absolute ab-left">
                  <button
                    type="button"
                    class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div class="position-absolute ab-right">
                  <span class="medium theme-cl theme-bg-light px-2 py-1 rounded">
                    Full Time
                  </span>
                </div>
                <div class="job_grid_thumb mb-3 pt-5 px-3">
                  <a href="job-detail.html" class="d-block text-center m-auto">
                    <img
                      src="https://via.placeholder.com/120x120"
                      class="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div class="job_grid_caption text-center pb-5 px-3">
                  <h6 class="mb-0 lh-1 ft-medium medium">
                    <a href="employer-detail.html" class="text-muted medium">
                      ratings here
                    </a>
                  </h6>
                  <h4 class="mb-0 ft-medium medium">
                    <a href="job-detail.html" class="text-dark fs-md">
                      Laundry
                    </a>
                  </h4>
                  <div class="jbl_location">
                    <i class="lni lni-map-marker mr-1"></i>
                    <span>San Francisco</span>
                  </div>
                </div>
                <div class="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div class="df-1 text-muted">
                    <i class="lni lni-wallet mr-1"></i>$50k - $80k PA.
                  </div>
                  <div class="df-1 text-muted">
                    <i class="lni lni-timer mr-1"></i>3 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="position-relative text-center">
                <a
                  href="job-search-v1.html"
                  class="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                >
                  Explore More Jobs
                  <i class="lni lni-arrow-right-circle ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
