import React from 'react';
import HowitworkContent from './components/HowitworkContent';

function Home() {
  return (
    <div className="container-fluid p-0">
      <img src="./src/assets/images/banner.png" alt="Banner" className="banner-image" />
      <div className="container banner-text">
        <div className='row'>
          <div className="col-6">
            <h1>Imрасting Livеѕ оf Yоung Pеорle in Afriса.</h1>
            <p>Mаking youngsters lеvеrаgе thеir
              skills, аbilitiеѕ and <br />talents ѕtаnd
              out as a gоаl gеttеr
            </p>
            <div className="row">
              <div className="col-3">
                <a className='btn btn-primary rounded-0 banner-button text-black'>
                  Join Us
                </a>
              </div>
              <div className="col-4">
                <a className='d-flex align-items-center btn btn-outline-primary rounded-0 banner-how-it-works text-white'>
                  <img className="me-3" width="24" height="24"  src='./src/assets/images/play_icon.png'/>
                  How it works
                </a>
              </div>
            </div>
    
          </div>
        </div>
      </div> 
    
      <div  style={{backgroundColor:'#F3F3F5'}}>
          <HowitworkContent/>
      </div>
    
      <div className='container pb-3'>
        <div className="partner-header pt-5 text-center">
          <h1 className="h2">Our Partners</h1>
          <p>People who have trust in us </p>
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
    
      <div className="container-fluid p-0 rounded-0">
        <div className="gallery">
        <img 
          src='./src/assets/images/gallery_scroll.jpg' 
          alt="Gallery Image" 
          className="rounded-0 img-fluid rounded-3 shadow-lg mb-4"
        />
        </div>
      </div>
    
      <div className='container pb-3'>
        <div className="partner-header pt-5 text-center">
          <h1 className="h2">What people say about us</h1>
        </div>
    
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="col-12 mb-3">
                      <p>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                    </div>
                    <div class="col-12 whataboutuscard p-3">
                      <div className="row align-items-center">
                        <div class="col-5">
                          <img src="./src/assets/images/avatar1.png" />
                        </div>
                        <div class="col-7">
                          <h2>Emmanuel J</h2>
                          <p>Photographer</p>
                        </div>
                      </div>
                    </div>
                  </div>
    
    
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="col-12 mb-3">
                      <p>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                    </div>
                    <div class="col-12 whataboutuscard p-3">
                      <div className="row align-items-center">
                        <div class="col-5">
                          <img src="./src/assets/images/avatar2.png" />
                        </div>
                        <div class="col-7">
                          <h2>John Woods</h2>
                          <p>Software Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="col-12 mb-3">
                      <p>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                    </div>
                    <div class="col-12 whataboutuscard p-3">
                      <div className="row align-items-center">
                        <div class="col-5">
                          <img src="./src/assets/images/avatar3.png" />
                        </div>
                        <div class="col-7">
                          <h2>Sidwell Mako</h2>
                          <p>Artist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className='container pb-3'>
        <div className="partner-header pt-5 text-center">
          <h1 className="h2">Our Blog</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
          <img
            src='./src/assets/images/zep.png'
          />
        </div>
    
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card " >
                <div className="card-body p-0 blogcard">
                  <div class="row">
                    <div class="col-12 mb-3 ">
                      <img 
                      className='blogcard'
                      src='./src/assets/images/blog1.png'
                      alt=''
                      style={{width:"100%"}}
                      />
                    </div>
                    <div class="col-12">
                      <div className="text-end pr-3">
                        <img  
                          src='./src/assets/images/arrow.png'
                        />
                      </div>
                      <div className=" p-3">
                        <p style={{color:'#017297'}}>26th June</p>
                        <h2>Lorem Ipsum</h2>
                      </div>
    
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card " >
                <div className="card-body p-0 blogcard">
                  <div class="row">
                    <div class="col-12 mb-3 ">
                      <img 
                      className='blogcard'
                      src='./src/assets/images/blog2.jpg'
                      alt=''
                      style={{width:"100%"}}
                      />
                    </div>
                    <div class="col-12">
                      <div className="text-end pr-3">
                        <img  
                          src='./src/assets/images/arrow.png'
                        />
                      </div>
                      <div className=" p-3">
                        <p style={{color:'#017297'}}>26th June</p>
                        <h2>Lorem Ipsum</h2>
                      </div>
    
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card " >
                <div className="card-body p-0 blogcard">
                  <div class="row">
                    <div class="col-12 mb-3 ">
                      <img 
                      className='blogcard'
                      src='./src/assets/images/blog3.jpg'
                      alt=''
                      style={{width:"100%"}}
                      />
                    </div>
                    <div class="col-12">
                      <div className="text-end pr-3">
                        <img  
                          src='./src/assets/images/arrow.png'
                        />
                      </div>
                      <div className=" p-3">
                        <p style={{color:'#017297'}}>26th June</p>
                        <h2>Lorem Ipsum</h2>
                      </div>
    
                    </div>
                  </div>
                  </div>
              </div>
            </div>
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

export default Home;
