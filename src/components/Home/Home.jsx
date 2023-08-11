import React from 'react'
import './Home.css'
import gympic from '../../assets/gym-02.png'
import dumble from '../../assets/dumble.png'

export default function Home() {
  return <>
  <section className="home mt-5 pt-3" id='first'>
    <div className="container d-flex justify-content-between align-items-center hom-mob">
 
      <div className="txt">
        <h2>Exercise is the key to a <br/><span>Healthy</span> Lifestyle</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo<br/> eaque facere nostrum harum accusamus!</p>
        <div className="btns" data-aos="fade-right" data-aos-duration="1500">
          <button className='btn_start'>Get Started</button>
          <button className='btn_watch'><span><i class="fa-solid fa-play"></i></span> Watch Video</button>
        </div>
      </div>

      <div className="right-side">
        <div className="img-side">

          <div className="box1">
            <div className="box2">
              <div className="box3">
                <img src={gympic} alt=''/>
              </div>
            </div>
          </div>
        </div>

        <div className="dumble" data-aos="fade-right" data-aos-duration="1500">
          <img src={dumble} alt='' className='w-100'/>
        </div>

        <div className="heart_rates" data-aos="fade-right" data-aos-duration="2000">
          <p>Heart Rate</p>
          <span><i class="fa-solid fa-heart-pulse"></i></span>
          <p className='mt-2'>2345 BPM</p>
        </div>

        <div className="location" data-aos="fade-left" data-aos-duration="2000">
          <i class="fa-solid fa-location-dot"></i>
          <p>Find a new gym near you</p>
        </div>

      </div>
    </div>
  </section>
  
  </>
}
