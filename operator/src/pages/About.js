import React from 'react';



function About() {
  return (
    <>
      <div className='container emp-profile'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
             
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Kirandeep Kaur dhanoa</h5>
                <h6> Tester </h6>
              

                  <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role='tab'>About</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-1'>
              <input type='text' className='profile-edit-btn' name='btnAddMore' value={'Edit Profile'} />
              
                </div>
          </div>

          <div className='row'>
            {/* left side url */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>Work Link</p>
                <a href='https://www.youtube.com/' target='kiran'>Youtube</a> <br />
                <a href='https://www.linkedin.com/in/kirandeep-kaur-dhanoa-8225a1232/' target='kiran'>Linkedin</a> <br />
                

                </div>
            </div>

             {/* right side data toggle */}

             <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
              
                  <div className='row'>
                    <div className='col-md-4'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-4'>
                      <p>Kirandeep kaur Dhanoa</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-4'>
                      <p>kirandeepdhanoa0567@gmail.com</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <label>Contact</label>
                    </div>
                    <div className='col-md-4'>
                      <p>5879918747</p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default About
