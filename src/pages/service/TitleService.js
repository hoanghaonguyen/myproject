import React, { useEffect } from 'react'
import './titleService.css'
import AOS from "aos";
import "aos/dist/aos.css";

const TitleService = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='ourservice' data-aos="zoom-in">
       <h3 className='title'>OUR SERVICES</h3>
       <div className="text">
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde impedit repellendus cumque non ipsa mollitia! Laudantium, placeat perspiciatis minus cum nulla nisi temporibus excepturi. Unde possimus fuga ab debitis?
            </p>
        </div>         
    </div>
  )
}

export default TitleService