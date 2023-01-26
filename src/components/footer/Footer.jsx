import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="py-3">
            ©{new Date().getFullYear()}. Designed By Christine.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
