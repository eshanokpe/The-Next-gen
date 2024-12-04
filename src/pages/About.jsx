import React from 'react';

function About() {
  return (
    <div className="container-fluid p-0">
      <img src="./src/assets/images/about-img.jpg" alt="Banner" className="aboutus-banner-image" />
      <div className="container banner-text">
        <div className='row justify-content-center'>
          <div className="col-12">
            <h1 className='text-center'>About us</h1>
    
          </div>
        </div>
      </div>
    
      
    
      <div className='container pb-3'>
        <div className="partner-header pt-5 text-center">
          <h1 className="h2">Meet Our Partners</h1>
        </div>
    
        <div className="container">
          <div className="row pb-3">
            <div className="col-3">
              <img src="./src/assets/images/partner1.png" alt="" />
            </div>
            <div className="col-3">
              <img src="./src/assets/images/partner2.png" alt="" />
            </div>
            <div className="col-3">
              <img src="./src/assets/images/partner3.png" alt="" />
            </div>
            <div className="col-3">
              <img src="./src/assets/images/partner4.png" alt="" />
            </div>
          </div>
    
          <div className="row align-center">
            <div className="col-2"></div>
            <div className="col-4">
              <img src="./src/assets/images/partner5.png" alt="" />
            </div>
            <div className="col-4">
              <img src="./src/assets/images/partner6.png" alt="" />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    
      
    
      <div className='container pb-3 pt-3'>
        <div className=" pt-5 text-center">
          <h1 >Subscribe to our Newsletter</h1>
          <p>Join our mailing list to get the latest news</p>
        </div>
    
        <div className="d-flex justify-content-center align-items-center ">
          <form action='#' class="row g-3 p-3">
            <div class="col-auto ">
              <input type="password" class="form-control p-3 w-10 newsletter" id="inputPassword2" placeholder="Enter your email" />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3 p-3 subscribebutton" >Subscribe</button>
            </div>
          </form>
    
        </div>
    
      </div>
    
    
    </div>
    );
}

export default About;
