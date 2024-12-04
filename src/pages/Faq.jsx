import React from 'react';

function Faq() {
  return (
    <div className="container-fluid p-0">
      <img src="./src/assets/images/about-img.jpg" alt="Banner" className="aboutus-banner-image" />
      <div className="container banner-text">
        <div className='row  justify-content-center'>
          <div className="col-12">
            <h1 className='text-center'>
              How can we help you?
            </h1>
            <div className="search-container">
              <div className="search-bar">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Search for answers" />
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <div className='container getting-started'>
        <div className="text-center">
          <div className="row">
            <div className="col-lg-6">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Getting Started</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Talents</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Events</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Categories</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Enrolment Payment</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Shortlisting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Voting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="card faqcustom-card">
                <div className="card-body ">
                  <h3>Prize Winning</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <div className='container pb-3'>
        <div className="faq-header pt-5 text-center">
          <h1 className="h2">Frequently asked Questions</h1>
        </div>
    
        <div className="container">
          <div className="row pb-3">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Do you Over Customer Support?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Do you Over Customer Support?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Do you Over Customer Support?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container pb-3'>
        <div className="faq-header pt-5 text-center">
          <h1 className="h2">Didn’t find what you are looking for?</h1>
          <p>Our Team is active to attend to your email</p>
        </div>
        <div className="row ">
          <div className=" text-center">
            <img 
              src='/src/assets/images/team-img.png' 
              alt="Gallery Image" 
            />
            <br/>
            <div class="pt-3" style={{marginTop:'20px'}}>
              <a class="btn btn-primary mb-3 p-3 subscribebutton rounded-0" >Contact us</a>
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
              <input type="password" class="form-control p-3 newsletter" id="inputPassword2" placeholder="Enter your email" />
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

export default Faq;
