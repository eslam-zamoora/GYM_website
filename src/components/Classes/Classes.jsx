import React from 'react'
import './Classes.css'
import trainerImg from '../../assets/trainer.png'

export default function Classes() {
  return <>
  <section className="classes" id='third'>
    <div className="container">
      <div className="row row-cols-md-2 align-items-center g-5">
        <div className="col" data-aos="fade-left" data-aos-duration="1500">
          <div className="img w-100">
              <img src={trainerImg} alt='' className='mw-100'/>
          </div>
        </div>
        <div className="col" data-aos="fade-right" data-aos-duration="1500">
          <div className="classes-txt">
              <h3>Ready to make a <span>change?</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt ea atque nesciunt nihil voluptatem, laudantium dolor iste quisquam alias eos asperiores expedita delectus amet.</p>
              <button className='classes_btn'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
}
