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
    </div>
  );
};

export default Home;
