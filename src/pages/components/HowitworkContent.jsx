import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap"; 

function HowitworkContent () {
  
  const [key, setKey] = useState("createAccount");

  return (
    <div className='container pb-3'>
         <div className="howitworks-header pt-5 text-center">
          <h1 className="h2">How it works</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo
              tellus amet. Ut placerat dolor massa metus quisque sodales semper.
              Hac donec vulputate pharetra augue eu congue.
          </p>
        </div>

        <div className="container">
          <div className="row">
          <div className="col-lg-2"></div>

            <div className="col-lg-4">
              <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <div className="nav-item" role="presentation">
                  <a class="nav-link  custom-nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <div class="work d-flex  align-items-end">
                      <img src="./src/assets/images/profile-img.png" className="pl-3" />
                      <p>Create an Account </p>
                    </div>
                  </a>
                </div>
                
                <div className="nav-item" role="presentation">
                  <a class="nav-link custom-nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                    <div class="work d-flex  align-items-end">
                      <img src="./src/assets/images/calendar-img.png" className="pl-3" />
                      <p> Join an Event </p>
                    </div>
                  </a>
                </div>
                
                <div className="nav-item" role="presentation">
                  <a class="nav-link active custom-nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                    <div class="work d-flex  align-items-end">
                      <img src="./src/assets/images/list-img.png" className="pl-3" />
                      <p>Submit Requirements </p>
                    </div>
                  </a>
                </div>
                <div className="nav-item" role="presentation">
                  <a class="nav-link custom-nav-link" id="pills-shortlisted-tab" data-bs-toggle="pill" data-bs-target="#pills-shortlisted" type="button" role="tab" aria-controls="pills-shortlisted" aria-selected="false" >
                    <div class="work d-flex  align-items-end">
                      <img src="./src/assets/images/vote-img.png" className="pl-3" />
                      <p>Get Shortlisted </p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
           
            <div className="col-lg-6">
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                  <div className="card">
                    <div className="card-body" style={{height:'400px'}}>
                          <div className="d-flex flex-column justify-content-between">
                            <div class="p-2">
                              <img src="./src/assets/images/profile-img.png" />
                            </div>
                            <div class="p-2">
                              <h2>Create an Account </h2>
                              <p>Lorem ipsum dolor sit amet consectetur. Sit
                                curabitur nulla justo tellus amet. Ut placerat
                                dolor massa metus quisque sodales semper.
                                Hac donec vulputate pharetra augue eu congue.
                                </p>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
                
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <div className="card">
                    <div className="card-body" style={{height:'400px'}}>
                          <div className="d-flex flex-column justify-content-between">
                            <div class="p-2">
                              <img src="./src/assets/images/calendar-img.png" />
                            </div>
                            <div class="p-2">
                              <h2>Join an Event</h2>
                              <p>Lorem ipsum dolor sit amet consectetur. Sit
                                curabitur nulla justo tellus amet. Ut placerat
                                dolor massa metus quisque sodales semper.
                                Hac donec vulputate pharetra augue eu congue.
                                </p>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade show active" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                <div className="card">
                    <div className="card-body" style={{height:'400px'}}>
                          <div className="d-flex flex-column justify-content-between">
                            <div class="p-2">
                              <img src="./src/assets/images/list-img.png" />
                            </div>
                            <div class="p-2">
                              <h2>Submit Requirements</h2>
                              <p>Lorem ipsum dolor sit amet consectetur. Sit
                                curabitur nulla justo tellus amet. Ut placerat
                                dolor massa metus quisque sodales semper.
                                Hac donec vulputate pharetra augue eu congue.
                                </p>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-shortlisted" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                <div className="card">
                    <div className="card-body" style={{height:'400px'}}>
                          <div className="d-flex flex-column justify-content-between">
                            <div class="p-2">
                              <img src="./src/assets/images/vote-img.png" />
                            </div>
                            <div class="p-2">
                              <h2>Get Shortlisted</h2>
                              <p>Lorem ipsum dolor sit amet consectetur. Sit
                                curabitur nulla justo tellus amet. Ut placerat
                                dolor massa metus quisque sodales semper.
                                Hac donec vulputate pharetra augue eu congue.
                                </p>
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
  );
};
 
export default HowitworkContent;
