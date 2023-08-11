import React from 'react'
import './Pricing.css'

export default function Pricing() {
  return <>
  <section className="pricing" id='fourth'>
        <div className="container">
          <div className="header">
            <h2>Benefits Of <span>Exercise</span></h2>
            <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet, id earum non beatae placeat quas.</p>
          </div>

          <div className="content mt-5">
            <div className="row g-5">

              <div className="col-12  -12-md-12 col-lg-4"  data-aos="zoom-in-down" data-aos-duration="2000">
                <div className="item">
                  <div className="high">
                    <div>
                    <h2>Regular Member</h2>
                    <h3>$50 <span>/month</span></h3>
                    </div>
                  </div>

                  <div className="bdy">
                    <ul>
                      <li>Unlimited Access to the Gym</li>
                      <li>Customer support</li>
                      <li>Personal trainer</li>
                      <li>Standard options</li>
                      <li>5 clsses per week</li>
                    </ul>
                    <div className="btn w-100">
                    <button className='join-btn mx-auto'>Join Now</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-12  col-md-12 col-lg-4"  data-aos="zoom-in-down" data-aos-duration="2000">
                <div className="item">
                  <div className="high high-perfect">
                    <div>
                    <h2>Primieum Member</h2>
                    <h3>$70 <span>/month</span></h3>
                    </div>
                  </div>

                  <div className="bdy">
                    <ul>
                      <li>Unlimited Access to the Gym</li>
                      <li>Customer support</li>
                      <li>Personal trainer</li>
                      <li>Standard options</li>
                      <li>5 clsses per week</li>
                    </ul>
                    <div className="btn w-100">
                    <button className='join-btn mx-auto'>Join Now</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-12  col-md-12 col-lg-4"  data-aos="zoom-in-down" data-aos-duration="2000">
                <div className="item">
                  <div className="high">
                    <div>
                    <h2>Standard Member</h2>
                    <h3>$100 <span>/month</span></h3>
                    </div>
                  </div>

                  <div className="bdy">
                    <ul>
                      <li>Unlimited Access to the Gym</li>
                      <li>Customer support</li>
                      <li>Personal trainer</li>
                      <li>Standard options</li>
                      <li>5 clsses per week</li>
                    </ul>
                    <div className="btn w-100">
                    <button className='join-btn mx-auto'>Join Now</button>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>


        </div>
  </section>
  </>
}
