import React from 'react';

function Footer() {
  return ( 
    <footer className=" footer">
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-3">
            <img
            src='./src/assets/images/footerlogo.png'
             />
          </div>
          <div className="col-lg-3" >
            <h3>COMPANY</h3>
            <p>How it works</p>
            <p>Talents</p>
            <p>Events</p>
          </div>
          <div className="col-lg-3">
            <h3>RESOURCES</h3>
            <p>Blog post name goes here</p>
            <p>Blog post name goes here</p>
            <p>Blog post name goes here</p>
            <p>Blog post name goes here</p>
          </div>
          <div className="col-lg-3">
            <h3>ABOUT</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <p className="p-3">Copyright © 2023 The NextGen Show</p>

    </footer>

  );
}

export default Footer;
