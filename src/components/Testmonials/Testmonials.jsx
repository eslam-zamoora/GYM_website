import React from 'react'
import './Testmonials.css'
import Slider from 'react-slick';

import img1 from '../../assets/avatar01.png'
import img2 from '../../assets/avatar02.png'




export default function Testmonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

 
  return <>
      <section className="testmonials">
          <div className="container">
                <div className="header mb-5">
                <h2>Testmonials</h2>
                
              </div>

              <div className="persons mt-5"  data-aos="flip-left"   data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <Slider {...settings}>

                      <div>
                        <div className="img">
                        <img src={img2} alt='' className='mw-100'/>
                        </div>
                        <div className="content">
                          <h3>Cristena</h3>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis magni ea voluptatem eveniet sint autem sequi laborum explicabo delectus odio facere reiciendis, molestias odit rerum maiores, quidem, vel esse?</p>
                        </div>
                      </div>
 

                      <div>
                        <div className="img">
                        <img src={img1} alt='' className='mw-100'/>
                        </div>
                        <div className="content">
                          <h3>Lora</h3>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis magni ea voluptatem eveniet sint autem sequi laborum explicabo delectus odio facere reiciendis, molestias odit rerum maiores, quidem, vel esse?</p>
                        </div>
                      </div>

                      <div>
                        <div className="img">
                        <img src={img2} alt='' className='mw-100'/>
                        </div>
                        <div className="content">
                          <h3>Cristena</h3>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis magni ea voluptatem eveniet sint autem sequi laborum explicabo delectus odio facere reiciendis, molestias odit rerum maiores, quidem, vel esse?</p>
                        </div>
                      </div>
                  </Slider>

              </div>


          </div>
      </section>
  
  </>
}
